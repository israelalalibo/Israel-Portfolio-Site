# Israel Karibo Alalibo, Portfolio Site

Personal portfolio site. Single page, React 19 with TypeScript, built with Vite and styled with
Tailwind CSS. Deployed on Vercel.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # type check and production build into dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Structure

All page content lives in [src/sections/](src/sections/), one component per section. There is no CMS
or data layer; copy is written inline in each component.

| File | Section |
| --- | --- |
| `Navigation.tsx` | Fixed header, nav links, CV download |
| `Hero.tsx` | Name, role, headline stats |
| `About.tsx` | Biography, education, location, contact and background cards |
| `Experience.tsx` | Dematic role, quantified achievements, AI tooling adoption, freelance, BCS |
| `Projects.tsx` | Six project cards, each with year, stack and links |
| `Skills.tsx` | Skill categories, plus groupings by actual depth of use |
| `Contact.tsx` | Contact details and a mailto backed message form |
| `Footer.tsx` | Nav repeat, social links |

Section order is set in [src/App.tsx](src/App.tsx). Colour tokens (`navy`, `camel`, `charcoal`,
`off-white`) and the animation keyframes are defined in
[tailwind.config.js](tailwind.config.js).

Static assets are served from [public/](public/): the CV download, the favicon and the photography.

## Content notes

- Page title, description and Open Graph tags live in [index.html](index.html). The two absolute
  image URLs there need the production domain filling in before link previews will render on
  LinkedIn and similar.
- The CV served at `/Israel_Karibo_Alalibo_CV.docx` should be kept in step with the copy on the page.
