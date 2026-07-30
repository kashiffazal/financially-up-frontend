# Financially Up - Design System

Complete visual and interaction specification for the Financially Up marketing site. All tokens are defined in `src/styles.css` and consumed via Tailwind v4 utilities and Ant Design theme overrides.

---

## 1. Brand

- **Company:** Financially Up
- **Tagline:** Accounting | Taxation | Advisory
- **Positioning:** Trusted Australian accountants for individuals and businesses
- **Voice:** Professional, reassuring, plain-English, confident
- **Logo:** Green chevron mark. Two variants:
  - `logo.png` - full color, for light backgrounds
  - `logo-white.png` - reversed, for dark backgrounds / footer

---

## 2. Color System

Colors are authored in **OKLCH** for perceptual consistency across light/dark modes. Never hardcode hex/rgb in components - always reference the semantic token.

### 2.1 Light Mode (`:root`)

| Token | OKLCH | Approx Hex | Purpose |
|---|---|---|---|
| `--background` | `oklch(1 0 0)` | `#FFFFFF` | Page background |
| `--foreground` | `oklch(0.18 0.02 260)` | `#1F2433` | Body text |
| `--card` | `oklch(1 0 0)` | `#FFFFFF` | Card surface |
| `--card-foreground` | `oklch(0.18 0.02 260)` | `#1F2433` | Text on cards |
| `--popover` | `oklch(1 0 0)` | `#FFFFFF` | Popover surface |
| `--popover-foreground` | `oklch(0.18 0.02 260)` | `#1F2433` | Text in popovers |
| `--brand` | `oklch(0.56 0.14 155)` | `#16A34A` | Primary brand green |
| `--brand-foreground` | `oklch(0.98 0.01 150)` | `#F7FEF9` | Text on brand fills |
| `--brand-soft` | `oklch(0.96 0.04 155)` | `#E6F7EC` | Tint / section backgrounds |
| `--primary` | `oklch(0.56 0.14 155)` | `#16A34A` | Primary action |
| `--primary-foreground` | `oklch(0.98 0.01 150)` | `#F7FEF9` | Text on primary |
| `--primary-glow` | `oklch(0.68 0.15 152)` | `#3FCB6E` | Gradient highlight |
| `--secondary` | `oklch(0.96 0.02 155)` | `#EEF7F1` | Secondary surface |
| `--secondary-foreground` | `oklch(0.28 0.08 155)` | `#1E5231` | Text on secondary |
| `--muted` | `oklch(0.965 0.008 250)` | `#F3F4F7` | Muted surface |
| `--muted-foreground` | `oklch(0.5 0.02 260)` | `#6B7280` | Secondary text |
| `--accent` | `oklch(0.96 0.04 155)` | `#E6F7EC` | Accent surface |
| `--accent-foreground` | `oklch(0.32 0.1 155)` | `#215F38` | Text on accent |
| `--destructive` | `oklch(0.6 0.22 27)` | `#DC3B2C` | Errors / destructive |
| `--destructive-foreground` | `oklch(0.98 0.01 250)` | `#F8FAFC` | Text on destructive |
| `--border` | `oklch(0.92 0.01 250)` | `#E4E7EC` | Borders / dividers |
| `--input` | `oklch(0.92 0.01 250)` | `#E4E7EC` | Input borders |
| `--ring` | `oklch(0.56 0.14 155)` | `#16A34A` | Focus ring |

### 2.2 Dark Mode (`.dark`)

| Token | OKLCH | Approx Hex | Purpose |
|---|---|---|---|
| `--background` | `oklch(0.16 0.02 240)` | `#151A24` | Page background |
| `--foreground` | `oklch(0.96 0.01 150)` | `#F1FAF3` | Body text |
| `--card` | `oklch(0.21 0.02 240)` | `#1D232F` | Card surface |
| `--card-foreground` | `oklch(0.96 0.01 150)` | `#F1FAF3` | Text on cards |
| `--popover` | `oklch(0.21 0.02 240)` | `#1D232F` | Popover surface |
| `--popover-foreground` | `oklch(0.96 0.01 150)` | `#F1FAF3` | Text in popovers |
| `--brand` | `oklch(0.7 0.16 152)` | `#3ECB6C` | Primary brand green (lighter) |
| `--brand-foreground` | `oklch(0.15 0.02 240)` | `#131822` | Text on brand fills |
| `--brand-soft` | `oklch(0.28 0.06 155)` | `#22432E` | Tint / section backgrounds |
| `--primary` | `oklch(0.7 0.16 152)` | `#3ECB6C` | Primary action |
| `--primary-foreground` | `oklch(0.15 0.02 240)` | `#131822` | Text on primary |
| `--primary-glow` | `oklch(0.78 0.15 150)` | `#63DE85` | Gradient highlight |
| `--secondary` | `oklch(0.26 0.03 240)` | `#232B3B` | Secondary surface |
| `--secondary-foreground` | `oklch(0.96 0.01 150)` | `#F1FAF3` | Text on secondary |
| `--muted` | `oklch(0.26 0.02 240)` | `#242A37` | Muted surface |
| `--muted-foreground` | `oklch(0.7 0.02 240)` | `#A6AEBC` | Secondary text |
| `--accent` | `oklch(0.3 0.06 155)` | `#264A34` | Accent surface |
| `--accent-foreground` | `oklch(0.96 0.01 150)` | `#F1FAF3` | Text on accent |
| `--destructive` | `oklch(0.55 0.22 27)` | `#C93425` | Errors / destructive |
| `--destructive-foreground` | `oklch(0.98 0.01 250)` | `#F8FAFC` | Text on destructive |
| `--border` | `oklch(1 0 0 / 12%)` | rgba(255,255,255,0.12) | Borders / dividers |
| `--input` | `oklch(1 0 0 / 15%)` | rgba(255,255,255,0.15) | Input borders |
| `--ring` | `oklch(0.7 0.16 152)` | `#3ECB6C` | Focus ring |

