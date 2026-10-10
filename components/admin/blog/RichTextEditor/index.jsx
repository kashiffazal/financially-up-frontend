"use client";

/**
 * ============================================================================
 * RichTextEditor (`components/admin/blog/RichTextEditor`)
 * ============================================================================
 * WordPress-style visual editor (TinyMCE 8, self-hosted under its GPL licence:
 * bundled into the app, no API key or cloud service).
 *
 * Load it with next/dynamic and `ssr: false` — TinyMCE needs the browser.
 *
 * Props:
 *   value / onChange(html)   controlled HTML
 *   onReady(html)            editor loaded; html = its normalised starting content
 *   onImageUpload(file)      -> Promise<url>; used for pasted / inserted images
 *   isDark                   dark editor skin + content
 *   height                   editor height in px
 */

import React from "react";
import { Editor } from "@tinymce/tinymce-react";

// TinyMCE core + everything it would normally load from a CDN
import "tinymce/tinymce";
import "tinymce/models/dom/model";
import "tinymce/themes/silver";
import "tinymce/icons/default";
import "tinymce/skins/ui/oxide/skin.js";
import "tinymce/skins/ui/oxide/content.js";
import "tinymce/skins/ui/oxide-dark/skin.js";
import "tinymce/skins/ui/oxide-dark/content.js";
import "tinymce/skins/content/default/content.js";
import "tinymce/skins/content/dark/content.js";

// Plugins
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor";
import "tinymce/plugins/autolink";
import "tinymce/plugins/charmap";
import "tinymce/plugins/code";
import "tinymce/plugins/codesample";
import "tinymce/plugins/fullscreen";
import "tinymce/plugins/image";
import "tinymce/plugins/insertdatetime";
import "tinymce/plugins/link";
import "tinymce/plugins/lists";
import "tinymce/plugins/media";
import "tinymce/plugins/preview";
import "tinymce/plugins/searchreplace";
import "tinymce/plugins/table";
import "tinymce/plugins/visualblocks";
import "tinymce/plugins/wordcount";

import styles from "./RichTextEditor.module.css";

const PLUGINS =
  "advlist anchor autolink charmap code codesample fullscreen image insertdatetime link lists media preview searchreplace table visualblocks wordcount";

const TOOLBAR =
  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | forecolor backcolor | " +
  "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | " +
  "link image media table | blockquote hr codesample | removeformat code fullscreen";

// Matches the website article typography
const CONTENT_STYLE = `
  body { font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; font-size: 15px; line-height: 1.7; margin: 16px 20px; }
  img { max-width: 100%; height: auto; border-radius: 8px; }
  h2 { font-size: 1.45em; } h3 { font-size: 1.2em; }
  table { border-collapse: collapse; } table td, table th { border: 1px solid #cbd5e1; padding: 6px 10px; }
  blockquote { border-left: 4px solid #008043; margin-left: 0; padding-left: 14px; color: #475569; }
`;

export default function RichTextEditor({ value, onChange, onReady, onImageUpload, isDark = false, height = 520 }) {
  return (
    <div className={styles.wrapper}>
      <Editor
        // Re-create the editor when the theme changes (skins can't be swapped live)
        key={isDark ? "dark" : "light"}
        licenseKey="gpl"
        value={value || ""}
        onInit={(evt, editor) => onReady?.(editor.getContent())}
        onEditorChange={(html) => onChange?.(html)}
        init={{
          height,
          menubar: "edit view insert format tools table",
          plugins: PLUGINS,
          toolbar: TOOLBAR,
          toolbar_mode: "sliding",
          skin: isDark ? "oxide-dark" : "oxide",
          content_css: isDark ? "dark" : "default",
          content_style: CONTENT_STYLE,
          promotion: false,
          branding: false,
          statusbar: true,
          elementpath: true,
          resize: true,
          browser_spellcheck: true,
          contextmenu: false,
          block_formats: "Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4; Preformatted=pre",
          // Keep absolute image / link URLs exactly as inserted
          convert_urls: false,
          relative_urls: false,
          remove_script_host: false,
          link_default_target: "_blank",
          link_assume_external_targets: true,
          image_caption: true,
          image_title: true,
          automatic_uploads: true,
          file_picker_types: "image",
          images_file_types: "jpg,jpeg,png,webp,gif",
          images_upload_handler: async (blobInfo) => {
            if (!onImageUpload) throw { message: "Image upload is not available.", remove: true };
            const blob = blobInfo.blob();
            const file = new File([blob], blobInfo.filename(), { type: blob.type });
            const url = await onImageUpload(file);
            if (!url) throw { message: "Image upload failed.", remove: true };
            return url;
          },
        }}
      />
    </div>
  );
}
