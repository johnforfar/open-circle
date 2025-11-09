# Open Circle - Setup Documentation

## Overview

This Next.js application has been configured with:
- **shadcn/ui** - Modern UI component library
- **Reown AppKit** (formerly WalletConnect) - Web3 wallet connection
- **Argentina Blockchain Curriculum Template** - Course structure based on official Buenos Aires curriculum

## Installation Complete

### Dependencies Installed

1. **Tailwind CSS & shadcn/ui**
   - `tailwindcss`, `postcss`, `autoprefixer`
   - `tailwindcss-animate`
   - `class-variance-authority`, `clsx`, `tailwind-merge`

2. **Reown AppKit**
   - `@reown/appkit`
   - `@reown/appkit-adapter-wagmi`
   - `wagmi`
   - `viem`
   - `@tanstack/react-query`

### Configuration Files Created

- `tailwind.config.ts` - Tailwind CSS configuration with shadcn/ui theme
- `postcss.config.mjs` - PostCSS configuration
- `components.json` - shadcn/ui configuration
- `app/globals.css` - Global styles with Tailwind directives
- `lib/utils.ts` - Utility functions for shadcn/ui

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the `nextjs-app` directory:

```bash
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
```

**To get your Project ID:**
1. Visit https://dashboard.reown.com
2. Sign up or log in
3. Create a new project
4. Copy your Project ID

### 2. Run the Development Server

```bash
cd nextjs-app
npm run dev
```

The application will be available at `http://localhost:3000`

## Features Implemented

### Web3 Wallet Connection

- Wallet connect button on homepage
- Support for multiple networks: Mainnet, Polygon, Arbitrum, Optimism, Base, Sepolia
- Configured with Reown AppKit

### Course Template

Based on Argentina's official blockchain curriculum, located in:
- `templates/courses/argentina-blockchain-curriculum.json`

The curriculum includes:
1. **Introduction to Blockchain Technology** (8 weeks)
2. **Ethereum Platform Overview** (10 weeks)
3. **Solidity Programming** (12 weeks)
4. **Blockchain Internships** (16 weeks)
5. **Ethical and Legal Considerations** (6 weeks)

## Next Steps

1. **Get Reown Project ID** - Set up your project at https://dashboard.reown.com
2. **Add shadcn/ui components** - Use `npx shadcn@latest add [component]` to add UI components
3. **Build course pages** - Use the Argentina curriculum template to create course pages
4. **Implement user authentication** - Add email collection and user accounts
5. **Add community features** - Implement forums, discussions, and peer learning

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx          # Root layout with AppKit provider
│   ├── page.tsx            # Homepage with wallet connect
│   └── globals.css          # Global styles
├── components/
│   ├── providers/
│   │   └── appkit-provider.tsx  # AppKit configuration
│   └── wallet-connect-button.tsx # Wallet connect component
├── templates/
│   └── courses/
│       ├── argentina-blockchain-curriculum.json  # Course template
│       └── README.md                             # Template documentation
├── lib/
│   └── utils.ts            # Utility functions
└── config/
    └── site.ts             # Site configuration
```

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Reown AppKit Documentation](https://docs.reown.com)
- [Argentina Blockchain Curriculum](templates/courses/README.md)

