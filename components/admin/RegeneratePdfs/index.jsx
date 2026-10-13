"use client";

import React, { useCallback, useState } from "react";
import { Modal, Button, Spin, Tag, Alert, Checkbox } from "antd";
import {
  ReloadOutlined,
  FilePdfOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import { HTTP, antdMsg } from "@/services";

/**
 * Regenerate PDFs (Individual Engagement + Company Registration logs)
 * ===================================================================
 * Rebuilds an application's PDFs from the saved data when a file was deleted,
 * damaged or shows blank. The new files are identical to the originals and keep
 * the same links (API: /pdf-regenerate/:moduleKey/:id, body { only: [keys] }).
 * Nothing is emailed.
 *
 * Missing PDFs are ticked by default ("Rebuild missing only"); a present file can
 * be ticked too (a blank / damaged PDF), or "Regenerate all" replaces every file.
 *
 *   const regen = useRegeneratePdfs({ moduleKey: "new-individual", onDone: reload });
 *   regen.menuItem(record)   // Actions menu item
 *   {regen.modal}            // render once
 *
 * @param {"new-individual"|"new-company"} moduleKey
 * @param {() => void} [onDone] - reload the log afterwards
 */
export function useRegeneratePdfs({ moduleKey, onDone }) {
  const [record, setRecord] = useState(null);
  const [pdfs, setPdfs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [running, setRunning] = useState(false);
  const [results, setResults] = useState(null);
  const [selected, setSelected] = useState([]);

  const close = () => {
    if (running) return;
    setRecord(null);
    setPdfs(null);
    setResults(null);
    setSelected([]);
  };

  const open = useCallback(
    async (row) => {
      setRecord(row);
      setPdfs(null);
      setResults(null);
      setLoading(true);
      const res = await HTTP("GET", `/pdf-regenerate/${moduleKey}/${row.id}`);
      setLoading(false);
      if (res?.success) {
        const items = res.data?.pdfs || [];
        const missingKeys = items.filter((p) => !p.present).map((p) => p.key);
        setPdfs(items);
        // Missing ones only; when nothing is missing, all of them (fixing a bad file)
        setSelected(missingKeys.length ? missingKeys : items.map((p) => p.key));
      } else setRecord(null);
    },
    [moduleKey],
  );

  /** @param {string[]} keys - PDF keys to rebuild */
  const run = async (keys) => {
    if (!keys.length) return;
    setRunning(true);
    const res = await HTTP(
      "POST",
      // "record?." - the React Compiler reads this while no dialog is open (record = null)
      `/pdf-regenerate/${moduleKey}/${record?.id}`,
      { only: keys },
      false,
      true,
    );
    setRunning(false);
    if (res?.data?.results) {
      setResults(res.data.results);
      if (res.success) antdMsg.success(res.message);
      else antdMsg.error(res.message || "The PDFs could not be regenerated.");
      if (typeof onDone === "function") onDone();
    } else {
      antdMsg.error(res?.message || "The PDFs could not be regenerated.");
    }
  };

  const list = pdfs || [];
  const missing = list.filter((p) => !p.present).length;
  const chosen = list.filter((p) => selected.includes(p.key));
  const replacing = chosen.filter((p) => p.present).length;
  const plural = (n) => `${n} PDF${n === 1 ? "" : "s"}`;
  const toggle = (key, on) =>
    setSelected((prev) =>
      on ? [...prev, key] : prev.filter((k) => k !== key),
    );

  let runLabel = `Regenerate and replace (${chosen.length})`;
  if (chosen.length && !replacing) {
    runLabel =
      chosen.length === missing
        ? `Rebuild missing only (${chosen.length})`
        : `Rebuild (${chosen.length})`;
  }

  let notice = "Tick the PDFs to rebuild.";
  if (chosen.length && replacing) {
    notice = `${plural(replacing)} will be replaced with an identical copy.`;
  } else if (chosen.length) {
    notice = `${plural(chosen.length)} will be rebuilt. Other files are not touched.`;
  }

  const menuItem = useCallback(
    (row) => ({
      key: "regenerate_pdfs",
      icon: <ReloadOutlined className="text-brand-primary" />,
      label:
        row.pdfMissing > 0
          ? `Regenerate PDFs (${row.pdfMissing} missing)`
          : "Regenerate PDFs",
      onClick: () => open(row),
    }),
    [open],
  );

  const modal = (
    <Modal
      open={Boolean(record)}
      onCancel={close}
      width={560}
      centered
      destroyOnHidden
      title={
        <span className="flex items-center gap-2">
          <ReloadOutlined className="text-brand-primary" />
          Regenerate PDFs
          {record?.referenceNumber && (
            <span className="font-mono text-xs font-normal text-slate-500">
              {record?.referenceNumber}
            </span>
          )}
        </span>
      }
      footer={
        results ? (
          <Button onClick={close}>Close</Button>
        ) : (
          <div className="flex flex-wrap justify-end gap-2">
            <Button onClick={close} disabled={running}>
              Cancel
            </Button>
            {missing > 0 && missing < list.length && (
              <Button
                disabled={loading || running}
                onClick={() => run(list.map((p) => p.key))}
              >
                Regenerate all ({list.length})
              </Button>
            )}
            <Button
              type="primary"
              className="bg-brand-primary!"
              icon={<ReloadOutlined />}
              loading={running}
              disabled={loading || !chosen.length}
              onClick={() => run(chosen.map((p) => p.key))}
            >
              {runLabel}
            </Button>
          </div>
        )
      }
    >
      {loading || !pdfs ? (
        <div className="flex justify-center py-10">
          <Spin />
        </div>
      ) : (
        <div className="space-y-3 pt-1">
          {!results && (
            <Alert
              type={replacing ? "warning" : "info"}
              showIcon
              title={notice}
              className="px-3! py-1.5! text-xs!"
            />
          )}

          <ul className="m-0 list-none divide-y divide-slate-100 rounded-lg border border-slate-200 p-0 dark:divide-zinc-800 dark:border-zinc-800">
            {(results || list).map((item) => {
              const pdf = list.find((p) => p.key === item.key) || item;
              return (
                <li
                  key={item.key}
                  className="flex items-center justify-between gap-3 px-4 py-2.5"
                >
                  <label className="flex min-w-0 cursor-pointer items-center gap-2 text-sm text-slate-800 dark:text-zinc-200">
                    {!results && (
                      <Checkbox
                        checked={selected.includes(item.key)}
                        disabled={running}
                        onChange={(e) => toggle(item.key, e.target.checked)}
                      />
                    )}
                    <FilePdfOutlined className="text-red-500" />
                    <span className="truncate">{pdf.label}</span>
                  </label>
                  {results ? (
                    <span
                      className={`flex shrink-0 items-center gap-1.5 text-xs ${item.ok ? "text-emerald-600" : "text-red-600"}`}
                    >
                      {item.ok ? <CheckCircleFilled /> : <CloseCircleFilled />}
                      {item.message}
                    </span>
                  ) : (
                    <Tag
                      color={pdf.present ? "success" : "error"}
                      className="m-0 shrink-0"
                    >
                      {pdf.present ? "Present" : "Missing"}
                    </Tag>
                  )}
                </li>
              );
            })}
          </ul>
          {!results && (
            <p className="mt-3! mb-0! text-xs text-slate-500 dark:text-zinc-400">
              The links stay the same and nothing is emailed to the client.
            </p>
          )}
        </div>
      )}
    </Modal>
  );

  return { open, menuItem, modal };
}

/** Small red marker for a log row whose PDFs are missing on the server. */
export function PdfMissingTag({ count }) {
  if (!count) return null;
  return (
    <Tag
      color="error"
      className="m-0 mt-1 text-[10px]"
      title="Use Actions > Regenerate PDFs"
    >
      <FilePdfOutlined /> {count} PDF{count === 1 ? "" : "s"} missing
    </Tag>
  );
}
