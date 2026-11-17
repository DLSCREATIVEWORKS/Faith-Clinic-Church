# Faith Clinic Church website

Next.js 16 + Payload CMS 3 + PostgreSQL. Home page at `/`, admin dashboard at `/admin`.

## Requirements
- Node.js 22.23.5+ or 24.22.3+
- A PostgreSQL database

## Environment variables (set in the host, never in Git)
- `DATABASE_URL`: PostgreSQL connection string
- `PAYLOAD_SECRET`: long random string

## Commands
- Install: `npm ci`
- Build: `npm run build`
- Start: `npm run start`
