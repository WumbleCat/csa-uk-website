# CamboSoc UK

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## Supabase

This project uses [Supabase](https://supabase.com) as its backend — database, auth, and storage.

### Initial setup

1. Create a free project at [supabase.com](https://supabase.com).
2. Install the Supabase CLI:
   ```bash
   npm install supabase --save-dev
   ```
3. Log in:
   ```bash
   npx supabase login
   ```
4. Link this repo to your Supabase project (get the project ref from the dashboard URL or Project Settings):
   ```bash
   npx supabase link --project-ref <your-project-ref>
   ```

### Environment variables

Create a `.env.local` file in the `cambosoc-uk/` directory (never commit this file):

```env
NEXT_PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

Find these values in your Supabase dashboard under **Project Settings → API**.

- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are safe to expose in the browser.
- `SUPABASE_SERVICE_ROLE_KEY` bypasses Row Level Security — only use it in server-side code and never expose it client-side.

### Running Supabase locally

Start a local Supabase stack (requires [Docker](https://www.docker.com/)):

```bash
npx supabase start
```

This spins up a local Postgres instance, Studio UI, and all Supabase services. Studio is available at `http://localhost:54323`.

Stop the local stack:

```bash
npx supabase stop
```

Reset the local database and re-apply all migrations:

```bash
npx supabase db reset
```

### Database migrations

All schema changes are tracked as migration files in `supabase/migrations/`.

Create a new migration after making changes in the local Studio:

```bash
npx supabase db diff --use-migra -f <migration_name>
```

Apply pending migrations to the local database:

```bash
npx supabase db reset
```

Push migrations to the remote (production) database:

```bash
npx supabase db push
```

Pull the current remote schema into a new migration file (use with caution on a fresh setup):

```bash
npx supabase db pull
```

### Seeding data

Place seed SQL in `supabase/seed.sql`. It runs automatically after `supabase db reset`.

Example seed for the events table:

```sql
insert into events (name, day, month, year, category, venue, time, description, featured)
values
  ('Khmer New Year Gala Night', '21', 'May', '2026', 'Cultural', 'Imperial College London', '7:00 PM', 'Our flagship annual event.', true),
  ('Career Panel: Finance & Consulting', '28', 'May', '2026', 'Career', 'Online (Zoom)', '6:30 PM', 'Hear from professionals.', false);
```

### Viewing and editing data

- **Local:** open Supabase Studio at `http://localhost:54323`
- **Remote:** open the [Supabase dashboard](https://supabase.com/dashboard) → your project → **Table Editor**

### Generating TypeScript types

Keep your TypeScript types in sync with the database schema:

```bash
npx supabase gen types typescript --local > src/lib/database.types.ts
```

For the remote schema, replace `--local` with `--project-id <your-project-ref>`.

### Deploying

Supabase schema changes are not deployed automatically. After merging to main, run:

```bash
npx supabase db push
```

This applies any unapplied migrations from `supabase/migrations/` to the production database.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase CLI Reference](https://supabase.com/docs/reference/cli)

## Deploy on Vercel

The easiest way to deploy this app is via the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). Add the three environment variables above in Vercel's **Project → Settings → Environment Variables** before deploying.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
