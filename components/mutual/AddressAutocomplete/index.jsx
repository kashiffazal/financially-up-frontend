"use client";

/**
 * Address Autocomplete
 * ====================
 * Australian address lookup powered by OpenStreetMap's Nominatim service.
 *
 * - Free, no API key. Nominatim's usage policy allows at most one request per
 *   second, so input is debounced and in-flight requests are aborted.
 * - Results are limited to Australia.
 * - Typing a full address by hand always works: suggestions are optional.
 * - Attribution to OpenStreetMap is displayed, as their licence requires.
 *
 * Usage inside a form (single address field):
 *   <AddressAutocomplete name="address" label="Residential Address" reqMsg="..." />
 *
 * Usage filling separate parts (street / suburb / state / postcode):
 *   <AddressAutocomplete
 *     name="regOfficeStreet"
 *     onAddressSelect={(parts) => form.setFieldsValue({
 *       regOfficeSuburb: parts.suburb, regOfficeState: parts.state, ...
 *     })}
 *   />
 */

import React, { useState, useRef, useCallback, useEffect } from "react";
import { AutoComplete, Form, Input } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import styles from "./AddressAutocomplete.module.css";

const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";
const MIN_QUERY_LENGTH = 3;
const DEBOUNCE_MS = 900; // Nominatim allows ~1 request per second

/** Maps a Nominatim result to the address parts used across the forms */
const toAddressParts = (item) => {
  const a = item.address || {};
  const streetNumber = a.house_number || "";
  const street = a.road || a.pedestrian || a.footway || "";
  return {
    houseNumber: streetNumber,
    street: [streetNumber, street].filter(Boolean).join(" ").trim(),
    streetName: street,
    suburb: a.suburb || a.city || a.town || a.village || a.municipality || a.hamlet || "",
    state: a.state || "",
    postcode: a.postcode || "",
    country: a.country || "Australia",
    fullAddress: item.display_name || "",
  };
};

/** Builds the single-line address stored in the field */
const formatAddressLine = (parts) => {
  const line = [parts.street, parts.suburb, [parts.state, parts.postcode].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join(", ");
  return line || parts.fullAddress;
};

const AddressAutocompleteControl = ({
  value,
  onChange,
  onAddressSelect,
  placeholder = "Start typing an address…",
  size = "large",
  className = "",
  disabled = false,
  textarea = false,
}) => {
  const [options, setOptions] = useState([]);
  const [searching, setSearching] = useState(false);
  const debounceRef = useRef(null);
  const abortRef = useRef(null);
  const resultsRef = useRef([]);

  // Cancel pending work when the field unmounts
  useEffect(
    () => () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (abortRef.current) abortRef.current.abort();
    },
    [],
  );

  const runSearch = useCallback(async (query) => {
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const params = new URLSearchParams({
        format: "jsonv2",
        addressdetails: "1",
        countrycodes: "au",
        limit: "6",
        q: query,
      });
      const res = await fetch(`${NOMINATIM_URL}?${params.toString()}`, {
        signal: controller.signal,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Address lookup failed (${res.status})`);

      const data = await res.json();
      resultsRef.current = Array.isArray(data) ? data : [];

      // Values must be unique: Ant Design matches a selection by its value, and
      // duplicates would resolve to the wrong result.
      const usedValues = new Set();
      setOptions(
        resultsRef.current.map((item, index) => {
          const parts = toAddressParts(item);
          let value = formatAddressLine(parts);
          while (usedValues.has(value)) value = `${value} `;
          usedValues.add(value);
          // Remember which result produced this value so onSelect can find it
          item.__optionValue = value;
          return {
            value,
            label: (
              <span className={styles.option}>
                <EnvironmentOutlined className={styles.optionIcon} />
                <span className={styles.optionText}>{item.display_name}</span>
              </span>
            ),
          };
        }),
      );
    } catch (err) {
      if (err.name !== "AbortError") {
        // A lookup failure must never block manual entry
        setOptions([]);
      }
    } finally {
      setSearching(false);
    }
  }, []);

  const handleSearch = (text) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!text || text.trim().length < MIN_QUERY_LENGTH) {
      setOptions([]);
      setSearching(false);
      return;
    }
    setSearching(true);
    debounceRef.current = setTimeout(() => runSearch(text.trim()), DEBOUNCE_MS);
  };

  const handleSelect = (selectedValue) => {
    // Matched by value, which survives Ant Design's internal option handling
    const match = resultsRef.current.find((item) => item.__optionValue === selectedValue);
    if (match && onAddressSelect) {
      onAddressSelect(toAddressParts(match));
    }
    // The selected text stays fully editable afterwards
    if (onChange) onChange(String(selectedValue).trim());
  };

  return (
    <div className={styles.wrapper}>
      <AutoComplete
        value={value}
        options={options}
        onSearch={handleSearch}
        onSelect={handleSelect}
        onChange={(val) => onChange && onChange(val)}
        disabled={disabled}
        className={`w-full ${className}`}
        popupMatchSelectWidth={false}
        notFoundContent={
          searching ? "Searching addresses…" : value && value.length >= MIN_QUERY_LENGTH ? "No match — you can type the address manually" : null
        }
      >
        {textarea ? (
          <Input.TextArea rows={2} placeholder={placeholder} className={className} />
        ) : (
          <Input size={size} placeholder={placeholder} prefix={<EnvironmentOutlined className="text-slate-400" />} className={className} />
        )}
      </AutoComplete>
      <span className={styles.attribution}>
        Address suggestions © OpenStreetMap contributors — you can also type the address manually.
      </span>
    </div>
  );
};

/** Form.Item wrapper, matching the AntInput / UploadFile pattern */
export default function AddressAutocomplete({
  name,
  label,
  reqMsg,
  noRequired = false,
  rules,
  help,
  containerClassName = "",
  containerStyle,
  ...restProps
}) {
  if (!name) {
    return <AddressAutocompleteControl {...restProps} />;
  }

  const validationRules =
    rules || (noRequired ? [] : [{ required: true, message: reqMsg || "Please enter an address." }]);

  return (
    <Form.Item
      name={name}
      label={label}
      rules={validationRules}
      help={help}
      style={containerStyle}
      className={`w-full ${containerClassName}`}
    >
      <AddressAutocompleteControl {...restProps} />
    </Form.Item>
  );
}

export { AddressAutocompleteControl, toAddressParts, formatAddressLine };
