"use client";

import React, { useMemo } from "react";
import { Form } from "antd";
import { DownloadOutlined, InfoCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import ExportButtons from "@/components/admin/ExportButtons";
import { AntInput } from "@/services/antdFields";
import { HTTP } from "@/services";
import styles from "./NewsletterExport.module.css";

/**
 * Newsletter subscriber export (Excel / CSV) for /admin/newsletter.
 * Exports by sign-up date: all time, one month of a year, a whole year, or a
 * custom date range — optionally only Subscribed or Unsubscribed people.
 * The rows are fetched fresh from the API at export time.
 *
 * @param {Array} columns - Export columns ({ header, key })
 */

const PERIODS = [
  { label: "All time", value: "all" },
  { label: "Month", value: "month" },
  { label: "Year", value: "year" },
  { label: "Date range", value: "range" },
];

const MONTHS = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: dayjs().month(i).format("MMMM") }));

const STATUSES = [
  { value: "all", label: "Everyone" },
  { value: "Subscribed", label: "Subscribed only" },
  { value: "Unsubscribed", label: "Unsubscribed only" },
];

// Newsletter sign-ups started in 2026; the list grows with each new year
const FIRST_YEAR = 2026;

/** { from, to, label } in YYYY-MM-DD for the chosen period, or null when incomplete. */
const periodRange = ({ period, month, year, from, to }) => {
  if (period === "month" && month && year) {
    const start = dayjs(`${year}-${String(month).padStart(2, "0")}-01`);
    return { from: start.format("YYYY-MM-DD"), to: start.endOf("month").format("YYYY-MM-DD"), label: start.format("MMM_YYYY") };
  }
  if (period === "year" && year) return { from: `${year}-01-01`, to: `${year}-12-31`, label: String(year) };
  if (period === "range" && from && to) {
    const a = dayjs(from);
    const b = dayjs(to);
    if (!a.isValid() || !b.isValid()) return null;
    const [start, end] = a.isAfter(b) ? [b, a] : [a, b];
    return { from: start.format("YYYY-MM-DD"), to: end.format("YYYY-MM-DD"), label: `${start.format("DD-MM-YYYY")}_to_${end.format("DD-MM-YYYY")}` };
  }
  if (period === "all") return { from: null, to: null, label: "All_Time" };
  return null;
};

export default function NewsletterExport({ columns }) {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form) || {};
  const period = values.period || "all";

  const years = useMemo(() => {
    const current = dayjs().year();
    return Array.from({ length: Math.max(1, current - FIRST_YEAR + 1) }, (_, i) => ({ value: current - i, label: String(current - i) }));
  }, []);

  const range = periodRange({ ...values, period });
  const status = values.status || "all";

  const fetchRows = async () => {
    if (!range) return [];
    const params = new URLSearchParams();
    if (range.from) params.set("from", range.from);
    if (range.to) params.set("to", range.to);
    if (status !== "all") params.set("status", status);
    const res = await HTTP("GET", `/newsletter-subscribers?${params.toString()}`);
    return res?.data || [];
  };

  const hint = !range
    ? period === "range"
      ? "Choose a start and end date."
      : period === "month"
        ? "Choose a month and year."
        : "Choose a year."
    : range.from
      ? `People who subscribed between ${dayjs(range.from).format("D MMM YYYY")} and ${dayjs(range.to).format("D MMM YYYY")}.`
      : "Everyone on the list, whenever they subscribed.";

  return (
    <section className={styles.card}>
      <div className={styles.head}>
        <span className={styles.icon}>
          <DownloadOutlined />
        </span>
        <div>
          <h3 className={styles.title}>Export Subscribers</h3>
          <p className={styles.subtitle}>Download the list as Excel or CSV — everything, or by sign-up month, year or date range.</p>
        </div>
      </div>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={{ period: "all", status: "all", year: dayjs().year(), month: dayjs().month() + 1 }}
        className={styles.form}
      >
        {/* One aligned row: period, its date fields, status, then the download buttons */}
        <div className={styles.row}>
          <AntInput type="radio" name="period" label="Period" optionType="button" radioOptions={PERIODS} size="middle" noRequired containerClassName={styles.period} />

          {period === "month" && (
            <>
              <AntInput type="select" size="middle" name="month" label="Month" options={MONTHS} filter={false} noRequired containerClassName={styles.field} />
              <AntInput type="select" size="middle" name="year" label="Year" options={years} filter={false} noRequired containerClassName={styles.fieldSm} />
            </>
          )}
          {period === "year" && (
            <AntInput type="select" size="middle" name="year" label="Year" options={years} filter={false} noRequired containerClassName={styles.fieldSm} />
          )}
          {period === "range" && (
            <>
              <AntInput type="datepicker" size="middle" name="from" label="From" disabledNextDate noRequired containerClassName={styles.field} />
              <AntInput type="datepicker" size="middle" name="to" label="To" disabledNextDate noRequired containerClassName={styles.field} />
            </>
          )}

          <AntInput type="select" size="middle" name="status" label="Status" options={STATUSES} filter={false} noRequired containerClassName={styles.field} />

          <div className={styles.actions}>
            {range ? (
              <ExportButtons fetchData={fetchRows} columns={columns} filename={`Newsletter_Subscribers_${range.label}${status !== "all" ? `_${status}` : ""}`} />
            ) : null}
          </div>
        </div>
      </Form>

      <p className={`${styles.hint} ${range ? "" : styles.hintWarn}`}>
        <InfoCircleOutlined /> {hint}
      </p>
    </section>
  );
}