### 2.3 Gradients & Shadows

| Token | Value | Usage |
|---|---|---|
| `--gradient-brand` (light) | `linear-gradient(135deg, oklch(0.5 0.14 155), oklch(0.68 0.15 152))` | Hero CTA, buttons, feature blocks |
| `--gradient-brand` (dark) | `linear-gradient(135deg, oklch(0.4 0.12 155), oklch(0.62 0.16 152))` | Same, tuned for dark |
| `--gradient-soft` (light) | `linear-gradient(180deg, oklch(0.97 0.03 155), oklch(1 0 0))` | Section wash / hero backdrop |
| `--gradient-soft` (dark) | `linear-gradient(180deg, oklch(0.22 0.03 240), oklch(0.16 0.02 240))` | Same, tuned for dark |
| `--shadow-brand` (light) | `0 20px 40px -20px color-mix(in oklab, var(--brand) 45%, transparent)` | Elevated brand elements |
| `--shadow-brand` (dark) | `0 20px 40px -20px color-mix(in oklab, var(--brand) 30%, transparent)` | Same, softer |
| `--shadow-card` (light) | `0 4px 24px -8px oklch(0.2 0.02 260 / 0.08)` | Card elevation |
| `--shadow-card` (dark) | `0 4px 24px -8px oklch(0 0 0 / 0.5)` | Card elevation |

Utility classes: `bg-gradient-brand`, `bg-gradient-soft`, `shadow-brand`, `shadow-card`.

---

## 3. Typography

Fonts are loaded via `<link>` in `src/routes/__root.tsx` (never `@import` a remote URL in CSS).

| Family | CSS Variable | Usage |
|---|---|---|
| **Inter** | `--font-sans` | Body copy, UI, buttons, nav |
| **Plus Jakarta Sans** | `--font-display` | Headings (h1-h4), hero, section titles |

### 3.1 Scale

| Element | Size | Weight | Line height | Letter spacing |
|---|---|---|---|---|
| Hero H1 | 3.5rem / 56px (mobile 2.25rem) | 700 | 1.05 | -0.02em |
| H1 | 2.5rem / 40px | 700 | 1.1 | -0.02em |
| H2 | 2rem / 32px | 700 | 1.15 | -0.02em |
| H3 | 1.5rem / 24px | 600 | 1.2 | -0.02em |
| H4 | 1.25rem / 20px | 600 | 1.3 | -0.02em |
| Body large | 1.125rem / 18px | 400 | 1.6 | 0 |
| Body | 1rem / 16px | 400 | 1.6 | 0 |
| Small | 0.875rem / 14px | 400 | 1.5 | 0 |
| Caption | 0.75rem / 12px | 500 | 1.4 | 0.02em |

Global: `-webkit-font-smoothing: antialiased`. Headings use `letter-spacing: -0.02em`.

---

## 4. Spacing, Radius, Layout

### 4.1 Radius

| Token | Value |
|---|---|
| `--radius` | `0.625rem` (10px, base) |
| `--radius-sm` | `calc(var(--radius) - 4px)` = 6px |
| `--radius-md` | `calc(var(--radius) - 2px)` = 8px |
| `--radius-lg` | `var(--radius)` = 10px |
| `--radius-xl` | `calc(var(--radius) + 4px)` = 14px |
| `--radius-2xl` | `calc(var(--radius) + 8px)` = 18px |

Cards use `rounded-xl` or `rounded-2xl`. Buttons use `rounded-lg`. Pills / tags use `rounded-full`.

### 4.2 Spacing scale

Tailwind default 4px base. Section vertical padding: `py-16 md:py-24`. Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

### 4.3 Breakpoints

| Name | Min width |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

---

## 5. Components

### 5.1 Buttons (Ant Design)

Configured via `ConfigProvider` in `src/routes/__root.tsx`. Primary color: `#16A34A`.

