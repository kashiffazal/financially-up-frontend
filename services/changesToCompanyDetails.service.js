/**
 * Changes to Company Details API Service
 * ====================================
 * Frontend service layer for Changes to Company Details CRUD operations.
 */

import { apiFetch } from "./apiConfig";

const ENDPOINT = "/changes-to-company-details";

/** Fetch all records with pagination, status filter, and search */
export const getRecords = async (params = {}) => {
  const queryParams = new URLSearchParams();
  if (params.page) queryParams.append("page", params.page);
  if (params.limit) queryParams.append("limit", params.limit);
  if (params.status && params.status !== "All") queryParams.append("status", params.status);
  if (params.search) queryParams.append("search", params.search);

  const queryString = queryParams.toString();
  const url = queryString ? `${ENDPOINT}?${queryString}` : ENDPOINT;

  const response = await apiFetch(url);
  return response.data;
};

/** Fetch single record by ID */
export const getRecordById = async (id) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`);
  return response.data;
};

/** Create a new record */
export const createRecord = async (formData) => {
  const response = await apiFetch(ENDPOINT, { method: "POST", body: formData });
  return response.data;
};

/** Update an existing record */
export const updateRecord = async (id, updateData) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`, { method: "PUT", body: updateData });
  return response.data;
};

/** Delete a record */
export const deleteRecord = async (id) => {
  const response = await apiFetch(`${ENDPOINT}/${id}`, { method: "DELETE" });
  return response;
};
