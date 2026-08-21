/**
 * Centralized API & HTTP Service
 * ==============================
 * Modernized for Axios 1.19.0 + Next.js 16 + React 19 + Express Backend.
 *
 * Capabilities:
 * - Dynamic Base URL resolution via NEXT_PUBLIC_API_URL (defaults to http://localhost:5000/api).
 * - Automatic JWT Bearer token resolution and HttpOnly session cookies (withCredentials: true).
 * - Smart Payload Handling:
 *     * Detects files (File instances, Ant Design originFileObj/fileList, nested objects) and converts to FormData.
 *     * Sends clean application/json for standard objects and arrays.
 *     * Passes query parameters (params) for GET and DELETE operations.
 * - Modern Axios 1.19.0 upload progress event calculation.
 * - Unified status and error handling with Ant Design message and notification alerts.
 * - Comprehensive HTTP, get, post, put, patch, del, and api methods.
 */

import axios from "axios";
import { message as staticMessage, notification as staticNotification } from "antd";
import { getAntdMessage, getAntdNotification } from "../app/ThemeProvider";

// Context-safe message dispatcher
export const antdMsg = {
  success: (msg, dur) => (getAntdMessage() || staticMessage).success(msg, dur),
  error: (msg, dur) => (getAntdMessage() || staticMessage).error(msg, dur),
  warning: (msg, dur) => (getAntdMessage() || staticMessage).warning(msg, dur),
  info: (msg, dur) => (getAntdMessage() || staticMessage).info(msg, dur),
  loading: (msg, dur) => (getAntdMessage() || staticMessage).loading(msg, dur),
};

// Helper to normalize notification arguments so both title and legacy message work seamlessly without deprecation warnings
const normalizeNotificationArgs = (args) => {
  if (!args) return {};
  if (typeof args === "string") {
    return { title: args };
  }
  const { message: legacyMsg, title, ...rest } = args;
  return {
    title: title || legacyMsg || "Notification",
    ...rest,
  };
};

export const antdNotify = {
  success: (args) => (getAntdNotification() || staticNotification).success(normalizeNotificationArgs(args)),
  error: (args) => (getAntdNotification() || staticNotification).error(normalizeNotificationArgs(args)),
  warning: (args) => (getAntdNotification() || staticNotification).warning(normalizeNotificationArgs(args)),
  info: (args) => (getAntdNotification() || staticNotification).info(normalizeNotificationArgs(args)),
  open: (args) => (getAntdNotification() || staticNotification).open(normalizeNotificationArgs(args)),
};

/**
 * Backend API Base URL
 * Reads from Next.js environment variables or falls back to localhost port 5000.
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

/**
 * Helper to retrieve stored authenticated user object from localStorage.
 * @returns {object|null}
 */
export const GetUserData = () => {
  if (typeof window === "undefined") return null;
  try {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  } catch (e) {
    return null;
  }
};

/**
 * Helper to retrieve active JWT token from localStorage.
 * @returns {string|null}
 */
export const GetToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token") || null;
};

/**
 * Helper to update user object in localStorage.
 * @param {object} user - User profile data
 */
export const SetUserData = (user) => {
  if (typeof window === "undefined") return;
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  } else {
    localStorage.removeItem("user");
  }
};

/**
 * Clear authentication session and storage items.
 */
export const ClearAuthSession = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.setItem("login", "false");
};

/**
 * Resolves a full request URL from an endpoint path.
 * @param {string} url - Relative endpoint (e.g. "/users") or absolute URL.
 * @returns {string} Fully qualified URL.
 */
export const ResolveApiUrl = (url = "") => {
  if (!url) return API_BASE_URL;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  const cleanBase = API_BASE_URL.replace(/\/+$/, "");
  const cleanPath = url.startsWith("/") ? url : `/${url}`;
  return `${cleanBase}${cleanPath}`;
};

/**
 * Recursively inspects data to determine if it contains uploadable files
 * (File instances, Ant Design file upload wrappers with originFileObj or uid).
 * @param {any} data - Data to inspect
 * @returns {boolean} True if files exist in the payload
 */
