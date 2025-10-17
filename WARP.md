# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Start the Next.js development server (runs on http://localhost:3000)
- `npm run build` - Create a production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Architecture Overview

This is a **Next.js 14** application using the **App Router** with **TypeScript**.

**Key Technologies:**
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Material UI (MUI)** with custom theming:
  - Primary color: `#009688` (Teal)
  - Secondary color: `#003366` (Navy Blue)
  - Custom typography variants: h0-h4, body0-body2, accent
- **Sanity CMS** for content management (accessed at `/studio` route)
- **Google Gemini AI API** for resume analysis
- **pdf-parser-client-side** for client-side PDF parsing
- **Framer Motion** for animations
- **Path alias** `@/*` maps to `./src/*`

## Key Features and Pages

- `/` - Home page (landing page with testimonials and features)
- `/resume-analyzer` - AI-powered resume analysis with detailed feedback on issues and strengths
- `/ats-score` - ATS compatibility scoring and structured data extraction
- `/resume-checklist` - Interactive resume quality checklist
- `/create-resume` - Multi-step resume builder with form validation
- `/studio` - Sanity CMS Studio for content management (Next.js integrated)
- `/about` - About page
- `/contact` - Contact page

## API Routes

All API routes are in `src/app/api/` following Next.js 14 App Router conventions.

- **POST `/api/analyze-resume`** - Analyzes resumes using Gemini AI
  - Accepts: `{ resumeText: string }`
  - Returns: `{ issues: Array, strengths: Array, overallScore: number }`
  - Uses JSON response format from Gemini

- **POST `/api/analyze-resume-ats`** - Extracts structured resume data for ATS analysis
  - Accepts: `{ resumeText: string }`
  - Returns: Structured data with contact info, work experience, education, skills, etc.
  - Uses JSON response format from Gemini

- **POST `/api/parse-pdf`** - Extracts text content from PDF files

- **POST `/api/extract-resume-pdf`** - Extracts structured resume data from PDFs

All AI-powered routes use the Google Gemini API with environment variables:
- `GEMINI_API_KEY` - API key for Gemini
- `GEMINI_MODEL` - Model identifier (e.g., `gemini-1.5-flash`)

## Data Flow

**Resume Processing Architecture:**
1. Resume uploads are processed **client-side** using `pdf-parser-client-side`
2. **MD5 hashing** prevents duplicate analysis:
   - Each file gets an MD5 hash computed from its binary content
   - Before analysis, Sanity is queried for existing documents with the same `fileHash`
   - If found, the cached analysis is returned immediately
3. New analyses are sent to `/api/analyze-resume` or `/api/analyze-resume-ats`
4. Results are stored in Sanity CMS with complete metadata

**Sanity Integration:**
- Sanity client configured in `src/sanity/lib/client.ts`
- Three main schemas defined in `src/sanity/schemas/`:
  - `resume` - Stores resume files, extracted text, and analysis results (issues, strengths, score)
  - `atsScore` - Stores ATS-specific structured data extraction
  - `contact` - Stores contact form submissions
- File uploads use Sanity's asset API: `client.assets.upload('file', file)`
- Queries use GROQ syntax, e.g.: `*[_type == "resume" && fileHash == $fileHash]`

## Environment Setup

**Required Environment Variables:**

Create a `.env.local` file for secrets (this file is gitignored):

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_TOKEN=your-write-token

# Google Gemini AI
GEMINI_API_KEY=your-gemini-api-key
GEMINI_MODEL=gemini-1.5-flash
```

**Important:**
- `.env` contains non-secret public configuration (already in repo)
- `.env.local` is for secrets and is gitignored
- All Sanity variables are prefixed with `NEXT_PUBLIC_` because they're used client-side
- Gemini variables (without prefix) are server-side only

## Styling Approach

**MUI Custom Theme:**
- Theme configuration in `src/theme/theme.ts`
- Custom typography scale extends MUI defaults
- Component style overrides:
  - **Buttons**: Fully rounded (`borderRadius: '9999px'`)
  - **Papers**: No background image, light gray background
  - **AppBar**: Gradient background (navy to light blue)
- Light mode only (dark mode not currently configured)

**CSS Framework:**
- Tailwind CSS is configured (`tailwind.config.ts`) but **MUI components dominate**
- Global styles in `src/app/globals.css`
- MUI's `sx` prop is the primary styling method throughout the app

## Important Architectural Patterns

**Client-Side Rendering:**
- All pages use the `'use client'` directive
- This is necessary because MUI components require client-side JavaScript
- The app is primarily client-side rendered despite using Next.js

**Layout Structure:**
- `src/app/layout.tsx` wraps everything in `ThemeProvider` and applies `CssBaseline`
- `Navbar` component imported and used in individual pages (not in layout)
- Font: Inter from Google Fonts

**PDF Processing:**
- `pdf-parse` is configured as an external package in `next.config.mjs`
- Client-side parsing uses `pdf-parser-client-side` library
- Text extraction happens before sending to API (reduces API payload size)

**File Organization:**
- `src/app/` - Pages and API routes (App Router structure)
- `src/components/` - Shared React components
- `src/sanity/` - Sanity configuration and schemas
- `src/theme/` - MUI theme configuration
- `src/types/` - TypeScript type definitions

**TypeScript Configuration:**
- Path alias `@/*` resolves to `src/*`
- Custom type roots include `./src/types` for `.d.ts` files
- Strict mode enabled

## Resume Builder Architecture

The `/create-resume` page implements a multi-step form wizard:
- Steps: Upload → Personal Info → Experience → Education → Skills → Additional → Summary → Review
- State management using React `useState` for form data
- Components in `src/app/create-resume/components/`
- Progress tracking with visual indicators
- Sample data toggle for testing/demonstration

## Working with Sanity Studio

- Studio accessible at http://localhost:3000/studio during development
- Uses `next-sanity` package for Next.js integration
- Studio configuration in `src/sanity/sanity.config.ts`
- Schema types exported from `src/sanity/schemas/index.ts`

To modify schemas:
1. Edit files in `src/sanity/schemas/`
2. Export from `index.ts`
3. Restart dev server to see changes in Studio
