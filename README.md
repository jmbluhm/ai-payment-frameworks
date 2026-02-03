# Universal Commerce Protocol (UCP) Educational Site

A comprehensive, interactive educational website that explains the Universal Commerce Protocol (UCP) - an open standard co-developed by Shopify and Google for AI agents to transact with any merchant.

## Features

### Complete Implementation

- ✅ **Hero Section** with animated network visualization
- ✅ **Sticky Navigation** with smooth scrolling and active section tracking
- ✅ **What is UCP Section** explaining the problem and solution
- ✅ **How It Works Section** with actor descriptions and flows
- ✅ **Core Capabilities Section** covering checkout, identity, and orders
- ✅ **Architecture Section** explaining layered design and transport bindings
- ✅ **Payment Model Section** with detailed payment flows
- ✅ **For Developers Section** with implementation guides
- ✅ **Ecosystem Section** showcasing partners and use cases

### Interactive Tools

1. **Complexity Calculator** - Visualizes N×N integration problem vs UCP solution
2. **Profile Negotiator** - Interactive capability negotiation simulator
3. **State Machine Stepper** - Step-by-step checkout lifecycle walkthrough
4. **Payment Flow Visualizer** - 3-step payment lifecycle demonstration
5. **Extension Composer** - Shows how extensions augment base capabilities

## Tech Stack

- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **D3.js** - Data visualization library
- **Prism.js** - Syntax highlighting for code blocks
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx                    # Hero section with animated background
│   ├── Navigation.tsx              # Sticky navigation bar
│   ├── Footer.tsx                  # Footer with resources
│   ├── sections/                   # Main content sections
│   │   ├── WhatIsUCP.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Architecture.tsx
│   │   ├── PaymentModel.tsx
│   │   ├── ForDevelopers.tsx
│   │   └── Ecosystem.tsx
│   ├── interactive/                # Interactive tools
│   │   ├── ComplexityCalculator.tsx
│   │   ├── ProfileNegotiator.tsx
│   │   ├── StateMachineStepper.tsx
│   │   ├── PaymentFlowVisualizer.tsx
│   │   └── ExtensionComposer.tsx
│   └── shared/                     # Reusable components
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── CodeBlock.tsx
│       └── Section.tsx
├── App.tsx                         # Main app component
├── main.tsx                        # Entry point
└── index.css                       # Global styles and Tailwind imports
```

## Design System

### Colors

- **Primary**: Protocol Blue (#0066FF)
- **Success**: Green (#00B87C)
- **Warning**: Amber (#FFB020)
- **Error**: Red (#FF4458)
- **Accent**: Agent Purple (#8B5CF6), Merchant Teal (#14B8A6), Payment Orange (#FB923C)

### Typography

- **Headings**: Inter font family
- **Body**: Inter font family
- **Code**: JetBrains Mono

### Spacing

- Base unit: 8px
- Scale: 8, 16, 24, 32, 48, 64, 96, 128px

## Key Features

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile navigation

### Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Semantic HTML
- Focus management
- Screen reader compatible

### Performance

- Code splitting for optimal loading
- Lazy loading for below-fold content
- Optimized bundle size
- Smooth animations with reduced motion support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Resources

- [UCP Official Site](https://ucp.dev)
- [Technical Specification](https://ucp.dev/specification/overview/)
- [GitHub Repository](https://github.com/ucp-protocol/ucp)

## License

This educational site is built to explain UCP, an open standard by Shopify, Google, and industry partners.
