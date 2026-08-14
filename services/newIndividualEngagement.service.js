/**
 * New Individual Engagement API Service
 * =====================================
 * Frontend API calls for submitting Phase 1 Client Engagement Form
 * and managing Phase 2 Admin reviews on /admin/individual-engagement-new.
 */

import { API_BASE_URL, apiFetch } from "@/services/apiConfig";

const ENDPOINT = "/new-individual-engagements";

/**
 * Helper to construct FormData for multipart/form-data API submission
 */
function buildFormDataPayload(payload) {
  const formData = new FormData();
  const fileKeys = [
    "primaryId",
    "supportingId",
    "selfie",
    "visaEvidence",
    "atoDocuments",
    "authorityDoc",
    "signatureUploadedFile",
  ];

  Object.keys(payload).forEach((key) => {
    const val = payload[key];
    if (val === undefined || val === null) return;

    if (fileKeys.includes(key)) {
      let fileList = [];
      if (Array.isArray(val)) {
        fileList = val;
      } else if (val && val.fileList) {
        fileList = val.fileList;
      } else if (val && (val.originFileObj || val instanceof File)) {
        fileList = [val];
      }

      fileList.forEach((fileItem) => {
        const rawFile = fileItem.originFileObj || fileItem;
        if (rawFile instanceof File) {
          formData.append(key, rawFile, rawFile.name);
        }
      });
    } else if (typeof val === "object" && !(val instanceof File)) {
      formData.append(key, JSON.stringify(val));
    } else {
      formData.append(key, val);
    }
  });

  return formData;
}

/**
 * Submit client-facing engagement form (Phase 1).
 * @param {object} formData - Form payload containing fields and uploaded files
 */
export const createNewIndividualEngagement = async (formData) => {
  const bodyData = buildFormDataPayload(formData);
  const response = await fetch(`${API_BASE_URL}${ENDPOINT}`, {
    method: "POST",
    body: bodyData,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Submission failed");
  }
  return data;
};

/**
 * Fetch all submitted engagement records for Admin table (/admin/individual-engagement-new).
 */
export const getNewIndividualEngagements = async () => {
  return apiFetch(ENDPOINT);
};

/**
 * Fetch single engagement record by ID for Admin detail view.
 * @param {number|string} id - Engagement ID
 */
export const getNewIndividualEngagementById = async (id) => {
  return apiFetch(`${ENDPOINT}/${id}`);
};

/**
 * Submit Tax Agent Phase 2 review decision, risk rating, and countersignature.
 * @param {number|string} id - Engagement ID
 * @param {object} decisionData - { decision, riskLevel, notes, taxAgentName }
 */
export const submitNewIndividualAdminDecision = async (id, decisionData) => {
  const formData = new FormData();
  const fileKeys = ["staffUploadedSignature"];

  Object.keys(decisionData).forEach((key) => {
    const val = decisionData[key];
    if (val === undefined || val === null) return;

    if (fileKeys.includes(key)) {
      let fileList = [];
      if (Array.isArray(val)) {
        fileList = val;
      } else if (val && val.fileList) {
        fileList = val.fileList;
      } else if (val && (val.originFileObj || val instanceof File)) {
        fileList = [val];
      }

      fileList.forEach((fileItem) => {
        const rawFile = fileItem.originFileObj || fileItem;
        if (rawFile instanceof File) {
          formData.append(key, rawFile, rawFile.name);
        }
      });
    } else if (typeof val === "object" && !(val instanceof File)) {
      formData.append(key, JSON.stringify(val));
    } else {
      formData.append(key, val);
    }
  });

  try {
    const response = await fetch(`${API_BASE_URL}${ENDPOINT}/${id}/decision`, {
      method: "PUT",
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Decision submission failed");
    }
    return data;
  } catch (error) {
    console.error(`API Error [PUT /decision]:`, error);
    if (error.message === "Failed to fetch") {
      throw new Error("Cannot connect to backend server at " + API_BASE_URL + ". Please verify backend is running on port 5000.");
    }
    throw error;
  }
};
