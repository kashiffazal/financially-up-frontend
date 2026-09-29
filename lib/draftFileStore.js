/**
 * Draft File Store (IndexedDB)
 * =============================
 * Saved drafts live in localStorage, which can only hold JSON — a File turns
 * into `{}` there, so uploaded documents used to be dropped from the draft and
 * silently lost when the client came back and submitted.
 *
 * IndexedDB stores File/Blob objects natively, so attachments are kept beside
 * the JSON draft and rehydrated into the form on restore.
 *
 * Every call is safe to await and never throws: private-browsing modes and
 * blocked storage simply behave as "no stored files", and the form then asks
 * the client to re-attach.
 */

const DB_NAME = "financially-up-draft-files";
const DB_VERSION = 1;
const STORE_NAME = "draftFiles";

/** True for a real uploadable file (File/Blob, or an antd wrapper holding one) */
export const isRealFile = (value) => {
  if (!value || typeof value !== "object") return false;
  if (typeof Blob !== "undefined" && value instanceof Blob) return true;
  if (typeof Blob !== "undefined" && value.originFileObj instanceof Blob) return true;
  // Cross-realm File: must expose the Blob slice API, not just a name
  return typeof value.name === "string" && typeof value.slice === "function";
};

/**
 * Collects every form value that holds real files.
 * Field names are discovered from the values themselves, so dynamic fields
 * (officer_0_idAttachment, member_1_corporateExtract, …) are included too.
 *
 * @param {object} values - form values
 * @returns {{files: object, names: object}} files by field, and their file names
 */
export const collectFileFields = (values = {}) => {
  const files = {};
  const names = {};

  Object.entries(values || {}).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      const realFiles = value.filter((item) => isRealFile(item));
      if (realFiles.length > 0) {
        files[key] = realFiles;
        names[key] = realFiles.map((f) => f.name || "document");
      }
    } else if (isRealFile(value)) {
      files[key] = [value];
      names[key] = [value.name || "document"];
    }
  });

  return { files, names };
};

/** Opens (or creates) the database; resolves null when IndexedDB is unavailable */
const openDatabase = () =>
  new Promise((resolve) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      resolve(null);
      return;
    }
    try {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
      request.onblocked = () => resolve(null);
    } catch (e) {
      resolve(null);
    }
  });

const runTransaction = (mode, action) =>
  new Promise((resolve) => {
    openDatabase().then((db) => {
      if (!db) {
        resolve(null);
        return;
      }
      try {
        const tx = db.transaction(STORE_NAME, mode);
        const store = tx.objectStore(STORE_NAME);
        const request = action(store);
        tx.oncomplete = () => {
          db.close();
          resolve(request ? request.result : true);
        };
        tx.onerror = () => {
          db.close();
          resolve(null);
        };
        tx.onabort = () => {
          db.close();
          resolve(null);
        };
      } catch (e) {
        try { db.close(); } catch (closeErr) { /* ignore */ }
        resolve(null);
      }
    });
  });

/**
 * Stores the uploaded files of a draft.
 * @param {string} draftKey - same key as the localStorage draft
 * @param {object} filesByField - { fieldName: File[] }
 * @returns {Promise<boolean>} true when stored
 */
export const saveDraftFiles = async (draftKey, filesByField) => {
  if (!draftKey) return false;
  if (!filesByField || Object.keys(filesByField).length === 0) {
    await clearDraftFiles(draftKey);
    return true;
  }
  const result = await runTransaction("readwrite", (store) =>
    store.put({ savedAt: Date.now(), fields: filesByField }, draftKey),
  );
  return result !== null;
};

/**
 * Loads the stored files of a draft.
 * @returns {Promise<object>} { fieldName: File[] } — empty when nothing is stored
 */
export const loadDraftFiles = async (draftKey) => {
  if (!draftKey) return {};
  const record = await runTransaction("readonly", (store) => store.get(draftKey));
  if (!record || !record.fields) return {};

  // Guard against anything that is no longer a usable file
  const restored = {};
  Object.entries(record.fields).forEach(([field, list]) => {
    const valid = (Array.isArray(list) ? list : [list]).filter((item) => isRealFile(item));
    if (valid.length > 0) restored[field] = valid;
  });
  return restored;
};

/** Removes the stored files of a draft (after submit or when the draft is cleared) */
export const clearDraftFiles = async (draftKey) => {
  if (!draftKey) return false;
  const result = await runTransaction("readwrite", (store) => store.delete(draftKey));
  return result !== null;
};
