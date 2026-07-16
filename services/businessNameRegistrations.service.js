/**
 * Business Name Registrations API Service
 * ====================================
 * Frontend service layer for Business Name Registration CRUD operations.
 *
 * Usage in components:
 *   import { getRecords, updateRecord } from '@/services/businessNameRegistrations.service';
 *   const data = await getRecords({ page: 1, status: "Approved" });
 */

import { apiFetch } from "./apiConfig";

const ENDPOINT = "/business-name-registrations";

/**
 * Fetch all records with pagination, status filter, and search.
 * @param {object} params - Query parameters
 * @returns {object} { records: [], pagination: { total, page, limit, totalPages } }
 */
export const getRecords = async (params = {}) => {
  const queryParams = new URLSearchParams();

  if (params.page) queryParams.append("page", params.page);
  if (params.limit) queryParams.append("limit", params.limit);
  if (params.status && params.status !== "All")
    queryParams.append("status", params.status);
  if (params.search) queryParams.append("search", params.search);

  const queryString = queryParams.toString();
  const url = queryString ? `${ENDPOINT}?${queryString}` : ENDPOINT;

  const response = await apiFetch(url);
  return response.data;
};

/**
 * Fetch a single record by ID.
 * @param {number} id - Record ID
 * @returns {object} The record
 */
export const getRecordById = async (id) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`);
  return response.data;
};

/**
 * Create a new record.
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
 * Update an existing record.
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
 * Delete a record.
 * @param {number} id - Record ID
 * @returns {object} Success response
 */
export const deleteRecord = async (id) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`, {
    method: "DELETE",
  });
  return response;
};
