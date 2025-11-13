## OpenXAI Hub

Innovative Web3 Education Platform - Onchain certificates, live projects, and real rewards. Xnode/Nix compatible Next.js app.

**Repository:** [OpenxAI-Network/openxai-hub](https://github.com/OpenxAI-Network/openxai-hub)

## Setup

### Environment Variables

Create `.env.local` in `nextjs-app/`:

```bash
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id_here
NEXT_PUBLIC_NETWORK=testnet
NEXT_PUBLIC_OPENRD_TASKS_CONTRACT=0xDdb23dacd41908C4eAE03982B1c6529252A56b62
NEXT_PUBLIC_OPENRD_NETWORK=sepolia
```

**Note:** Get your Reown project ID from [Reown Cloud](https://cloud.reown.com/).

### Commands (in root folder)

```bash
nix run
```

### Commands (in nextjs-app)

```bash
npm i
npm run dev
npm run build
npm run start
```

## Features

- Wallet connection via Reown AppKit
- Course progress tracking via OpenR&D contracts
- Module-to-task mapping system
- Onchain certificate system (when deployed)
- Testnet support (Sepolia, Polygon Amoy)

## Networks

**Testnet:**
- Sepolia (Ethereum testnet)
- Polygon Amoy (Polygon testnet)

**Mainnet:**
- Polygon
- Ethereum, Arbitrum, Optimism, Base

## OpenR&D Integration

Uses OpenR&D smart contracts for task completion tracking:
- Contract: `0xDdb23dacd41908C4eAE03982B1c6529252A56b62`
- Network: Sepolia (testnet) / Polygon (mainnet)
- Module completion = OpenR&D task completion

## Deployment

### Vercel

Set Root Directory to `nextjs-app` in Vercel dashboard.

### Xnode

1. Build your Next.js app
2. Push to GitHub
3. Go to [Xnode Studio App Store](https://www.openmesh.network/xnode/app-store)
4. Paste your GitHub URL and deploy

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Set Root Directory to `nextjs-app` in Vercel dashboard
3. Configure environment variables from `.env.example`
4. Deploy

### Supabase

1. Create a new Supabase project
2. Run migrations: `npx prisma migrate deploy` (or use Supabase migrations)
3. Configure environment variables with your Supabase connection string
4. Link Supabase project to your Vercel deployment
