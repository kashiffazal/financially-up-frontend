<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# CSS & Component Architecture Rule

1. **Folder per Component**: Every UI component MUST have its own dedicated directory named after the component (e.g. `components/website/Header/` or `app/(web)/home-components/HeroSection/`).
2. **Files inside Component Folder**:
   - `index.jsx` (or `[ComponentName].jsx`) for JSX & component logic.
   - `[ComponentName].module.css` for component-specific styling.
3. **Shared / Global CSS**: Keep utility classes, design tokens, and global resets in `app/(web)/web.css`.
4. **Future Pages & Components**: Always follow this Component Folder + JSX + CSS Module structure for all web pages and components.
