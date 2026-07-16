/**
 * GST Registrations API Service
 * ====================================
 * Frontend service layer for GST Registration CRUD operations.
 * Wraps all API calls to the backend so components don't need to
 * know about URLs, headers, or error handling.
 *
 * Usage in components:
 *   import { getRecords, updateRecord } from '@/services/gstRegistrations.service';
 *   const data = await getRecords({ page: 1, status: "Approved" });
 */

import { apiFetch } from "./apiConfig";

const ENDPOINT = "/gst-registrations";

/**
 * Fetch all GST registration records with pagination, status filter, and search.
 * @param {object} params - Query parameters
 * @param {number} params.page - Page number (default: 1)
 * @param {number} params.limit - Records per page (default: 10)
 * @param {string} params.status - Filter by status (e.g., "Approved", "New Query")
 * @param {string} params.search - Search term across name, email, phone
 * @returns {object} { records: [], pagination: { total, page, limit, totalPages } }
 */
export const getRecords = async (params = {}) => {
  // Build query string from params
  const queryParams = new URLSearchParams();

  if (params.page) queryParams.append("page", params.page);
  if (params.limit) queryParams.append("limit", params.limit);
  if (params.status && params.status !== "All")
    queryParams.append("status", params.status);
  if (params.search) queryParams.append("search", params.search);

  const queryString = queryParams.toString();
  const url = queryString ? `${ENDPOINT}?${queryString}` : ENDPOINT;

  const response = await apiFetch(url);
  return response.data; // { records: [], pagination: {} }
};

/**
 * Fetch a single GST registration record by ID.
 * @param {number} id - Record ID
 * @returns {object} The record
 */
export const getRecordById = async (id) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`);
  return response.data;
};

/**
 * Create a new GST registration record.
 * @param {object} formData - Form data matching the model fields
 * @returns {object} The created record
 */
export const createRecord = async (formData) => {
  const response = await apiFetch(ENDPOINT, {
    method: "POST",
    body: formData,
  });
  return response.data;
};

/**
 * Update an existing GST registration record.
 * Used for editing fields or changing status (e.g., Approve).
 * @param {number} id - Record ID
 * @param {object} updateData - Fields to update
 * @returns {object} The updated record
 */
export const updateRecord = async (id, updateData) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`, {
    method: "PUT",
    body: updateData,
  });
  return response.data;
};

/**
 * Delete a GST registration record.
 * @param {number} id - Record ID
 * @returns {object} Success response
 */
export const deleteRecord = async (id) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`, {
    method: "DELETE",
  });
  return response;
};
