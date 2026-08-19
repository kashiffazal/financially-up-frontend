/**
 * New Company Registration API Service
 * =====================================
 * Frontend API calls for submitting the 12-step Company Registration form
 * and managing Admin AML/CTF compliance reviews.
 * Connects to: /api/new-company-registrations
 */

import { API_BASE_URL, apiFetch } from '@/services/apiConfig';

/* API endpoint for new company registrations */
const ENDPOINT = '/new-company-registrations';

/**
 * Build FormData payload from the form state for multipart/form-data submission.
 * Handles nested file uploads, JSON arrays/objects, and primitive values.
 * @param {object} payload - Complete form state from all 12 steps
 * @returns {FormData} FormData ready for fetch POST
 */
function buildFormDataPayload(payload) {
  const formData = new FormData();
  const fileKeys = [
    'idDocument', 'photoId', 'occupierConsent', 'asicExtract',
    'trustDeed', 'structureChart', 'sourceOfWealthEvidence',
    'nomineeAgreement', 'authorityDocument', 'signatureFile',
  ];

  Object.keys(payload).forEach((key) => {
    const val = payload[key];
    if (val === undefined || val === null) return;
    if (fileKeys.includes(key)) {
      let fileList = [];
      if (Array.isArray(val)) fileList = val;
      else if (val && val.fileList) fileList = val.fileList;
      else if (val && (val.originFileObj || val instanceof File)) fileList = [val];
      fileList.forEach((fileItem) => {
        const rawFile = fileItem.originFileObj || fileItem;
        if (rawFile instanceof File) formData.append(key, rawFile, rawFile.name);
      });
    } else if (typeof val === 'object' && !(val instanceof File)) {
      formData.append(key, JSON.stringify(val));
    } else {
      formData.append(key, val);
    }
  });
  return formData;
}

/**
 * Submit the complete 12-step Company Registration form (client-facing).
 * Creates the master registration record + all child records + generates PDFs.
 * @param {object} formData - Complete form payload with fields and uploaded files
 * @returns {object} { success, message, data: { id, referenceNumber, status, clientPdfPath, directorConsentPdfs, memberConsentPdfs } }
 */
export const createNewCompanyRegistration = async (formData) => {
  const bodyData = buildFormDataPayload(formData);
  try {
    const response = await fetch(API_BASE_URL + ENDPOINT, { method: 'POST', body: bodyData });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Company registration submission failed');
    return data;
  } catch (error) {
    console.error('API Error [POST /new-company-registrations]:', error);
    if (error.message === 'Failed to fetch') {
      throw new Error('Cannot connect to backend server at ' + API_BASE_URL + '. Please verify backend is running on port 5000.');
    }
    throw error;
  }
};

/**
 * Fetch all company registration records for Admin Portal listing.
 * Supports pagination, search, and status filtering via query params.
 * @param {object} params - { page, limit, status, search }
 * @returns {object} { success, data: { records, total, page, totalPages } }
 */
export const getNewCompanyRegistrations = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  return apiFetch(ENDPOINT + (query ? '?' + query : ''));
};

/**
 * Fetch single registration record by ID for Admin Review detail view.
 * Includes all associations: officeholders, shareholders, documents, consents, etc.
 * @param {number|string} id - Registration ID
 * @returns {object} { success, data: <full registration record> }
 */
export const getNewCompanyRegistrationById = async (id) => {
  return apiFetch(ENDPOINT + '/' + id);
};

/**
 * Update a shareholder's details (triggers consent invalidation if shares changed).
 * @param {number|string} registrationId - Registration ID
 * @param {number|string} memberId - Shareholder ID
 * @param {object} shareholderData - Updated shareholder fields
 * @returns {object} { success, message, data, consentsInvalidated }
 */
export const updateShareholder = async (registrationId, memberId, shareholderData) => {
  try {
    const response = await fetch(
      API_BASE_URL + ENDPOINT + '/' + registrationId + '/shareholders/' + memberId,
      { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(shareholderData) }
    );
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to update shareholder');
    return data;
  } catch (error) {
    console.error('API Error [PUT /shareholders]:', error);
    throw error;
  }
};

/**
 * Submit Admin AML/CTF compliance review decision.
 * Supports drawn/uploaded/typed staff signatures via multipart FormData.
 * @param {number|string} id - Registration ID
 * @param {object} decisionData - Review decision fields + signature data
 * @returns {object} { success, message, data: { status, adminPdfPath } }
 */
export const submitNewCompanyAdminDecision = async (id, decisionData) => {
  const formData = new FormData();
  const fileKeys = ['staffSignature'];
  Object.keys(decisionData).forEach((key) => {
    const val = decisionData[key];
    if (val === undefined || val === null) return;
    if (fileKeys.includes(key)) {
      let fileList = [];
      if (Array.isArray(val)) fileList = val;
      else if (val && val.fileList) fileList = val.fileList;
      else if (val && (val.originFileObj || val instanceof File)) fileList = [val];
      fileList.forEach((fileItem) => {
        const rawFile = fileItem.originFileObj || fileItem;
        if (rawFile instanceof File) formData.append(key, rawFile, rawFile.name);
      });
    } else if (typeof val === 'object' && !(val instanceof File)) {
      formData.append(key, JSON.stringify(val));
    } else {
      formData.append(key, val);
    }
  });
  try {
    const response = await fetch(API_BASE_URL + ENDPOINT + '/' + id + '/decision', { method: 'PUT', body: formData });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Decision submission failed');
    return data;
  } catch (error) {
    console.error('API Error [PUT /decision]:', error);
    if (error.message === 'Failed to fetch') {
      throw new Error('Cannot connect to backend server at ' + API_BASE_URL + '. Please verify backend is running on port 5000.');
    }
    throw error;
  }
};

/**
 * Get URL for a generated PDF by type.
 * @param {number|string} id - Registration ID
 * @param {string} type - PDF type: ClientApplication, AdminReview, DirectorConsent, MemberConsent
 * @returns {string} Full URL to the PDF endpoint
 */
export const getNewCompanyPdfUrl = (id, type) => {
  return API_BASE_URL + ENDPOINT + '/' + id + '/pdf/' + type;
};

/**
 * Regenerate all PDFs for a registration on demand.
 * @param {number|string} id - Registration ID
 * @returns {object} { success, message, data: { clientPdfPath, adminPdfPath, directorPdfs, memberPdfs } }
 */
export const regenerateCompanyPdfs = async (id) => {
  try {
    const response = await fetch(API_BASE_URL + ENDPOINT + '/' + id + '/regenerate-pdf', { method: 'POST' });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'PDF regeneration failed');
    return data;
  } catch (error) {
    console.error('API Error [POST /regenerate-pdf]:', error);
    throw error;
  }
};
