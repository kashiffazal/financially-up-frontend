"use client";

/**
 * Authentication & RBAC Context
 * ==============================
 * Global React context managing user authentication state, session initialization,
 * role/permission verification, and account profile operations across the Admin Portal.
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { HTTP, SetUserData, ClearAuthSession, GetUserData, antdMsg } from "@/services";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(GetUserData());
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  /**
   * Fetch current authenticated user profile and permissions from the server.
   */
  const loadUser = useCallback(async () => {
    try {
      // Fetch currently authenticated user session without showing error notifications on guest visits
      const data = await HTTP("GET", "/auth/me", {}, false, true);
      if (data && data.success && data.user) {
        setUser(data.user);
        SetUserData(data.user);
        localStorage.setItem("login", "true");
      } else {
        setUser(null);
        localStorage.setItem("login", "false");
      }
    } catch (err) {
      setUser(null);
      localStorage.setItem("login", "false");
    } finally {
      setLoading(false);
    }
  }, []);

  // Initialize session on mount
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  /**
   * Log in user with credentials.
   */
  const login = async ({ email, password, deviceName = "Web Browser" }) => {
    try {
      const res = await HTTP("POST", "/auth/login", { email, password, deviceName }, false, false);
      if (res && res.success) {
        if (res.token) {
          localStorage.setItem("token", res.token);
        }
        localStorage.setItem("login", "true");
        SetUserData(res.user);
        setUser(res.user);
        antdMsg.success(`Welcome back, ${res.user.firstName}!`);
        return { success: true, user: res.user };
      }
      throw new Error(res?.message || "Login failed");
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  /**
   * Log out user, invalidate session on backend, and redirect to login screen.
   */
  const logout = async () => {
    try {
      await HTTP("POST", "/auth/logout", {}, false, true);
    } catch (err) {
      // Proceed with local logout regardless of server network error
    } finally {
      ClearAuthSession();
      setUser(null);
      antdMsg.success("Logged out successfully.");
      router.push("/admin/login");
    }
  };

  /**
   * Update personal profile information.
   */
  const updateProfile = async (profileData) => {
    try {
      const res = await HTTP("PUT", "/auth/profile", profileData, false, false);
      if (res && res.success) {
        setUser(res.user);
        SetUserData(res.user);
        antdMsg.success("Profile updated successfully.");
        return { success: true, user: res.user };
      }
      throw new Error(res?.message || "Failed to update profile");
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  /**
   * Change user password.
   */
  const changePassword = async ({ currentPassword, newPassword }) => {
    try {
      const res = await HTTP("PUT", "/auth/change-password", {
        currentPassword,
        newPassword,
      }, false, false);
      if (res && res.success) {
        antdMsg.success(res.message || "Password changed successfully.");
        return { success: true };
      }
      throw new Error(res?.message || "Failed to change password");
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  /**
   * Check if current user possesses a specific permission slug.
   *
   * @param {string} permissionSlug
   * @returns {boolean}
   */
  const hasPermission = useCallback(
    (permissionSlug) => {
      if (!user) return false;
      const permissions = user.permissions || [];
      return permissions.includes(permissionSlug);
    },
    [user]
  );

  /**
   * Check if current user has ANY of the specified permission slugs.
   *
   * @param {Array<string>} permissionSlugs
   * @returns {boolean}
   */
  const hasAnyPermission = useCallback(
    (permissionSlugs = []) => {
      if (!user) return false;
      const permissions = user.permissions || [];
      return permissionSlugs.some((slug) => permissions.includes(slug));
    },
    [user]
  );

  /**
   * Check if current user has a specific role by slug.
   *
   * @param {string} roleSlug
   * @returns {boolean}
   */
  const hasRole = useCallback(
    (roleSlug) => {
      if (!user || !user.roles) return false;
      return user.roles.some((r) => r.slug === roleSlug);
    },
    [user]
  );

  const value = {
    user,
    loading,
    login,
    logout,
    updateProfile,
    changePassword,
    hasPermission,
    hasAnyPermission,
    hasRole,
    refreshUser: loadUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
