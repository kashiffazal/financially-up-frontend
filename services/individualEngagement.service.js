/**
 * Individual Engagement API Service
 * ====================================
 * Frontend service layer for Individual Engagement CRUD operations.
 * Wraps all API calls to the backend so components don't need to
 * know about URLs, headers, or error handling.
 *
 * Usage in components:
 *   import { getEngagements, updateEngagement } from '@/services/individualEngagement.service';
 *   const data = await getEngagements({ page: 1, status: "Approved" });
 */

import { apiFetch } from "./apiConfig";

const ENDPOINT = "/individual-engagement";

/**
 * Fetch all individual engagements with pagination, status filter, and search.
 * @param {object} params - Query parameters
 * @param {number} params.page - Page number (default: 1)
 * @param {number} params.limit - Records per page (default: 10)
 * @param {string} params.status - Filter by status (e.g., "Approved", "New Query")
 * @param {string} params.search - Search term across name, email, phone
 * @returns {object} { records: [], pagination: { total, page, limit, totalPages } }
 */
export const getEngagements = async (params = {}) => {
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
 * Fetch a single individual engagement by ID.
 * @param {number} id - Record ID
 * @returns {object} The engagement record
 */
export const getEngagementById = async (id) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`);
  return response.data;
};

/**
 * Create a new individual engagement record.
 * @param {object} formData - Form data matching the model fields
 * @returns {object} The created record
 */
export const createEngagement = async (formData) => {
  const response = await apiFetch(ENDPOINT, {
    method: "POST",
    body: formData,
  });
  return response.data;
};

/**
 * Update an existing individual engagement record.
 * Used for editing fields or changing status (e.g., Approve).
 * @param {number} id - Record ID
 * @param {object} updateData - Fields to update
 * @returns {object} The updated record
 */
export const updateEngagement = async (id, updateData) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`, {
    method: "PUT",
    body: updateData,
  });
  return response.data;
};

/**
 * Delete an individual engagement record.
 * @param {number} id - Record ID
 * @returns {object} Success response
 */
export const deleteEngagement = async (id) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`, {
    method: "DELETE",
  });
  return response;
};