export const hasUploadableFiles = (data) => {
  if (!data || typeof data !== "object") return false;
  if (typeof window !== "undefined" && data instanceof FormData) return true;
  if (typeof window !== "undefined" && data instanceof File) return true;
  if (data.originFileObj instanceof File) return true;

  if (Array.isArray(data)) {
    return data.some((item) => hasUploadableFiles(item));
  }

  return Object.values(data).some((val) => {
    if (!val) return false;
    if (typeof window !== "undefined" && val instanceof File) return true;
    if (val.originFileObj instanceof File) return true;
    if (val.fileList && Array.isArray(val.fileList)) return true;
    if (typeof val === "object") return hasUploadableFiles(val);
    return false;
  });
};

/**
 * Smart payload builder: converts payload containing files into FormData,
 * preserving Ant Design originFileObj files and stringifying complex objects.
 * @param {object} data - Raw request payload
 * @returns {FormData} Formatted FormData
 */
export const buildFormDataPayload = (data) => {
  if (typeof window !== "undefined" && data instanceof FormData) {
    return data;
  }

  const formData = new FormData();
  if (!data || typeof data !== "object") return formData;

  Object.keys(data).forEach((key) => {
    const val = data[key];
    if (val === undefined || val === null) return;

    // Handle Ant Design file upload array / object
    if (Array.isArray(val)) {
      const isFileArray = val.some(
        (item) =>
          (typeof window !== "undefined" && item instanceof File) ||
          (item && item.originFileObj instanceof File) ||
          (item && item.uid)
      );

      if (isFileArray) {
        val.forEach((fileItem) => {
          const rawFile = fileItem.originFileObj || fileItem;
          if (typeof window !== "undefined" && rawFile instanceof File) {
            formData.append(key, rawFile, rawFile.name);
          }
        });
      } else {
        // Regular array -> JSON stringify
        formData.append(key, JSON.stringify(val));
      }
    } else if (typeof window !== "undefined" && val instanceof File) {
      formData.append(key, val, val.name);
    } else if (val && val.originFileObj instanceof File) {
      formData.append(key, val.originFileObj, val.name || val.originFileObj.name);
    } else if (val && val.fileList && Array.isArray(val.fileList)) {
      val.fileList.forEach((fileItem) => {
        const rawFile = fileItem.originFileObj || fileItem;
        if (typeof window !== "undefined" && rawFile instanceof File) {
          formData.append(key, rawFile, rawFile.name);
        }
      });
    } else if (typeof val === "object") {
      formData.append(key, JSON.stringify(val));
    } else {
      formData.append(key, val);
    }
  });

  return formData;
};

/**
 * Create a customized Axios instance with default settings.
 */
const axiosInstance = axios.create({
  withCredentials: true, // Send HttpOnly session cookies across requests
  timeout: 60000, // 60s timeout for large uploads / PDF generation
});

/**
 * Central HTTP Request Handler
 * =============================
 * Handles GET, POST, PUT, PATCH, DELETE operations for all models and workflows.
 *
 * @param {string|object} methodOrOptions - HTTP method (GET, POST, PUT, DELETE) or config object
 * @param {string} [url] - Endpoint URL (e.g. "/apply-tfn-abns")
 * @param {any} [data] - Request payload or query parameters
 * @param {boolean} [raffData=false] - If true, console.logs raw debug output
 * @param {boolean} [hideErrorMsg=false] - If true, suppresses automatic error notifications
 * @param {function|boolean} [uploadProgressFunction=false] - Progress callback: (percent, event) => {}
 * @param {object} [extraConfig={}] - Additional Axios configuration overrides
 * @returns {Promise<any>}
 */