- **Primary:** brand green fill, white text, `rounded-lg`, medium weight. Use for main CTAs ("Book an Appointment").
- **Default:** transparent fill, border `--border`, foreground text. Secondary actions.
- **Ghost:** no fill, no border, brand text. Tertiary / footer links.
- **Sizes:** `large` for hero CTAs, `middle` for inline forms and nav.

### 5.2 Cards

- Background: `--card`
- Border: `1px solid --border`
- Radius: `rounded-2xl`
- Shadow: `shadow-card`
- Padding: `p-6` (mobile) / `p-8` (desktop)
- Hover: `hover:shadow-brand transition-shadow`

### 5.3 Tags / Chips

Used on hero image floating badges (Investments, Bookkeeping, Tax Returns, ABN & TFN, Business Registrations, Accounting).

- Background: white with `backdrop-blur`
- Border: `1px solid --border`
- Radius: `rounded-full`
- Icon: brand-tinted, 16px
- Text: 14px, weight 500, foreground color

### 5.4 Header

- Top utility bar: `--brand` background, white text, phone + email, 36px tall.
- Main nav: sticky, `backdrop-blur`, white/95 background, `border-b`.
- Mega menu: full-width dropdown on hover, `--card` background, 4-column grid, `shadow-card`.
- Mobile: Ant Design `Drawer` from the right.

### 5.5 Footer

- Background: `--brand-soft` (light green wash)
- 12-column grid, 4 content columns: Brand+Subscribe, Services, Resources, Company
- Text: `--foreground` on light, muted for descriptions
- Social icons: brand-tinted, 20px
- Bottom bar: `border-t border-border/60`, includes "Developed by [Innotech Cloud](http://innotechcloud.com/)" attribution.

### 5.6 Testimonial Carousel

- Ant Design `Carousel`, `slidesToShow: 3` desktop, 2 tablet, 1 mobile
- Autoplay 6s, dots visible, brand-tinted active dot
- Card: avatar 56px, name (600 weight), role (muted), 5-star row (brand color), quote body

### 5.7 Google Reviews Badge

Standalone section, centered, white card with `shadow-card`, includes:
- "EXCELLENT" label, 5 gold stars
- "Average rating 5/5 - Total reviews 190+"

### 5.8 CTA Block

- `bg-gradient-brand` full-bleed section
- White heading + supporting copy
- Two buttons: Primary white-on-transparent, Ghost outlined
- Decorative blur ellipses in corners

---

## 6. Iconography

- **Library:** `lucide-react` for UI icons, plus custom brand SVGs for hero tag chips and partner logos.
- **Sizes:** 16px inline, 20px nav, 24px feature, 32px hero.
- **Color:** Inherit `currentColor`; tint via `text-brand`, `text-muted-foreground`.
- **Partner SVGs:** MYOB, Xero, CA ANZ, IPA, QuickBooks, Tax Practitioners, ASIC. Rendered on a white card in the "Trusted Nationwide" section (background `bg-brand-soft/60`).

---

## 7. Imagery

| Asset | Usage |
|---|---|
| `hero.png` | Home hero, woman in green sweater on white with organic green blobs |
| `over50k.webp` | "Trusted Nationwide" section, man in glasses holding laptop |
| `why-choose-us.png` | "Why Choose Us" section, team collaboration in office |
| `google-review.png` | Google review badge asset |

Image treatment: rounded 2xl, `shadow-card`, occasionally overlayed with brand blob shapes.

---

## 8. Motion

- Smooth scroll: `html { scroll-behavior: smooth }`.
- Transitions: `transition-colors`, `transition-shadow`, `transition-transform` at 150-250ms.
- Hover: cards lift shadow, buttons darken 5%, tags gently scale to 1.02.
- Carousel: 500ms ease, autoplay 6s.
- Theme toggle: instant class swap; CSS variables handle color interpolation via browser.

---

## 9. Dark / Light Toggle

- Managed by `src/lib/theme.tsx` (`ThemeProvider`).
- Persists to `localStorage['theme']`; falls back to `prefers-color-scheme`.
- Toggles `.dark` class on `<html>`.
- Toggle button lives in the header, uses Sun/Moon lucide icons.

---

## 10. Accessibility

- Contrast: all brand-on-white and foreground-on-background combinations meet WCAG AA (>= 4.5:1 for body, >= 3:1 for large text).
- Focus: `--ring` visible on all interactive elements (2px outline, 2px offset).
- Motion respects `prefers-reduced-motion` (disable autoplay, reduce transitions).
- Semantic HTML: single `<h1>` per route, landmark regions (`<header>`, `<nav>`, `<main>`, `<footer>`).
- Alt text on every content image.

---

## 11. SEO Defaults

Per-route `head()` sets unique title (< 60 chars), meta description (< 160 chars), og:title, og:description, og:type, twitter:card. Absolute `og:image` only when a route has a meaningful hero.

---

## 12. Attribution

Footer includes: **Developed by [Innotech Cloud](http://innotechcloud.com/)**.
