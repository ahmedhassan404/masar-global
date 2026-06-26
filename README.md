# Masar Global Landing Page

Reusable company landing-page template built with React and Vite.

## Stack

- React 19
- Vite 8
- Lucide React icons
- Plain CSS with global theme tokens in `src/styles/global.css`

## Template Configuration

Company content, colors, navigation, hero copy, services, stats, contact info,
social links, and the contact endpoint all live in:

```text
src/config/siteConfig.ts
```

For a new company, update that file and replace assets in `public/brand/`.

## Local Development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run lint
npm run build
npm run preview
```

## Structure

- `src/config/` - central site configuration
- `src/components/common/` - small reusable UI elements
- `src/components/layout/` - navbar, footer, and mobile banner
- `src/components/sections/` - landing-page sections
- `src/styles/` - global tokens and responsive styles

## Contact Form

The contact form builds this JSON payload:

```json
{
  "name": "",
  "email": "",
  "phone": "",
  "company": "",
  "message": ""
}
```

It posts to the endpoint configured with:

```text
VITE_CONTACT_ENDPOINT=
```

If the endpoint is empty, the form stays usable and shows a clean configuration
message instead of failing.
