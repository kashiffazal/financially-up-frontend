"use client";

/**
 * AdminSignatureCanvas — Staff/Admin signature wrapper
 * Uses the shared SignatureCanvas component with admin-specific defaults
 * (brand green pen color, staff-specific placeholder text).
 */

import React from "react";
import SignatureCanvas from "@/components/mutual/SignatureCanvas";

export default function AdminSignatureCanvas({
  name = "staffDrawnSignature",
  label = "Staff Signature Canvas",
  reqMsg = "Please draw staff signature.",
  value,
  onChange,
  ...rest
}) {
  return (
    <SignatureCanvas
      name={name}
      label={label}
      reqMsg={reqMsg}
      value={value}
      onChange={onChange}
      height={144}
      penColor="#008043"
      placeholder="Draw staff signature smoothly using mouse or stylus..."
      storageKey="adminStaffSignature"
      {...rest}
    />
  );
}
