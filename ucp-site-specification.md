# Universal Commerce Protocol (UCP) Educational Site
## Comprehensive Specification & Build Instructions

---

## Executive Summary

This document specifies a single-page web application designed to educate diverse software industry audiences about the Universal Commerce Protocol (UCP) — an open standard co-developed by Shopify and Google for AI agents to discover, negotiate, and transact with any merchant.

The site will combine clear explanations, visual diagrams, interactive tools, and technical depth to serve multiple audience segments: business decision-makers, product managers, software architects, and developers.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Target Audiences](#target-audiences)
3. [Information Architecture](#information-architecture)
4. [Visual Design System](#visual-design-system)
5. [Section-by-Section Specifications](#section-by-section-specifications)
6. [Interactive Tools Specifications](#interactive-tools-specifications)
7. [Technical Architecture](#technical-architecture)
8. [Content Guidelines](#content-guidelines)

---

## Project Overview

### Purpose
Create a comprehensive, interactive educational resource that explains UCP in clear, accessible language while providing the technical depth needed by implementers.

### Key Goals
1. **Clarity**: Make complex protocol concepts understandable to non-technical audiences
2. **Depth**: Provide sufficient technical detail for architects and developers
3. **Engagement**: Use interactive tools to demonstrate core concepts
4. **Trust**: Establish UCP as an open, collaborative industry standard
5. **Accessibility**: Ensure content works across devices and skill levels

### Scope
- Single-page application with smooth scrolling navigation
- Responsive design (mobile-first)
- Interactive visualizations and calculators
- Technical diagrams with progressive disclosure
- No authentication or backend required (static site)
- Future-ready structure for adding ACP comparison content

---

## Target Audiences

### Primary Audiences

**1. Business Decision Makers**
- Need: Understand strategic value and business case
- Pain points: Integration costs, vendor lock-in, competitive positioning
- Content needs: High-level overview, ecosystem partners, use cases

**2. Product Managers**
- Need: Understand capabilities, use cases, and implementation scope
- Pain points: Feature planning, prioritization, roadmap alignment
- Content needs: Capability descriptions, state machines, extension model

**3. Software Architects**
- Need: Understand system design, security model, and integration patterns
- Pain points: Technical complexity, scalability, security concerns
- Content needs: Architecture diagrams, transport bindings, payment flows

**4. Developers**
- Need: Implementation details, code examples, API specifications
- Pain points: Learning curve, debugging, testing
- Content needs: Code samples, discovery mechanism, checkout lifecycle

### Secondary Audiences
- Payment providers evaluating integration
- Platform builders considering UCP adoption
- Industry analysts and press
- Open source contributors

---

## Information Architecture

### Site Structure

```
├── Hero Section
│   ├── Headline & Value Proposition
│   ├── Visual Animation (Protocol Flow)
│   └── CTA Buttons
│
├── Navigation Bar (Sticky)
│   ├── What is UCP
│   ├── How It Works
│   ├── Capabilities
│   ├── Architecture
│   ├── Payment Model
│   ├── For Developers
│   └── Ecosystem
│
├── What is UCP
│   ├── The Problem (Current State)
│   ├── The Solution (UCP Overview)
│   ├── Key Benefits
│   └── Origin Story
│
├── How It Works (Interactive)
│   ├── Discovery & Negotiation Tool
│   ├── Four Key Actors
│   ├── Request/Response Flow
│   └── State Machine Visualization
│
├── Core Capabilities
│   ├── Checkout Capability
│   ├── Identity Linking
│   ├── Order Management
│   └── Extension Model
│
├── Architecture Deep Dive
│   ├── Layered Protocol Design
│   ├── Transport Bindings (REST, MCP, A2A)
│   ├── Schema Composition
│   └── Versioning Strategy
│
├── Payment Model
│   ├── Instruments vs Handlers
│   ├── Negotiation Flow
│   ├── Tokenization Patterns
│   └── AP2 Integration
│
├── For Developers
│   ├── Quick Start Guide
│   ├── Implementation Checklist
│   ├── Code Examples
│   └── Resources & Links
│
├── Ecosystem
│   ├── Partner Network
│   ├── Use Cases
│   ├── Integration Examples
│   └── Community & Governance
│
└── Footer
    ├── Additional Resources
    ├── GitHub Links
    └── Contact Info
```

---

## Visual Design System

### Color Palette

**Primary Colors**
- Protocol Blue: `#0066FF` (trust, technology)
- Success Green: `#00B87C` (completed states)
- Warning Amber: `#FFB020` (escalation states)
- Error Red: `#FF4458` (error states)

**Neutral Colors**
- Dark: `#0A0E27` (text, backgrounds)
- Medium Gray: `#64748B` (secondary text)
- Light Gray: `#E2E8F0` (borders, dividers)
- Off-White: `#F8FAFC` (backgrounds)

**Accent Colors**
- Agent Purple: `#8B5CF6` (platform/agent elements)
- Merchant Teal: `#14B8A6` (business/merchant elements)
- Payment Orange: `#FB923C` (payment flow elements)

### Typography

**Headings**
- Font: Inter (sans-serif, variable weight)
- H1: 48px/56px, Weight 700
- H2: 36px/44px, Weight 600
- H3: 28px/36px, Weight 600
- H4: 20px/28px, Weight 600

**Body**
- Font: Inter
- Body Large: 18px/28px, Weight 400
- Body Regular: 16px/24px, Weight 400
- Body Small: 14px/20px, Weight 400

**Code**
- Font: JetBrains Mono (monospace)
- Size: 14px/20px
- Background: `#F1F5F9`

### Spacing System
- Base unit: 8px
- Scale: 8, 16, 24, 32, 48, 64, 96, 128px

### Component Styles

**Cards**
- Background: White
- Border: 1px solid `#E2E8F0`
- Border radius: 12px
- Shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Hover: `0 4px 12px rgba(0,0,0,0.15)`

**Buttons**
- Primary: Protocol Blue background, white text
- Secondary: White background, Protocol Blue border
- Border radius: 8px
- Padding: 12px 24px
- Font weight: 600

**Code Blocks**
- Background: `#1E293B`
- Text: `#E2E8F0`
- Border radius: 8px
- Padding: 24px
- Syntax highlighting

---

## Section-by-Section Specifications

### Hero Section

**Visual Design**
- Full viewport height (100vh minimum)
- Gradient background: Dark blue to purple
- Animated network visualization (nodes and connections)

**Content**

```markdown
# The Universal Commerce Protocol

### The open standard for AI agents to transact with any merchant

One integration. Every agent. Every platform.

Co-developed by Shopify and Google with 20+ industry partners

[View Documentation] [GitHub Repository] [Try Interactive Demo]
```

**Animation Spec**
- Animated nodes representing: Platform, Business, Payment Provider, User
- Pulsing connections showing data flow
- Smooth fade-in on page load
- Parallax effect on scroll

---

### Navigation Bar

**Behavior**
- Initially transparent over hero
- Becomes opaque white with shadow after scroll
- Sticky positioning (always visible)
- Smooth scroll to anchors
- Active section highlighting

**Structure**
```
[UCP Logo] | What is UCP | How It Works | Capabilities | Architecture | Payments | Developers | Ecosystem
```

**Mobile**
- Hamburger menu
- Slide-in drawer navigation
- Full-screen overlay

---

### What is UCP Section

**The Problem** (Visual: Diagram of N×N complexity)

```markdown
## The Problem: Integration Complexity at Scale

Today's agentic commerce landscape faces a fundamental challenge:

Every AI platform needs custom integrations with every merchant. Every merchant must build bespoke connections for every agent.

**The Math**
- 10 AI platforms × 10,000 merchants = 100,000 unique integrations
- Each integration requires ongoing maintenance
- No standardization means higher costs, slower rollout
- Fragmented ecosystem prevents innovation

This N×N complexity creates barriers:
- High integration costs for merchants
- Limited merchant reach for platforms
- Inconsistent buyer experiences
- Security and compliance gaps
```

**Interactive Element: Complexity Calculator**
- Input: Number of platforms, number of merchants
- Output: Integration count without UCP vs with UCP
- Visual: Network diagram showing connections

**The Solution**

```markdown
## The Solution: Universal Commerce Protocol

UCP collapses N×N complexity into a single integration point.

**Key Innovation**
Instead of custom integrations, UCP provides:

1. **Common Language**: Standardized discovery, capabilities, and data schemas
2. **Dynamic Negotiation**: Agents and merchants find their intersection automatically
3. **Flexible Transport**: Works over REST, MCP, A2A, or embedded protocols
4. **Merchant Control**: Businesses remain merchant of record with full flexibility

**The Result**
- Integrate once, reach all UCP-compatible platforms
- Platform-agnostic: works with any AI agent or surface
- Open standard: community-driven, no vendor lock-in
- Production-ready: built from billions of real transactions
```

**Visual: Before/After Diagram**
- Before: Spaghetti connections between platforms and merchants
- After: Hub-and-spoke with UCP at the center

**Origin Story**

```markdown
## Built by the Industry, For the Industry

**Co-Developed By:**
- **Shopify**: Decades of checkout expertise for millions of merchants
- **Google**: Scale and vision for conversational commerce

**Co-Creators:**
- Etsy, Wayfair, Target, Walmart

**Endorsed By:**
- Adyen, American Express, Best Buy, Flipkart, Macy's, Mastercard, Stripe, The Home Depot, Visa, Zalando, and 10+ more

**Launch:** January 11, 2026

UCP emerged from real-world commerce challenges, built on the collective wisdom of processing billions of transactions across diverse business models, payment systems, and regulatory environments.
```

---

### How It Works Section

**Introduction**

```markdown
## How UCP Works: Discovery, Negotiation, Transaction

UCP enables seamless commerce through three core mechanisms:

1. **Discovery**: Agents find what merchants support
2. **Negotiation**: Both sides compute their capabilities intersection
3. **Transaction**: Checkout proceeds through a well-defined state machine
```

**The Four Actors** (Interactive Diagram)

```markdown
### Four Key Players

**Platform** 🤖
The consumer-facing surface (AI agent, app, search engine) acting on behalf of the user.
- Discovers merchant capabilities
- Orchestrates the commerce journey
- Presents UI or conversational interface
- Examples: Google Gemini, ChatGPT, Microsoft Copilot

**Business** 🏪
The entity selling goods or services, acting as Merchant of Record.
- Exposes commerce capabilities
- Owns pricing and business logic
- Processes payments via chosen PSP
- Controls checkout customization
- Examples: Shopify merchants, Target, Wayfair

**Payment Credential Provider** 💳
Entity that tokenizes and provides payment instruments.
- Securely handles raw payment data
- Issues tokens for transactions
- Never exposes credentials to platforms
- Examples: Google Pay, Shop Pay, Stripe

**User** 👤
The person shopping, either actively or through delegated agent tasks.
- Authorizes transactions
- Provides payment credentials
- Benefits from seamless experience
```

**Interactive Tool: Actor Flow Simulator**
- User clicks on each actor to see their responsibilities
- Animated flow showing message passing between actors
- Ability to trigger different scenarios (guest checkout, saved payment, escalation)

**Discovery & Negotiation** (Interactive)

```markdown
### How Discovery Works

Every UCP participant publishes a profile declaring their capabilities.

**Merchant Profile** (at `/.well-known/ucp`)
```json
{
  "ucp": {
    "version": "2026-01-11",
    "services": {
      "dev.ucp.shopping": {
        "version": "2026-01-11",
        "rest": {
          "base_url": "https://merchant.example.com/api",
          "openapi": "https://ucp.dev/services/shopping/rest.openapi.json"
        }
      }
    },
    "capabilities": [
      {
        "name": "dev.ucp.shopping.checkout",
        "version": "2026-01-11"
      },
      {
        "name": "dev.ucp.shopping.fulfillment",
        "version": "2026-01-11",
        "extends": "dev.ucp.shopping.checkout"
      },
      {
        "name": "dev.ucp.shopping.discounts",
        "version": "2026-01-11",
        "extends": "dev.ucp.shopping.checkout"
      }
    ],
    "payment": {
      "handlers": ["shop_pay", "google_pay", "card_tokenization"]
    }
  }
}
```

**Agent Profile**
```json
{
  "ucp": {
    "version": "2026-01-11",
    "capabilities": [
      {
        "name": "dev.ucp.shopping.checkout",
        "version": "2026-01-11"
      },
      {
        "name": "dev.ucp.shopping.fulfillment",
        "version": "2026-01-11"
      }
    ],
    "payment": {
      "handlers": ["google_pay", "apple_pay"]
    }
  }
}
```

**Negotiated Result** (Intersection)
```
✓ Checkout capability
✓ Fulfillment extension
✓ Google Pay (supported by both)
✗ Discounts (agent doesn't support)
✗ Shop Pay (agent doesn't support)
✗ Apple Pay (merchant doesn't support)
```

**Interactive Tool: Profile Negotiation Simulator**
Allows users to:
1. Toggle merchant capabilities on/off
2. Toggle agent capabilities on/off
3. See real-time intersection calculation
4. View resulting negotiated capabilities
5. Understand what happens when capabilities mismatch

**Checkout State Machine** (Visual Diagram)

```markdown
### The Checkout Lifecycle

UCP models checkout as a simple state machine with clear transitions:

**States:**

1. **incomplete** 🟡
   - Missing required information
   - Agent should resolve via API calls
   - Example: No shipping address provided

2. **requires_escalation** 🟠
   - Human input required
   - Agent provides `continue_url` for user
   - Example: Age verification, custom terms acceptance
   
3. **ready_for_complete** 🟢
   - All information collected
   - Agent can finalize programmatically
   - Payment credentials provided
   
4. **complete** ✅
   - Transaction finalized
   - Order created
   - Confirmation sent

**Key Principle: No Transaction Left Behind**
When an agent hits a capability gap, UCP routes around it with structured escalation:

```json
{
  "status": "requires_escalation",
  "messages": [
    {
      "type": "error",
      "code": "age_verification_required",
      "severity": "requires_buyer_input"
    }
  ],
  "links": [
    {
      "type": "continue",
      "url": "https://merchant.com/checkout/chk_123?token=..."
    }
  ]
}
```

The user clicks the `continue_url`, completes verification, and returns seamlessly.
```

**Interactive Tool: State Machine Stepper**
- Step-by-step walkthrough of checkout states
- Visual state diagram with transitions
- Example scenarios (happy path, escalation, error recovery)
- Code snippets for each state transition

---

### Core Capabilities Section

```markdown
## Core Capabilities

UCP launches with three foundational capabilities, each independently versioned:
```

**Capability 1: Checkout**

```markdown
### Checkout Capability

The foundation of UCP commerce: create, manage, and complete checkout sessions.

**Operations:**
- `create_checkout`: Initialize a new session
- `get_checkout`: Retrieve current state
- `update_checkout`: Modify line items, buyer info, fulfillment
- `complete_checkout`: Finalize and create order
- `cancel_checkout`: Abort the session

**Key Features:**
✓ Dynamic pricing and tax calculation
✓ Multi-currency support
✓ Line item management
✓ Buyer information collection
✓ Payment handler negotiation
✓ Structured messaging (errors, warnings, info)

**Data Model Highlights:**
```json
{
  "id": "chk_123456789",
  "status": "ready_for_complete",
  "currency": "USD",
  "buyer": {
    "email": "jane@example.com",
    "first_name": "Jane"
  },
  "line_items": [
    {
      "id": "li_1",
      "item": {
        "id": "sku_999",
        "title": "Wireless Headphones",
        "price": 9900
      },
      "quantity": 1
    }
  ],
  "totals": [
    {"type": "subtotal", "amount": 9900},
    {"type": "tax", "amount": 792},
    {"type": "total", "amount": 10692}
  ]
}
```
```

**Capability 2: Identity Linking**

```markdown
### Identity Linking Capability

Connect platform accounts with merchant accounts using OAuth 2.0.

**Why It Matters:**
- Enables personalized experiences
- Unlocks loyalty programs
- Provides subscription management
- Allows order history access

**OAuth Flow:**
1. Platform initiates authorization request
2. User authenticates with merchant
3. Merchant issues authorization code
4. Platform exchanges code for access token
5. Platform uses token for authenticated requests

**Standard Scopes:**
- `ucp:scopes:checkout_session`: Create and manage checkouts
- `ucp:scopes:order`: View and manage orders
- `ucp:scopes:profile`: Access user profile data

**Security Requirements:**
✓ Client authentication at token endpoint (RFC 6749)
✓ CSRF protection with state parameter
✓ Token revocation support (RFC 7009)
✓ Short-lived access tokens with refresh tokens
```

**Capability 3: Order Management**

```markdown
### Order Management Capability

Track post-purchase lifecycle: fulfillment, shipments, returns, refunds.

**Key Concepts:**

**Line Items**
- What was purchased and current status
- Quantity tracking (total, fulfilled, returned)

**Fulfillment Expectations**
- Buyer-facing promises (when/how items arrive)
- Can be split, merged, or adjusted post-order

**Events (Append-Only Log)**
- What actually happened: `shipped`, `delivered`, `failed_attempt`
- Immutable record of physical fulfillment

**Adjustments (Append-Only Log)**
- Post-order events: `refund`, `return`, `credit`, `dispute`
- Independent of fulfillment status

**Webhooks**
Real-time order updates pushed from business to platform:
```json
{
  "event": "order.updated",
  "order": {
    "id": "order_123",
    "fulfillment": {
      "events": [
        {
          "type": "shipped",
          "tracking_number": "1Z999AA1...",
          "carrier": "UPS"
        }
      ]
    }
  }
}
```
```

**Extension Model**

```markdown
### Extensions: Modular Augmentation

Extensions add domain-specific functionality without modifying core schemas.

**How It Works:**
Extensions use JSON Schema's `allOf` to compose with base capabilities:

```json
{
  "name": "dev.ucp.shopping.fulfillment",
  "extends": "dev.ucp.shopping.checkout",
  "schema": {
    "$defs": {
      "checkout": {
        "allOf": [
          {"$ref": "checkout.json"},
          {
            "properties": {
              "fulfillment": {
                "methods": [...],
                "expectations": [...]
              }
            }
          }
        ]
      }
    }
  }
}
```

**Benefits:**
- Core stays stable while extensions evolve
- Merchants implement only what they need
- Agents negotiate only what they support
- Independent versioning prevents breaking changes

**Launched Extensions:**
- `dev.ucp.shopping.fulfillment`: Shipping, pickup, delivery windows
- `dev.ucp.shopping.discounts`: Promo codes, automatic discounts
- `dev.ucp.shopping.ap2_mandate`: Cryptographic proof for autonomous agents
- `dev.ucp.shopping.subscriptions`: Recurring billing (coming soon)

**Custom Extensions:**
Merchants can define their own extensions for specialized needs:
- White-glove delivery options
- Custom warranty terms
- Industry-specific compliance requirements
```

**Visual: Extension Composition Diagram**
- Show how core checkout remains unchanged
- Extensions wrap around and augment
- Multiple extensions can be active simultaneously

---

### Architecture Deep Dive Section

```markdown
## Architecture: Layered & Composable

UCP follows the TCP/IP model: thoughtfully separate concerns, define clear boundaries, enable composition.
```

**Layered Design**

```markdown
### The Protocol Stack

**Layer 1: Services**
- Define broad domains (Shopping, Travel, Finance)
- Container for related capabilities
- Independent versioning
- Example: `dev.ucp.shopping`

**Layer 2: Capabilities**
- Core functional areas within a service
- Major building blocks (Checkout, Orders, Catalog)
- Well-defined schemas and operations
- Example: `dev.ucp.shopping.checkout`

**Layer 3: Extensions**
- Optional augmentations via composition
- Domain-specific schemas
- Extends parent capabilities
- Example: `dev.ucp.shopping.fulfillment` extends `checkout`

**Layer 4: Transport Bindings**
- Protocol-agnostic design
- Multiple concrete implementations
- REST, MCP, A2A, Embedded
- Example: REST binding at `/api/v1/checkout-sessions`

**Benefits of Layering:**
✓ Evolution without breaking changes
✓ Implement only what you need
✓ Clear separation of concerns
✓ Ecosystem can extend independently
```

**Transport Bindings**

```markdown
### Transport Options: Choose Your Channel

UCP is transport-agnostic, working over multiple protocols:

**1. REST / HTTP+JSON** (Primary)
- Classic API approach
- Universal compatibility
- OpenAPI specifications
- `POST /checkout-sessions`, `PUT /checkout-sessions/{id}`

**2. Model Context Protocol (MCP)**
- For LLM-based agents
- JSON-RPC 2.0 over HTTP
- Tools as native agent actions
- `create_checkout`, `update_checkout` as tool calls

**3. Agent2Agent (A2A)**
- Direct agent-to-agent communication
- Structured message passing
- No HTTP overhead
- Designed for autonomous interactions

**4. Embedded Protocol (EP)**
- Web-based UI in iframe/webview
- Bidirectional messaging
- Merchant provides custom UI
- Agent provides context & credentials

**Binding Requirements:**
All bindings must:
- Support the same capability operations
- Use identical data schemas
- Preserve security properties
- Implement idempotency correctly
```

**Schema Composition & Versioning**

```markdown
### Schema Composition: How Extensions Work

**Discovery Process:**
1. Platform fetches merchant profile from `/.well-known/ucp`
2. Compute capability intersection (what both support)
3. Fetch base schemas for active capabilities
4. Fetch extension schemas for active extensions
5. Compose schemas via `allOf` chains
6. Validate all requests/responses against composed schema

**Example: Checkout + Fulfillment + Discounts**

Base checkout schema:
```json
{
  "checkout": {
    "id": "string",
    "status": "enum",
    "line_items": [...]
  }
}
```

Fulfillment extension adds:
```json
{
  "allOf": [
    {"$ref": "checkout.json"},
    {
      "properties": {
        "fulfillment": {
          "methods": [...],
          "expectations": [...]
        }
      }
    }
  ]
}
```

Discounts extension adds:
```json
{
  "allOf": [
    {"$ref": "checkout.json"},
    {
      "properties": {
        "discounts": {
          "codes": [...],
          "automatic": [...]
        }
      }
    }
  ]
}
```

**Versioning Strategy:**
- Semantic versioning (YYYY-MM-DD format)
- Extensions version independently from core
- Breaking changes require new capability version
- Multiple versions can coexist during transitions
```

**Security Model**

```markdown
### Security: Built-In, Not Bolted-On

**Transport Security:**
- All endpoints MUST be HTTPS (TLS 1.2+)
- Certificate validation required
- No plaintext credential transmission

**Authentication:**
- OAuth 2.0 for identity linking
- Bearer tokens for authenticated requests
- Client credentials for platform authentication
- Short-lived tokens with refresh capability

**Request Integrity:**
- Idempotency keys prevent duplicate operations
- Request signatures for webhook verification
- Replay attack prevention via timestamps

**Payment Security:**
- Tokenization prevents credential exposure
- PCI compliance via handler architecture
- Platform never touches raw payment data
- Cryptographic mandates for autonomous agents (AP2)

**Data Privacy:**
- Minimal PII exposure
- Buyer controls data sharing
- Clear consent flows
- Right to revoke access
```

---

### Payment Model Section

```markdown
## Payment Architecture: Decoupled & Flexible

UCP's payment model solves the N×N problem between platforms, merchants, and payment providers.
```

**Instruments vs Handlers**

```markdown
### Understanding the Payment Model

**Key Innovation: Separation of Concerns**

**Payment Instruments** (What)
What the buyer uses to pay:
- Credit/debit cards
- Digital wallets (Google Pay, Apple Pay)
- Bank transfers
- Buy-now-pay-later
- Cryptocurrencies

**Payment Handlers** (How)
Specifications for processing instruments:
- Tokenization flows
- Credential acquisition
- Authorization processes
- Settlement mechanisms

**Why It Matters:**
This separation allows:
✓ Any platform can support any payment method
✓ Merchants choose their preferred processors
✓ New payment types can be added without protocol changes
✓ Buyers use their preferred credentials
```

**The 3-Step Payment Lifecycle**

```markdown
### Negotiation → Acquisition → Completion

**1. Negotiation** (Business → Platform)

The merchant analyzes the cart and advertises available handlers:

```json
{
  "payment": {
    "handlers": [
      {
        "handler": "google_pay",
        "config": {
          "merchant_id": "BCR2DN4TR...",
          "gateway": "stripe",
          "gateway_merchant_id": "acct_1234"
        }
      },
      {
        "handler": "shop_pay",
        "config": {
          "shop_id": "shop_123"
        }
      }
    ]
  }
}
```

**2. Acquisition** (Platform ↔ Payment Credential Provider)

The platform executes handler logic client-side:
- Tokenizes payment credentials
- Never exposes raw data to merchant
- Direct interaction with payment provider
- Returns opaque token

**3. Completion** (Platform → Business)

Platform submits token to merchant:

```json
{
  "payment": {
    "credentials": [
      {
        "handler": "google_pay",
        "instrument": "card",
        "token": "tok_1A2B3C..."
      }
    ]
  }
}
```

Merchant processes payment via backend PSP integration.
```

**Interactive Tool: Payment Flow Simulator**
- Visual representation of 3-step lifecycle
- Highlight which actor is involved at each step
- Show data flow (what crosses boundaries)
- Demonstrate that platform never sees raw credentials

**Tokenization Patterns**

```markdown
### Tokenization: Keeping Credentials Safe

**The Problem:**
Raw payment credentials (card numbers, CVVs) are highly sensitive. Exposing them to platforms creates:
- PCI compliance burden
- Security risks
- Privacy concerns

**The Solution:**
Tokenization handlers transform credentials into single-use tokens:

**Flow:**
1. Platform calls tokenizer's `/tokenize` endpoint
2. Provides source credentials + binding context
3. Receives short-lived token
4. Submits token to merchant
5. Merchant calls `/detokenize` on backend
6. Gets original credentials to process payment

**Binding:**
Tokens are bound to specific checkout sessions to prevent reuse:

```json
{
  "binding": {
    "checkout_id": "chk_123456789",
    "merchant_id": "merchant_abc"
  }
}
```

**Lifecycle Policies:**
- **Single-use**: Token invalidated after detokenization
- **Time-limited**: Token expires after TTL (e.g., 15 minutes)
- **Scope-limited**: Token only valid for specific merchant
```

**AP2 Integration**

```markdown
### Agent Payments Protocol (AP2)

For fully autonomous agent transactions, UCP integrates with AP2 via the `dev.ucp.shopping.ap2_mandate` extension.

**The Challenge:**
When an agent buys autonomously (human not present), how do we prove:
- User authorized this specific purchase?
- Agent didn't hallucinate or err?
- Clear accountability trail exists?

**AP2's Solution: Verifiable Credentials (Mandates)**

**Intent Mandate**
User creates upfront for delegated tasks:
```
"Buy concert tickets when they go on sale, max $150 each"
```

**Cart Mandate**
Cryptographically signed proof of final cart approval:
```json
{
  "cart_mandate": "eyJhbGc...",
  "items": [...],
  "total": 15000,
  "signed_by": "user_public_key"
}
```

**How UCP Uses AP2:**
1. Agent includes cart mandate in checkout request
2. Merchant verifies cryptographic signature
3. Mandate provides non-repudiable proof
4. Clear audit trail for dispute resolution

**Benefits:**
✓ Enable truly autonomous commerce
✓ Cryptographic proof of authorization
✓ Clear liability assignment
✓ Works with any payment method
```

---

### For Developers Section

```markdown
## For Developers: Get Started with UCP

Whether you're building a platform that uses UCP or a merchant implementing UCP, here's your roadmap.
```

**Quick Start Guide**

```markdown
### Implementation Paths

**For Platforms (AI Agents, Apps)**

**Step 1: Understand Discovery**
```javascript
// Fetch merchant's UCP profile
const response = await fetch('https://merchant.example/.well-known/ucp');
const profile = await response.json();

// Check supported capabilities
const hasCheckout = profile.ucp.capabilities.some(
  c => c.name === 'dev.ucp.shopping.checkout'
);
```

**Step 2: Create a Checkout Session**
```javascript
// Include your agent profile URL
const headers = {
  'Content-Type': 'application/json',
  'UCP-Agent': 'profile="https://platform.example/profiles/shopping-agent.json"'
};

const checkout = await fetch('https://merchant.example/api/checkout-sessions', {
  method: 'POST',
  headers,
  body: JSON.stringify({
    line_items: [{
      item: { id: 'sku_999' },
      quantity: 1
    }],
    buyer: {
      email: 'jane@example.com'
    }
  })
});
```

**Step 3: Handle State Machine**
```javascript
const session = await checkout.json();

switch(session.status) {
  case 'incomplete':
    // Collect missing info (address, etc)
    await updateCheckout(session.id, { fulfillment: {...} });
    break;
    
  case 'requires_escalation':
    // Show continue_url to user
    const continueLink = session.links.find(l => l.type === 'continue');
    redirectUser(continueLink.url);
    break;
    
  case 'ready_for_complete':
    // Finalize transaction
    await completeCheckout(session.id, { payment: {...} });
    break;
}
```

**For Merchants (Businesses)**

**Step 1: Publish Your Profile**
```json
// Serve at /.well-known/ucp
{
  "ucp": {
    "version": "2026-01-11",
    "services": {
      "dev.ucp.shopping": {
        "rest": {
          "base_url": "https://api.yourstore.com",
          "endpoint": "/api/v1"
        }
      }
    },
    "capabilities": [
      {"name": "dev.ucp.shopping.checkout", "version": "2026-01-11"}
    ]
  }
}
```

**Step 2: Implement Checkout Operations**
```python
@app.post("/api/v1/checkout-sessions")
async def create_checkout(request: CheckoutRequest):
    # Validate against UCP schema
    # Create internal checkout session
    # Return UCP-compliant response
    return {
        "id": checkout_id,
        "status": "incomplete",
        "ucp": {
            "version": "2026-01-11",
            "capabilities": [...]
        },
        "line_items": [...],
        "totals": [...]
    }
```

**Step 3: Handle Payment Handlers**
```python
def get_available_handlers(cart, buyer_location):
    handlers = []
    
    # Filter based on cart contents
    if not has_subscription_items(cart):
        handlers.append("buy_now_pay_later")
    
    # Filter based on geography
    if buyer_location == "US":
        handlers.extend(["google_pay", "shop_pay"])
    
    return handlers
```
```

**Implementation Checklist**

```markdown
### Platform Implementation Checklist

**Discovery & Profiles**
- [ ] Publish agent profile at stable URL
- [ ] Implement profile caching (respect cache-control)
- [ ] Validate merchant profiles against spec
- [ ] Compute capability intersection correctly

**Checkout Operations**
- [ ] Implement all checkout operations (create, get, update, complete, cancel)
- [ ] Handle idempotency keys correctly
- [ ] Process UCP error messages
- [ ] Support escalation flow (continue_url)

**Payment Handling**
- [ ] Integrate payment credential providers
- [ ] Implement handler execution (tokenization)
- [ ] Never expose raw credentials to backend
- [ ] Include risk signals in complete request

**State Management**
- [ ] Track checkout state correctly
- [ ] Handle state transitions appropriately
- [ ] Implement proper error recovery
- [ ] Support concurrent checkouts

**Security**
- [ ] Use HTTPS exclusively
- [ ] Implement OAuth 2.0 for identity linking
- [ ] Store tokens securely
- [ ] Rotate tokens regularly

### Merchant Implementation Checklist

**Profile Management**
- [ ] Serve profile at `/.well-known/ucp`
- [ ] Declare accurate capabilities
- [ ] List supported payment handlers
- [ ] Keep profile updated

**Checkout Implementation**
- [ ] Implement all required operations
- [ ] Return proper UCP schemas
- [ ] Calculate totals dynamically
- [ ] Validate input data

**Business Logic**
- [ ] Filter payment handlers by context
- [ ] Apply discounts correctly
- [ ] Calculate tax accurately
- [ ] Handle inventory checks

**Fulfillment**
- [ ] Support required fulfillment types
- [ ] Calculate shipping costs
- [ ] Provide accurate delivery estimates
- [ ] Track inventory availability

**Order Management**
- [ ] Create orders from completed checkouts
- [ ] Send webhook notifications
- [ ] Sign webhook payloads
- [ ] Implement retry logic

**Payment Processing**
- [ ] Integrate with your PSP
- [ ] Implement tokenization handlers
- [ ] Handle authorization properly
- [ ] Support refunds and adjustments
```

**Code Examples**

```markdown
### Common Implementation Patterns

**Idempotency**
```javascript
const idempotencyKey = crypto.randomUUID();

const response = await fetch(checkoutUrl, {
  method: 'POST',
  headers: {
    'Idempotency-Key': idempotencyKey
  },
  body: JSON.stringify(checkoutData)
});

// If network fails, retry with same key
if (!response.ok) {
  const retry = await fetch(checkoutUrl, {
    method: 'POST',
    headers: {
      'Idempotency-Key': idempotencyKey // Same key!
    },
    body: JSON.stringify(checkoutData)
  });
}
```

**Error Handling**
```javascript
const checkout = await response.json();

if (checkout.messages) {
  checkout.messages.forEach(msg => {
    switch(msg.severity) {
      case 'requires_buyer_input':
        // Show user-friendly prompt
        promptUser(msg.content);
        break;
        
      case 'recoverable':
        // Try automatic fix
        attemptRecovery(msg.code, msg.path);
        break;
        
      case 'terminal':
        // Transaction cannot proceed
        showError(msg.content);
        break;
    }
  });
}
```

**Extension Detection**
```javascript
function supportsExtension(profile, extensionName) {
  return profile.ucp.capabilities.some(
    cap => cap.name === extensionName
  );
}

if (supportsExtension(merchantProfile, 'dev.ucp.shopping.fulfillment')) {
  // Include fulfillment data
  checkoutRequest.fulfillment = {
    methods: [...]
  };
}
```

**Webhook Verification**
```python
import jwt
from cryptography.hazmat.primitives import serialization

def verify_webhook(request):
    # Extract signature from header
    signature = request.headers.get('Request-Signature')
    
    # Get merchant's public key from their profile
    merchant_profile = fetch_profile(merchant_url)
    public_key = get_verification_key(merchant_profile, kid)
    
    # Verify JWT signature
    try:
        payload = jwt.decode(
            signature,
            public_key,
            algorithms=['ES256', 'ES384', 'ES512']
        )
        return True
    except jwt.InvalidSignatureError:
        return False
```
```

**Resources & Links**

```markdown
### Official Resources

**Specifications**
- [UCP Official Site](https://ucp.dev)
- [Technical Specification](https://ucp.dev/specification/overview/)
- [Schema Reference](https://ucp.dev/specification/reference/)
- [API Documentation](https://ucp.dev/documentation/core-concepts/)

**GitHub Repositories**
- [UCP Spec](https://github.com/ucp-protocol/ucp)
- [Python SDK](https://github.com/ucp-protocol/python-sdk)
- [Node.js SDK](https://github.com/ucp-protocol/node-sdk)
- [Example Implementations](https://github.com/ucp-protocol/examples)

**Integration Guides**
- [Shopify Integration](https://shopify.dev/docs/api/ucp)
- [Google Integration](https://developers.google.com/shopping/ucp)
- [Platform Builder Guide](https://ucp.dev/guides/platforms/)
- [Merchant Implementation Guide](https://ucp.dev/guides/merchants/)

**Related Protocols**
- [Agent Payments Protocol (AP2)](https://ap2-protocol.org)
- [Agent2Agent (A2A)](https://a2a.dev)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.org)

**Community**
- [Discord](https://discord.gg/ucp)
- [GitHub Discussions](https://github.com/ucp-protocol/ucp/discussions)
- [Stack Overflow Tag](https://stackoverflow.com/questions/tagged/ucp)
```

---

### Ecosystem Section

```markdown
## The UCP Ecosystem

UCP's strength comes from broad industry collaboration and adoption.
```

**Partner Network**

```markdown
### Industry Partners

**Co-Developers**
Leading companies that co-created UCP:

🔷 **Shopify**
Years of checkout expertise, millions of merchants
[Learn more →](https://shopify.com)

🔷 **Google**
Scale and vision for conversational commerce
[Learn more →](https://google.com)

🔷 **Etsy**
Marketplace experience and creator focus
[Learn more →](https://etsy.com)

🔷 **Wayfair**
Complex product catalog and fulfillment
[Learn more →](https://wayfair.com)

🔷 **Target**
Enterprise retail operations at scale
[Learn more →](https://target.com)

🔷 **Walmart**
Global supply chain and omnichannel expertise
[Learn more →](https://walmart.com)

**Endorsing Partners**
Industry leaders supporting the standard:

**Payment Networks & Processors**
- Adyen
- American Express
- Mastercard
- Stripe
- Visa

**Retailers**
- Best Buy
- Flipkart
- Macy's Inc.
- The Home Depot
- Zalando

**And 15+ more partners**

### Why Partners Support UCP

**Reduced Integration Complexity**
One integration instead of N×N custom builds

**Accelerated Time to Market**
Standard protocols mean faster deployment

**Open Innovation**
Community-driven evolution prevents vendor lock-in

**Merchant Sovereignty**
Businesses maintain control and ownership
```

**Use Cases**

```markdown
### Real-World Applications

**Conversational Commerce**

**Google AI Mode & Gemini**
"Find me running shoes under $100"
→ Agent discovers inventory across merchants
→ Compares options conversationally
→ Completes checkout without leaving chat

**Microsoft Copilot**
"Order my usual grocery list"
→ Accesses linked account
→ Applies loyalty rewards automatically
→ Schedules preferred delivery window

**ChatGPT Shopping**
"Buy a gift for my daughter's birthday, $50 budget"
→ Asks clarifying questions
→ Suggests personalized options
→ Handles complete transaction

**Enterprise Procurement**

**Autonomous License Management**
Agent monitors software usage
→ Automatically scales licenses up/down
→ Negotiates pricing tiers
→ Processes transactions without human approval

**Supply Chain Coordination**
"Order replacement parts when inventory drops below threshold"
→ Agent monitors stock levels
→ Compares supplier pricing
→ Places orders at optimal timing

**Subscription Management**

**Dynamic Billing**
Agent adjusts subscription tiers based on usage
→ Upgrades during busy seasons
→ Downgrades during slow periods
→ Optimizes cost automatically

**Specialized Commerce**

**Travel Booking**
"Book me a trip to Paris, first week of June, budget $2000"
→ Coordinates flights + hotel
→ Finds best combination
→ Books complete itinerary

**Event Tickets**
"Buy concert tickets the moment they go on sale, max $200 each"
→ Intent mandate pre-authorization
→ Agent executes at sale time
→ Autonomous purchase when available

**B2B Marketplaces**
Custom terms, bulk pricing, recurring orders
→ Complex business logic supported
→ Custom extensions for industry needs
→ Secure, auditable transactions
```

**Integration Examples**

```markdown
### Platform Integrations

**Google (Launched)**
- AI Mode in Google Search
- Gemini app checkout
- Google Pay as credential provider
- Direct Offers for exclusive deals

**Microsoft (Launched)**
- Copilot Checkout
- Embedded checkout experience
- Microsoft 365 integration

**Shopify (Launched)**
- Agentic Storefronts
- Managed from Shopify Admin
- Checkout Kit for embedded experiences
- Millions of merchants enabled

**OpenAI (Integration Available)**
- ChatGPT shopping plugin
- Conversational checkout
- GPT-4 powered recommendations

**Coming Soon**
- Additional platform integrations
- Regional payment providers
- Industry-specific extensions
- Vertical market adaptations
```

**Community & Governance**

```markdown
### Open Governance Model

**Community-Driven Development**

UCP is an open standard, governed by the community:

**Contribution Process**
1. GitHub Discussions for proposals
2. RFC process for significant changes
3. Community review and feedback
4. Consensus-based decision making
5. Version releases via semantic versioning

**Working Groups**
- **Core Spec Working Group**: Maintains base protocol
- **Payment Handlers WG**: Defines handler specifications
- **Extensions WG**: Coordinates extension development
- **Security WG**: Reviews security implications
- **Implementation WG**: Shares integration learnings

**How to Contribute**
- 📖 Read the contributing guide
- 💬 Join GitHub Discussions
- 🐛 Report issues and bugs
- 🔧 Submit pull requests
- 📣 Share implementation experiences

**Governance Principles**
✓ Open and transparent process
✓ Vendor-neutral decisions
✓ Backward compatibility priority
✓ Security-first mindset
✓ Practical implementation focus

**Standards Bodies**
UCP is being submitted to formal standards organizations:
- Internet Engineering Task Force (IETF)
- W3C Web Payments Working Group
- Open standards bodies

**Roadmap**
- ✅ Q1 2026: Initial release (Checkout, Identity, Orders)
- 🚧 Q2 2026: Catalog capability, additional payment handlers
- 📋 Q3 2026: Advanced fulfillment, subscriptions extension
- 📋 Q4 2026: Multi-merchant transactions, bundling
- 📋 2027: Vertical expansions (travel, finance, services)
```

---

## Interactive Tools Specifications

### Tool 1: Complexity Calculator

**Purpose**: Demonstrate the N×N integration problem and UCP's solution.

**Inputs:**
- Number of platforms (slider: 1-50, default 10)
- Number of merchants (slider: 1-10,000, default 1,000)

**Calculations:**
```javascript
const withoutUCP = platforms * merchants;
const withUCP = platforms + merchants;
const savings = withoutUCP - withUCP;
const savingsPercent = (savings / withoutUCP * 100).toFixed(1);
```

**Output Display:**
```
Without UCP: [10,000] integrations
With UCP: [1,010] integrations
Reduction: [8,990] integrations (89.9% fewer)
```

**Visual:**
- Network diagram showing connections
- Without UCP: dense mesh of lines
- With UCP: hub-and-spoke model
- Animate transition on input change

**Implementation Notes:**
- Use D3.js or similar for network visualization
- Smooth transitions between states
- Responsive layout
- Mobile-friendly slider controls

---

### Tool 2: Profile Negotiation Simulator

**Purpose**: Interactive demonstration of capability negotiation.

**Interface Layout:**
```
[ Merchant Profile ]    [ Agent Profile ]    [ Negotiated Result ]
```

**Merchant Profile Controls:**
- Checkbox: Checkout capability
- Checkbox: Fulfillment extension
- Checkbox: Discounts extension
- Checkbox: Subscriptions extension
- Checkbox: Identity linking
- Multiselect: Payment handlers (Google Pay, Shop Pay, Stripe, PayPal, Apple Pay)

**Agent Profile Controls:**
- Checkbox: Checkout capability
- Checkbox: Fulfillment extension
- Checkbox: Discounts extension
- Multiselect: Payment handlers (Google Pay, Apple Pay, PayPal)

**Negotiated Result (Read-only):**
- ✅ Supported capabilities (green)
- ❌ Unsupported capabilities (gray)
- Payment handler intersection
- Visual indicator of negotiation success

**Code Display:**
- Show merchant profile JSON
- Show agent profile JSON
- Show negotiated result JSON
- Syntax highlighting
- Copy-to-clipboard buttons

**Implementation Notes:**
- Real-time updates on checkbox changes
- Clear visual feedback
- Explain why certain features aren't available
- Tooltips for each capability

---

### Tool 3: Checkout State Machine Stepper

**Purpose**: Interactive walkthrough of checkout lifecycle.

**Features:**

**State Diagram**
- Visual representation of all states
- Current state highlighted
- Transition arrows
- Click to jump between states

**State Details Panel**
For each state, show:
- State name and description
- When this state occurs
- What agent should do
- Example API calls
- JSON request/response
- Transition conditions

**Scenario Selector**
Predefined scenarios:
1. **Happy Path**: All info complete, direct to purchase
2. **Guest Checkout**: No account, provide all details
3. **Escalation**: Age verification required
4. **Error Recovery**: Invalid payment method
5. **Saved Account**: Linked identity, fast checkout

**Step Navigation**
- Previous/Next buttons
- Progress indicator
- "Reset" button
- "Start Over" with different scenario

**Code Examples**
For each step:
```javascript
// Current state
const checkout = {
  "id": "chk_123",
  "status": "incomplete",
  "messages": [...]
};

// What to do
if (checkout.status === 'incomplete') {
  // Collect missing information
  const updated = await updateCheckout(checkout.id, {
    fulfillment: { ... }
  });
}
```

**Implementation Notes:**
- Animated transitions
- Highlight JSON differences between states
- Expandable code sections
- Responsive on mobile

---

### Tool 4: Payment Flow Visualizer

**Purpose**: Demonstrate the 3-step payment lifecycle.

**Visualization:**

**Step 1: Negotiation**
- Merchant advertises handlers
- Visual: Merchant → Platform
- Show JSON payload
- Highlight available handlers

**Step 2: Acquisition**
- Platform ↔ Payment Provider
- Visual: Platform ↔ Payment Provider (no merchant)
- Show tokenization request
- Emphasize credentials never touch merchant

**Step 3: Completion**
- Platform → Merchant
- Visual: Platform → Merchant
- Show opaque token submission
- Merchant processes via backend

**Interactive Elements:**
- Click each step to expand
- Show request/response payloads
- Highlight which actor is active
- Data flow animation
- Emphasize security boundaries

**Payment Method Selector:**
- Google Pay
- Shop Pay
- Card tokenization
- Buy now, pay later

Each method shows slightly different flows.

**Security Callouts:**
- "Platform never sees card numbers"
- "Tokens are single-use and time-limited"
- "Backend integration is merchant-controlled"

---

### Tool 5: Extension Composer

**Purpose**: Show how extensions augment capabilities.

**Interface:**

**Base Capability:**
```json
{
  "checkout": {
    "id": "chk_123",
    "line_items": [...],
    "totals": [...]
  }
}
```

**Add Extensions:**
- Toggle: Fulfillment
- Toggle: Discounts
- Toggle: AP2 Mandates
- Toggle: Subscriptions

**Composed Result:**
Shows final schema with all extensions applied.

**Visual Schema Tree:**
- Expandable JSON tree
- Color-coded by source (base vs extensions)
- Highlight composition points
- Show `allOf` composition

**Benefits Panel:**
- "Extensions don't modify core"
- "Independent versioning"
- "Merchants implement only what they need"
- "Agents negotiate capabilities"

---

## Technical Architecture

### Frontend Stack

**Framework:** React 18+ with TypeScript
- Component-based architecture
- Hooks for state management
- React Router for section navigation
- Strict mode enabled

**Styling:** Tailwind CSS 3+
- Utility-first approach
- Custom design system tokens
- Responsive breakpoints
- Dark mode support (optional)

**Animation:** Framer Motion
- Smooth scroll animations
- Interactive transitions
- Gesture support
- Performance optimized

**Visualization:** D3.js v7
- Network diagrams
- State machine visualizations
- Flow charts
- Data-driven graphics

**Code Highlighting:** Prism.js
- JSON syntax highlighting
- Multiple language support
- Copy-to-clipboard
- Line numbers

**Icons:** Lucide React
- Consistent icon set
- Tree-shakeable
- Accessible

### Build & Deployment

**Build Tool:** Vite
- Fast HMR during development
- Optimized production builds
- Code splitting
- Asset optimization

**Hosting:** Vercel (or similar static host)
- CDN distribution
- Automatic HTTPS
- Preview deployments
- Analytics

**CI/CD:** GitHub Actions
- Automated builds
- Lint and type checking
- Lighthouse performance tests
- Deploy on merge to main

### Performance Requirements

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Bundle Size:**
- Initial bundle: < 200KB (gzipped)
- Code splitting for interactive tools
- Lazy loading for below-fold content

**Accessibility:**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader compatible
- Focus management
- Color contrast ratios
- Semantic HTML

### Browser Support

**Modern Browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Mobile:**
- iOS Safari 14+
- Chrome Android 90+

**Progressive Enhancement:**
- Core content accessible without JavaScript
- Interactive tools require JS
- Graceful degradation

---

## Content Guidelines

### Writing Style

**Tone:**
- Professional but approachable
- Technical but not jargon-heavy
- Confident without being arrogant
- Inclusive and welcoming

**Voice:**
- Active voice preferred
- Second person for instructions ("you can integrate...")
- First person plural for collective benefit ("we built...")
- Avoid passive constructions

**Clarity:**
- Short sentences (< 25 words ideal)
- One idea per paragraph
- Use concrete examples
- Define technical terms on first use

**Structure:**
- Lead with key point
- Support with details
- End with takeaway
- Use progressive disclosure

### Terminology Standards

**Consistent Terms:**
- "Platform" not "Agent" (when referring to AI assistants)
- "Business" not "Merchant" (except in technical contexts)
- "Buyer" not "User" or "Customer"
- "Payment Credential Provider" not "Payment Provider"
- "Extension" not "Plugin" or "Module"
- "Capability" not "Feature"

**Abbreviations:**
- UCP (always capitalized)
- AP2 (Agent Payments Protocol)
- A2A (Agent2Agent)
- MCP (Model Context Protocol)
- PSP (Payment Service Provider)

**Capitalization:**
- Protocol name: Universal Commerce Protocol (title case)
- Capability names: Checkout Capability (title case)
- Extensions: lowercase with reverse-DNS (dev.ucp.shopping.fulfillment)

---

# Claude Code Prompt

## Instructions for Claude Code

You are building a single-page application (SPA) that educates diverse audiences about the Universal Commerce Protocol (UCP). This specification document contains all the information you need.

## Your Task

Create a production-ready, fully functional SPA that:

1. **Implements the complete design** specified in this document
2. **Includes all interactive tools** with full functionality
3. **Uses the specified tech stack**: React + TypeScript + Tailwind + Framer Motion + D3.js
4. **Follows the visual design system** exactly (colors, typography, spacing)
5. **Is responsive** and works perfectly on mobile, tablet, and desktop
6. **Is accessible** (WCAG 2.1 AA compliant)
7. **Performs well** (optimized bundle, lazy loading, code splitting)

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── sections/
│   │   │   ├── WhatIsUCP.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Capabilities.tsx
│   │   │   ├── Architecture.tsx
│   │   │   ├── PaymentModel.tsx
│   │   │   ├── ForDevelopers.tsx
│   │   │   └── Ecosystem.tsx
│   │   ├── interactive/
│   │   │   ├── ComplexityCalculator.tsx
│   │   │   ├── ProfileNegotiator.tsx
│   │   │   ├── StateMachineStepper.tsx
│   │   │   ├── PaymentFlowVisualizer.tsx
│   │   │   └── ExtensionComposer.tsx
│   │   └── shared/
│   │       ├── CodeBlock.tsx
│   │       ├── Card.tsx
│   │       ├── Button.tsx
│   │       └── Section.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Implementation Priorities

### Priority 1: Core Structure
1. Set up Vite + React + TypeScript project
2. Configure Tailwind with custom design tokens
3. Build navigation and smooth scroll
4. Implement all text sections with proper styling

### Priority 2: Visual Design
1. Apply exact color palette and typography
2. Implement spacing system consistently
3. Build reusable Card and Button components
4. Add subtle animations on scroll

### Priority 3: Interactive Tools
1. Complexity Calculator (simplest)
2. State Machine Stepper
3. Profile Negotiator
4. Payment Flow Visualizer
5. Extension Composer

### Priority 4: Polish
1. Add loading states
2. Implement error boundaries
3. Optimize performance
4. Test accessibility
5. Mobile optimization

## Key Technical Decisions

### Smooth Scrolling
Use Intersection Observer for section highlighting in navigation. Implement scroll-snap for better mobile UX.

### Code Blocks
Use Prism.js with JSON highlighting. Add copy button to all code blocks. Line numbers for longer examples.

### Interactive Tools
Build as separate components with their own state. Use D3 for visualizations. Ensure all interactions are keyboard accessible.

### Data
All content is static (no API calls). JSON examples are hardcoded but realistic. Use constants file for reusable data.

### Animations
Use Framer Motion for page transitions and interactive elements. Keep animations subtle and purposeful. Respect `prefers-reduced-motion`.

## Design Specifications

**Colors** (exact hex values in specification above)
**Typography** (Inter for text, JetBrains Mono for code)
**Spacing** (8px base unit system)
**Components** (Cards, Buttons, Code blocks as specified)

## Interactive Tool Requirements

Each tool must:
- Be keyboard accessible
- Have clear labels and instructions
- Show real-time updates
- Include code examples
- Be responsive on mobile
- Have loading/error states
- Persist state during session (optional)

## Content Notes

All section content is provided verbatim in this specification. Copy it exactly, maintaining the markdown formatting. Convert markdown to React/HTML appropriately.

## Testing Checklist

Before considering the implementation complete:

- [ ] All sections render correctly
- [ ] Navigation scroll is smooth
- [ ] All interactive tools work
- [ ] Mobile responsive (test at 375px, 768px, 1280px)
- [ ] Keyboard navigation works throughout
- [ ] Code blocks have copy functionality
- [ ] Links open in new tabs where appropriate
- [ ] No console errors
- [ ] Performance is acceptable (Lighthouse > 90)

## Build Commands

Ensure these work:
- `npm install` - Install dependencies
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build

## Additional Notes

- Use semantic HTML (`<section>`, `<article>`, `<nav>`, etc.)
- Include meta tags for SEO
- Add Open Graph tags for social sharing
- Ensure all images have alt text (even if decorative)
- Comments in code should explain "why" not "what"
- Keep components focused and single-purpose
- Use TypeScript strictly (no `any` types)

## Success Criteria

The site is successful if:
1. A non-technical PM can understand UCP's value
2. A developer can understand how to implement it
3. All interactive tools work flawlessly
4. The design feels modern and professional
5. Performance is excellent
6. It works perfectly on mobile

Good luck! Build something amazing.
