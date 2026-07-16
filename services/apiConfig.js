/**
 * API Configuration
 * ==================
 * Central configuration for all frontend API calls.
 * Reads the backend URL from Next.js environment variables.
 *
 * In Next.js, environment variables prefixed with NEXT_PUBLIC_
 * are exposed to the browser (client-side code).
 *
 * Usage:
 *   import { API_BASE_URL } from '@/services/apiConfig';
 *   fetch(`${API_BASE_URL}/individual-engagement`);
 */

// Backend API base URL — reads from Next.js env or falls back to localhost
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * Generic fetch wrapper with error handling
 * Standardizes all API calls across the admin panel.
 *
 * @param {string} endpoint - API endpoint path (e.g., "/individual-engagement")
 * @param {object} options - Fetch options (method, body, headers, etc.)
 * @returns {object} Parsed JSON response
 * @throws {Error} If the API returns an error response
 */
export const apiFetch = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  // If body is an object, stringify it
  if (config.body && typeof config.body === "object") {
    config.body = JSON.stringify(config.body);
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error.message);
    throw error;
  }
};
