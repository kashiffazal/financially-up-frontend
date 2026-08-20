"use client";

/**
 * Permission Guard Component
 * ==========================
 * Declarative component for conditional rendering based on user permissions or roles.
 */

import React from "react";
import { useAuth } from "../../context/AuthContext";

/**
 * Renders children if user has required permission, otherwise renders fallback.
 *
 * @param {Object} props
 * @param {string} [props.permission] - Single required permission slug
 * @param {Array<string>} [props.anyOf] - Array of permission slugs (grants if ANY matched)
 * @param {Array<string>} [props.allOf] - Array of permission slugs (grants if ALL matched)
 * @param {React.ReactNode} [props.fallback=null] - Component to render if access denied
 * @param {React.ReactNode} props.children
 */
export function PermissionGuard({
  permission,
  anyOf,
  allOf,
  fallback = null,
  children,
}) {
  const { user, hasPermission, hasAnyPermission } = useAuth();

  if (!user) return fallback;

  if (permission && !hasPermission(permission)) {
    return fallback;
  }

  if (anyOf && !hasAnyPermission(anyOf)) {
    return fallback;
  }

  if (allOf) {
    const permissions = user.permissions || [];
    const hasAll = allOf.every((slug) => permissions.includes(slug));
    if (!hasAll) return fallback;
  }

  return <>{children}</>;
}

/**
 * Renders children if user has required role, otherwise renders fallback.
 *
 * @param {Object} props
 * @param {string} props.role - Required role slug (e.g. 'administrator')
 * @param {React.ReactNode} [props.fallback=null]
 * @param {React.ReactNode} props.children
 */
export function RoleGuard({ role, fallback = null, children }) {
  const { hasRole } = useAuth();

  if (!hasRole(role)) {
    return fallback;
  }

  return <>{children}</>;
}

export default PermissionGuard;
