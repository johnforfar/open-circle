## OpenX Academy

Innovative Web3 Education Platform - Onchain certificates, live projects, and real rewards. Xnode/Nix compatible Next.js app.

## Setup

### Environment Variables

Create `.env.local` in `nextjs-app/`:

```bash
NEXT_PUBLIC_REOWN_PROJECT_ID=7e1b35c4e28938e616af208cea516588
NEXT_PUBLIC_NETWORK=testnet
NEXT_PUBLIC_OPENRD_TASKS_CONTRACT=0xDdb23dacd41908C4eAE03982B1c6529252A56b62
NEXT_PUBLIC_OPENRD_NETWORK=sepolia
```

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

1. Replace all instances of "open-circle" with your project name
2. Build your Next.js app
3. Push to GitHub
4. Go to [Xnode Studio App Store](https://www.openmesh.network/xnode/app-store)
5. Paste your GitHub URL and deploy

## One click deployment

[<img src="https://www.openmesh.network/xnode/deploy-on-xnode.svg" width=200 />](https://www.openmesh.network/xnode/deploy?advanced=eyJkYXRhIjp7Im5hbWUiOiJvcGVuLWNpcmNsZSIsImRlc2MiOiJDdXN0b20gQXBwIiwibml4TmFtZSI6Im9wZW4tY2lyY2xlIiwib3B0aW9ucyI6W3sibmFtZSI6ImVuYWJsZSIsImRlc2MiOiJFbmFibGUgdGhlIG5leHRqcyBhcHAiLCJuaXhOYW1lIjoiZW5hYmxlIiwidHlwZSI6ImJvb2xlYW4iLCJ2YWx1ZSI6InRydWUifSx7Im5hbWUiOiJob3N0bmFtZSIsImRlc2MiOiJUaGUgaG9zdG5hbWUgdW5kZXIgd2hpY2ggdGhlIGFwcCBzaG91bGQgYmUgYWNjZXNzaWJsZS4iLCJuaXhOYW1lIjoiaG9zdG5hbWUiLCJ0eXBlIjoic3RyaW5nIiwidmFsdWUiOiIwLjAuMC4wIn0seyJuYW1lIjoicG9ydCIsImRlc2MiOiJUaGUgcG9ydCB1bmRlciB3aGljaCB0aGUgYXBwIHNob3VsZCBiZSBhY2Nlc3NpYmxlLiIsIm5peE5hbWUiOiJwb3J0IiwidHlwZSI6IjE2IGJpdCB1bnNpZ25lZCBpbnRlZ2VyOyBiZXR3ZWVuIDAgYW5kIDY1NTM1IChib3RoIGluY2x1c2l2ZSkiLCJ2YWx1ZSI6IjMwMDAifSx7Im5hbWUiOiJvcGVuRmlyZXdhbGwiLCJkZXNjIjoiV2hldGhlciB0byBvcGVuIHBvcnRzIGluIHRoZSBmaXJld2FsbCBmb3IgdGhpcyBhcHBsaWNhdGlvbi4iLCJuaXhOYW1lIjoib3BlbkZpcmV3YWxsIiwidHlwZSI6ImJvb2xlYW4iLCJ2YWx1ZSI6InRydWUifV0sInRhZ3MiOltdLCJmbGFrZXMiOlt7Im5hbWUiOiJvcGVuLWNpcmNsZS1mbGFrZSIsInVybCI6ImdpdGh1Yjpqb2huZm9yZmFyL29wZW4tY2lyY2xlIn1dLCJpZCI6Im9wZW4tY2lyY2xlIn0sInR5cGUiOiJ0ZW1wbGF0ZXMiLCJzZXJ2aWNlcyI6W3sibmFtZSI6Im9wZW4tY2lyY2xlIiwiZGVzYyI6IkN1c3RvbSBBcHAiLCJuaXhOYW1lIjoib3Blbi1jaXJjbGUiLCJvcHRpb25zIjpbeyJuYW1lIjoiZW5hYmxlIiwiZGVzYyI6IkVuYWJsZSB0aGUgbmV4dGpzIGFwcCIsIm5peE5hbWUiOiJlbmFibGUiLCJ0eXBlIjoiYm9vbGVhbiIsInZhbHVlIjoidHJ1ZSJ9LHsibmFtZSI6Imhvc3RuYW1lIiwiZGVzYyI6IlRoZSBob3N0bmFtZSB1bmRlciB3aGljaCB0aGUgYXBwIHNob3VsZCBiZSBhY2Nlc3NpYmxlLiIsIm5peE5hbWUiOiJob3N0bmFtZSIsInR5cGUiOiJzdHJpbmciLCJ2YWx1ZSI6IjAuMC4wLjAifSx7Im5hbWUiOiJwb3J0IiwiZGVzYyI6IlRoZSBwb3J0IHVuZGVyIHdoaWNoIHRoZSBhcHAgc2hvdWxkIGJlIGFjY2Vzc2libGUuIiwibml4TmFtZSI6InBvcnQiLCJ0eXBlIjoiMTYgYml0IHVuc2lnbmVkIGludGVnZXI7IGJldHdlZW4gMCBhbmQgNjU1MzUgKGJvdGggaW5jbHVzaXZlKSIsInZhbHVlIjoiMzAwMCJ9LHsibmFtZSI6Im9wZW5GaXJld2FsbCIsImRlc2MiOiJXaGV0aGVyIHRvIG9wZW4gcG9ydHMgaW4gdGhlIGZpcmV3YWxsIGZvciB0aGlzIGFwcGxpY2F0aW9uLiIsIm5peE5hbWUiOiJvcGVuRmlyZXdhbGwiLCJ0eXBlIjoiYm9vbGVhbiIsInZhbHVlIjoidHJ1ZSJ9XSwidGFncyI6W10sImZsYWtlcyI6W3sibmFtZSI6Im9wZW4tY2lyY2xlLWZsYWtlIiwidXJsIjoiZ2l0aHViOmpvaG5mb3JmYXIvb3Blbi1jaXJjbGUifV19XX0=)
