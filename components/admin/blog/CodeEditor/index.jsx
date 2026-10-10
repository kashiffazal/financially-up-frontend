"use client";

import React, { useMemo } from "react";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import styles from "./CodeEditor.module.css";

/**
 * Code editor with syntax highlighting, line numbers and line wrapping
 * (CodeMirror 6). Used for the article's Code (HTML) view and the schema field.
 *
 * @param {string}   value
 * @param {Function} onChange     - (text) => void
 * @param {"html"|"json"} [language="html"]
 * @param {boolean}  [isDark]     - Dark colour theme
 * @param {boolean}  [readOnly]
 * @param {string}   [placeholder]
 * @param {string}   [minHeight]  - e.g. "520px"
 * @param {string}   [maxHeight]  - Scrolls inside the editor beyond this height
 * @param {boolean}  [bordered]   - Rounded border (off when the editor fills a card)
 */
export default function CodeEditor({
  value,
  onChange,
  language = "html",
  isDark = false,
  readOnly = false,
  placeholder,
  minHeight = "200px",
  maxHeight,
  bordered = false,
}) {
  const extensions = useMemo(
    () => [language === "json" ? json() : html(), EditorView.lineWrapping],
    [language]
  );

  return (
    <div className={`${styles.wrap} ${bordered ? styles.bordered : ""}`}>
      <CodeMirror
        value={value || ""}
        onChange={onChange}
        extensions={extensions}
        theme={isDark ? "dark" : "light"}
        readOnly={readOnly}
        editable={!readOnly}
        placeholder={placeholder}
        minHeight={minHeight}
        maxHeight={maxHeight}
        basicSetup={{ foldGutter: true, highlightActiveLine: !readOnly, autocompletion: true }}
        spellCheck={false}
      />
    </div>
  );
}