export const HTTP = (
  methodOrOptions,
  url,
  data,
  raffData = false,
  hideErrorMsg = false,
  uploadProgressFunction = false,
  extraConfig = {}
) => {
  // Support object-style arguments: HTTP({ method: "POST", url: "/...", data: {...} })
  let method = "GET";
  let targetUrl = "";
  let payload = data;
  let showRaff = raffData;
  let suppressError = hideErrorMsg;
  let onProgress = uploadProgressFunction;
  let customConfig = extraConfig;

  if (typeof methodOrOptions === "object" && methodOrOptions !== null) {
    method = (methodOrOptions.method || "GET").toUpperCase();
    targetUrl = methodOrOptions.url || "";
    payload = methodOrOptions.data !== undefined ? methodOrOptions.data : methodOrOptions.params;
    showRaff = methodOrOptions.raffData || false;
    suppressError = methodOrOptions.hideErrorMsg || false;
    onProgress = methodOrOptions.uploadProgressFunction || false;
    customConfig = methodOrOptions.extraConfig || methodOrOptions;
  } else {
    method = (methodOrOptions || "GET").toUpperCase();
    targetUrl = url || "";
  }

  const fullUrl = ResolveApiUrl(targetUrl);
  const token = GetToken();

  // Base headers
  const headers = {
    "X-Requested-With": "XMLHttpRequest",
    ...(customConfig.headers || {}),
  };

  if (token && !headers["Authorization"]) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const isGetOrDelete = method === "GET" || method === "DELETE";
  let requestData = undefined;
  let requestParams = undefined;

  if (isGetOrDelete) {
    requestParams = payload || customConfig.params;
  } else {
    if (hasUploadableFiles(payload)) {
      requestData = buildFormDataPayload(payload);
      // Let browser/axios set multipart boundary automatically
      delete headers["Content-Type"];
    } else {
      requestData = payload;
      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "application/json";
      }
    }
  }

  const axiosConfig = {
    method,
    url: fullUrl,
    data: requestData,
    params: requestParams,
    headers,
    withCredentials: true,
    onUploadProgress: (progressEvent) => {
      if (typeof onProgress === "function") {
        const total = progressEvent.total || progressEvent.bytes;
        const percent = total ? Math.round((progressEvent.loaded * 100) / total) : 0;
        onProgress(percent, progressEvent);
      }
    },
    ...customConfig,
  };

  return axiosInstance(axiosConfig)
    .then((response) => {
      const responseData = response.data;

      if (showRaff) {
        console.log(`[HTTP ${method}] ${fullUrl}:`, responseData);
      }

      if (responseData && responseData.consoleLog) {
        console.log(`[HTTP Debug] ${fullUrl}:`, responseData);
      }

      // Check success flag or HTTP status
      const isSuccess =
        response.status >= 200 &&
        response.status < 300 &&
        (responseData?.success !== false && responseData?.status !== false);

      if (isSuccess) {
        return HandelRequest(responseData, 200, fullUrl);
      } else {
        return suppressError ? false : HandelRequest(responseData, response.status || 400, fullUrl);
      }
    })
    .catch((error) => {
      const statusCode = error.response ? error.response.status : 500;
      const errorData = error.response ? error.response.data : { message: error.message };

      if (showRaff) {
        console.error(`[HTTP Error ${statusCode}] ${fullUrl}:`, error);
      }

      if (suppressError) {
        return false;
      }

      return HandelRequest(errorData, statusCode, fullUrl);
    });
};

/**
 * Unified Response & Error Handler
 * ================================
 * Displays Ant Design notifications/messages for success, duplicates, and errors.
 *
 * @param {object} res - Response body or Error data
 * @param {number} statusCode - HTTP status code
 * @param {string} url - Request URL for logging
 * @returns {object|boolean}
 */
