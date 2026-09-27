# GH Wrapped (Rekap Activity GitHub Team)

An internal web application for generating personalized year-in-review summaries for developer GitHub activity across our company teams. GH Wrapped aggregates commit trends, merged PRs, code reviews, and top repository contributions into visual dashboard cards for end-of-year syncs and Slack team updates.

![GH Wrapped Dashboard Placeholder](public/dashboard-placeholder.png)

## Features

- **GitHub PAT Authentication**: Authenticate safely using personal access tokens (PAT) or corporate OAuth.
- **Contribution Analytics**: Direct aggregation of commit volumes, merged PRs, and peer review stats.
- **Highlight Cards**: Automatically compute peak productivity days, late-night commit badges, and top impacted repos.
- **PNG Summary Export**: One-click high-res PNG snapshot export formatted for presentation slides and team channels.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI / Styling**: React 19, Tailwind CSS 4.0
- **Language**: TypeScript 5.0

## Getting Started

### Prerequisites

- Node.js 20+ installed on your local environment
- A valid GitHub Personal Access Token (`repo` and `read:user` scopes required for private internal org repos)

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/internal-corp/gh-wrapped.git
   cd gh-wrapped
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your default org name and server port:
   ```env
   NEXT_PUBLIC_DEFAULT_ORG=corporate-it
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

For internal production deployment on the corporate Linux VM:

```bash
npm run build
npm run start -- -p 8080
```

Alternatively, deploy directly to Vercel connected to the enterprise GitHub account.

## Known Issues & Workarounds

- **React 19 / html2canvas rendering**: Due to Next.js 16 dynamic server component hydration behavior during canvas rasterization, node cloning can occasionally omit external tailwind fonts on server-side pre-rendered elements. As a workaround, export rendering forces client-side re-hydration before canvas capture.