export const HandelRequest = (res = {}, statusCode = 200, url = "") => {
  // --- 200 OK SUCCESS ---
  if (statusCode >= 200 && statusCode < 300) {
    if (res.duplicateData) {
      antdNotify.info({
        message: res.infoTitle || "Information",
        description: res.infoMsg || res.message || "Data already exists in the system.",
        duration: res.infoDuration || 5,
      });
      return false;
    }

    if (res.successNotify) {
      if (res.successNotifyType === "notify") {
        antdNotify.success({
          message: res.successTitle || "Success",
          description: res.successMsg || res.message || "Request completed successfully.",
          duration: res.successDuration || 5,
        });
      } else {
        antdMsg.success(
          res.successMsg || res.message || "Request completed successfully.",
          res.successDuration || 4
        );
      }
    }

    return res;
  }

  // --- 400 BAD REQUEST / VALIDATION ERROR ---
  if (statusCode === 400 || statusCode === 422) {
    const errorMsg = res.errorMsg || res.message || "Invalid request parameters or validation failed.";

    if (res.errorNotifyType === "message") {
      antdMsg.error(errorMsg, res.errorDuration || 6);
    } else {
      antdNotify.error({
        title: res.errorTitle || "Validation Error",
        description: errorMsg,
        duration: res.errorDuration || 8,
      });
    }
    return false;
  }

  // --- 401 UNAUTHORIZED / SESSION EXPIRED / INVALID CREDENTIALS ---
  if (statusCode === 401) {
    // 1. Explicit login failure (Wrong email or password)
    if (url.includes("/auth/login")) {
      antdMsg.error(res?.message || "Invalid email or password. Please try again.");
      return false;
    }

    // 2. Initial auth check / logout
    if (url.includes("/auth/me") || url.includes("/auth/logout")) {
      ClearAuthSession();
      return false;
    }

    // 3. Expired session on protected admin pages
    ClearAuthSession();
    if (typeof window !== "undefined") {
      if (
        window.location.pathname.startsWith("/admin") &&
        window.location.pathname !== "/admin/login"
      ) {
        try {
          antdMsg.error(res?.message || "Session expired. Please log in again.");
        } catch (e) {}
        window.location.href = "/admin/login";
      }
    }
    return false;
  }

  // --- 403 FORBIDDEN / PERMISSION DENIED ---
  if (statusCode === 403) {
    antdNotify.error({
      title: "Access Denied",
      description: res?.message || "You do not have permission to perform this action.",
      duration: 8,
    });
    return false;
  }

  // --- 404 NOT FOUND ---
  if (statusCode === 404) {
    antdNotify.error({
      title: "Resource Not Found",
      description: res?.message || "Requested endpoint or record was not found.",
      duration: 6,
    });
    return false;
  }

  // --- 429 TOO MANY REQUESTS / RATE LIMITED ---
  if (statusCode === 429) {
    antdNotify.warning({
      title: "Too Many Attempts",
      description:
        res?.message ||
        "Too many requests from this IP. Please wait a while before trying again.",
      duration: 10,
    });
    return false;
  }

  // --- 500+ SERVER OR NETWORK ERROR ---
  const serverMsg =
    res?.message || "Could not connect to the backend server. Please verify the service is running.";

  antdNotify.error({
    title: "Server Connection Error",
    description: serverMsg,
    duration: 8,
  });

  return false;
};

// ==========================================
// Convenience REST Helpers & api Object
// ==========================================

export const get = (url, params = {}, options = {}) =>
  HTTP("GET", url, params, options.raffData, options.hideErrorMsg, options.uploadProgressFunction, options);

export const post = (url, data = {}, options = {}) =>
  HTTP("POST", url, data, options.raffData, options.hideErrorMsg, options.uploadProgressFunction, options);

export const put = (url, data = {}, options = {}) =>
  HTTP("PUT", url, data, options.raffData, options.hideErrorMsg, options.uploadProgressFunction, options);

export const patch = (url, data = {}, options = {}) =>
  HTTP("PATCH", url, data, options.raffData, options.hideErrorMsg, options.uploadProgressFunction, options);

export const del = (url, params = {}, options = {}) =>
  HTTP("DELETE", url, params, options.raffData, options.hideErrorMsg, options.uploadProgressFunction, options);

/**
 * Unified `api` client matching REST conventions.
 */
export const api = {
  get,
  post,
  put,
  patch,
  delete: del,
};

export default HTTP;
