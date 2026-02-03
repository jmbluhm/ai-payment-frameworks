# Agentic Commerce Protocol (ACP) Section
## Specification for UCP Educational Site Extension

---

## Executive Summary

This document specifies a new major section to be added to the existing UCP educational website. The section will provide comprehensive coverage of the Agentic Commerce Protocol (ACP), co-developed by Stripe and OpenAI, and include a detailed comparison framework showing how UCP and ACP differ, overlap, and complement each other in the agentic commerce ecosystem.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Section Architecture](#section-architecture)
3. [Content Specifications](#content-specifications)
4. [Comparison Framework](#comparison-framework)
5. [Interactive Tools](#interactive-tools)
6. [Visual Design](#visual-design)
7. [Integration Points](#integration-points)

---

## Project Overview

### Purpose
Extend the existing UCP site with a comprehensive ACP section that educates users about this complementary protocol while providing clear, objective comparisons to help them understand which protocol(s) to adopt.

### Key Goals
1. **Comprehensive Coverage**: Explain ACP with the same depth as UCP
2. **Fair Comparison**: Objective side-by-side analysis without bias
3. **Practical Guidance**: Help readers understand which protocol(s) fit their needs
4. **Unified Experience**: Seamless integration with existing UCP content
5. **Future-Ready**: Structure that supports adding more protocols later

### Scope
- New major section: "Agentic Commerce Protocol (ACP)"
- New comparison section: "UCP vs ACP: Understanding the Differences"
- Updated navigation to include ACP
- Shared interactive comparison tools
- Linked cross-references between protocols

---

## Section Architecture

### Navigation Updates

```
[Existing UCP Navigation...]
│
├── Agentic Commerce Protocol (ACP)  [NEW]
│   ├── What is ACP
│   ├── How ACP Works
│   ├── Core Components
│   ├── Implementation Guide
│   └── ACP Ecosystem
│
└── Protocol Comparison  [NEW]
    ├── Overview
    ├── Key Differences
    ├── Use Case Mapping
    └── Decision Framework
```

### New Sections Structure

```
ACP Section
├── Hero Section
│   ├── Value Proposition
│   ├── Origin Story (OpenAI + Stripe)
│   └── Quick Stats
│
├── What is ACP
│   ├── The Problem Statement
│   ├── ACP's Solution
│   ├── Design Principles
│   └── Key Benefits
│
├── How ACP Works
│   ├── Four-Step Checkout Flow
│   ├── Key Actors
│   ├── Shared Payment Tokens
│   └── Request/Response Flow
│
├── Core Components
│   ├── Agentic Checkout Spec
│   ├── Product Feed Spec
│   ├── Delegated Payment Spec
│   └── Extension Model
│
├── Implementation Guide
│   ├── For Merchants
│   ├── For AI Agents
│   ├── For Payment Providers
│   └── Code Examples
│
└── ACP Ecosystem
    ├── Partner Network
    ├── ChatGPT Instant Checkout
    ├── Integration Examples
    └── Community & Governance

Protocol Comparison Section
├── Quick Decision Matrix
├── Side-by-Side Feature Comparison
├── Architecture Comparison
├── Use Case Scenarios
└── Adoption Guidance
```

---

## Content Specifications

### ACP Hero Section

```markdown
# Agentic Commerce Protocol (ACP)

### The open standard for AI-powered commerce experiences

Turn conversational discovery into seamless transactions.

Co-developed by OpenAI and Stripe. Powers Instant Checkout in ChatGPT.

[View Specification] [GitHub Repository] [ChatGPT Integration]

**Key Metrics:**
- 🚀 Launched: September 2025
- 💬 First Implementation: ChatGPT Instant Checkout
- 🏪 Partners: Shopify, Etsy, 1M+ merchants
- 🌍 Open Source: Apache 2.0 License
```

**Visual:**
- Animated ChatGPT conversation showing product discovery → checkout
- Smooth transition to completed order
- Highlighting key moments (SPT creation, merchant integration)

---

### What is ACP Section

**The Problem**

```markdown
## The Challenge: Commerce in Conversational AI

As AI agents become shopping assistants, traditional e-commerce assumptions break down:

**Traditional Commerce:**
- User visits merchant website
- Merchant controls entire UI/UX
- Direct payment credential collection
- Merchant handles all data

**Agentic Commerce:**
- User stays in AI interface
- AI agent orchestrates experience
- Payment credentials never exposed to merchants
- Trust must be explicitly programmed

**The Core Challenges:**

1. **Credential Security**: How do you enable payments without exposing card numbers to AI platforms?
2. **Merchant Control**: How do merchants maintain their brand and business logic?
3. **Standardization**: How do you avoid N×N integrations between AI agents and merchants?
4. **Trust Architecture**: How do you prove authorization when an AI makes purchases?
5. **Fraud Prevention**: How do you protect against unauthorized agent actions?
```

**Interactive Element: Traditional vs Agentic Flow Diagram**
- Side-by-side comparison
- Highlight what moves where
- Show security boundaries

**The Solution**

```markdown
## ACP's Approach: A Merchant-Centric Open Standard

ACP solves agentic commerce challenges through three key innovations:

### 1. Shared Payment Tokens (SPT)
Programmable, time-limited, single-use tokens that:
- Never expose underlying payment credentials
- Scope to specific merchant and amount
- Include fraud detection signals
- Work with existing payment infrastructure

### 2. Standardized Commerce APIs
Four core endpoints that let any AI agent:
- Create checkout sessions
- Update buyer/fulfillment information
- Complete transactions securely
- Cancel when needed

### 3. Merchant-Centric Design
Merchants retain full control over:
- Product pricing and availability
- Business logic and policies
- Customer relationships
- Fulfillment processes
- Payment processing (bring your own PSP)

**Key Principle:** 
Merchants remain the merchant of record. AI agents facilitate, but don't intermediate.
```

**Design Principles**

```markdown
## ACP's Core Design Philosophy

**Open & Interoperable**
- Apache 2.0 licensed
- Works with any AI agent
- Compatible with any payment processor
- Community-driven governance

**Business-Friendly**
- Minimal integration lift (works with existing systems)
- Merchants control brand and experience
- No forced intermediation
- Direct customer relationships preserved

**Secure by Design**
- Tokenized payments (no credential exposure)
- Fraud signals included
- PCI compliance simplified
- Time and amount constraints

**Flexible & Extensible**
- Supports physical and digital goods
- Handles subscriptions
- Accommodates complex fulfillment
- Custom merchant capabilities
```

---

### How ACP Works Section

**The Four-Step Checkout Flow**

```markdown
## ACP Checkout Lifecycle

### Step 1: Discovery
**User → AI Agent**

User: "I need a wireless keyboard under $50"

The AI agent:
- Searches merchant product catalogs
- Filters by price and requirements
- Presents relevant options
- User selects preferred product

### Step 2: Create Checkout
**AI Agent → Merchant**

```http
POST /checkouts
{
  "items": [
    {"sku": "kbd-wireless-001", "quantity": 1}
  ],
  "buyer": {
    "email": "jane@example.com",
    "first_name": "Jane"
  }
}
```

Merchant responds with:
- Available payment methods
- Fulfillment options
- Calculated totals (tax, shipping)
- Current checkout state

### Step 3: Update Checkout
**Iterative: AI Agent ↔ Merchant**

Agent collects and submits:
- Shipping address
- Selected fulfillment option
- Any discount codes

```http
PUT /checkouts/{id}
{
  "fulfillment_address": {
    "name": "Jane Doe",
    "line_one": "123 Main St",
    "city": "San Francisco",
    "state": "CA",
    "postal_code": "94105"
  },
  "fulfillment_option_id": "express_shipping"
}
```

Merchant recalculates and returns updated totals.

### Step 4: Complete Checkout
**AI Agent → Payment Provider → Merchant**

Agent creates Shared Payment Token:
```javascript
// Agent creates SPT via Stripe
const spt = await stripe.sharedPaymentTokens.create({
  payment_method: 'pm_card_visa',
  usage_limits: {
    currency: 'usd',
    max_amount: 5499, // $54.99
    expires_at: Date.now() + (15 * 60 * 1000) // 15 minutes
  },
  seller_details: {
    network_id: 'merchant_abc',
    external_id: 'checkout_xyz'
  }
});
```

Agent completes checkout with token:
```http
POST /checkouts/{id}/complete
{
  "payment_data": {
    "token": "spt_1A2B3C...",
    "provider": "stripe",
    "billing_address": {...}
  }
}
```

Merchant:
1. Receives SPT
2. Creates PaymentIntent with Stripe
3. Processes payment
4. Fulfills order
5. Returns order details

**Result:** User purchased from merchant through AI interface, merchant processed payment with their existing Stripe integration, all credentials stayed secure.
```

**Interactive Tool: ACP Flow Stepper**
- Step through each phase
- See API requests/responses
- Highlight security boundaries
- Show data flow between actors

**Key Actors**

```markdown
## The ACP Ecosystem Players

**Buyer (User)** 👤
- Uses AI agent to discover and purchase
- Saves payment methods in AI platform
- Maintains purchase history across agents
- Controls spending limits and permissions

**AI Agent (Platform)** 🤖
- ChatGPT, Claude, Gemini, etc.
- Discovers products via merchant feeds
- Orchestrates checkout experience
- Creates Shared Payment Tokens
- Never handles raw payment credentials
- Examples: ChatGPT, Claude (future), Perplexity

**Merchant (Business)** 🏪
- Shopify store, Etsy shop, direct brand
- Provides product catalog
- Implements ACP endpoints
- Processes payments via their PSP
- Remains merchant of record
- Controls fulfillment and customer service

**Payment Service Provider (PSP)** 💳
- Stripe (primary), others coming
- Issues Shared Payment Tokens
- Validates token constraints
- Processes actual payment
- Provides fraud detection
- Ensures PCI compliance
```

**Shared Payment Tokens (SPT) Deep Dive**

```markdown
## Shared Payment Tokens: The Security Innovation

### What is an SPT?

A Shared Payment Token is a temporary, constrained payment credential that allows secure transactions without exposing underlying payment methods.

**Key Properties:**

**Scoped**
- Tied to specific merchant
- Limited to exact amount
- Single-use only

**Time-Constrained**
- Expires in minutes (typically 15)
- Prevents replay attacks
- Automatic cleanup

**Fraud-Aware**
- Includes Stripe Radar signals
- Device fingerprinting data
- Transaction risk assessment
- Merchant can evaluate before charging

**Interoperable**
- Works with network tokenization (Visa VTS, Mastercard MDES)
- Compatible with existing PSP infrastructure
- Can be forwarded to other processors

### SPT Lifecycle

**1. Creation** (Agent)
```javascript
const spt = await stripe.sharedPaymentTokens.create({
  payment_method: 'pm_card_visa', // User's saved card
  usage_limits: {
    currency: 'usd',
    max_amount: 5000,
    expires_at: Math.floor(Date.now() / 1000) + 900 // 15 min
  },
  seller_details: {
    network_id: 'merchant_123',
    external_id: 'checkout_abc'
  }
});
// Returns: spt_1A2B3C4D5E6F...
```

**2. Transmission** (Agent → Merchant)
```http
POST /checkouts/{id}/complete
{
  "payment_data": {
    "token": "spt_1A2B3C4D5E6F...",
    "provider": "stripe"
  }
}
```

**3. Validation** (Merchant)
```javascript
// Merchant retrieves SPT details
const tokenDetails = await stripe.sharedPaymentTokens.retrieve(
  'spt_1A2B3C4D5E6F...'
);

// Check constraints
if (tokenDetails.usage_limits.max_amount < orderTotal) {
  throw new Error('Token amount insufficient');
}

if (tokenDetails.usage_limits.expires_at < Date.now()) {
  throw new Error('Token expired');
}

// Evaluate fraud signals
const riskLevel = tokenDetails.risk_signals.likelihood;
if (riskLevel === 'high') {
  // Apply additional verification
}
```

**4. Processing** (Merchant → Stripe)
```javascript
// Create PaymentIntent with SPT
const payment = await stripe.paymentIntents.create({
  amount: 5000,
  currency: 'usd',
  shared_payment_granted_token: 'spt_1A2B3C4D5E6F...',
  confirm: true,
  metadata: {
    order_id: 'ord_xyz',
    agent: 'chatgpt'
  }
});

// Stripe validates SPT constraints and processes payment
```

**5. Invalidation** (Automatic)
- After successful use
- Upon expiration
- If manually revoked

### Security Benefits

**For Merchants:**
✓ Never handle raw card numbers
✓ Reduced PCI compliance scope
✓ Fraud signals included
✓ Can reject high-risk transactions

**For Users:**
✓ Credentials never exposed to merchant
✓ Limited scope prevents abuse
✓ Easy to revoke access
✓ Familiar checkout experience

**For AI Agents:**
✓ Secure credential handling
✓ Liability protection
✓ Simple integration
✓ Standards-based approach
```

---

### Core Components Section

**Agentic Checkout Specification**

```markdown
## Agentic Checkout Spec

The checkout specification defines four REST endpoints that enable AI agents to manage the complete purchase flow.

### Endpoint 1: Create Checkout Session

**POST /checkouts**

Creates a new checkout session with initial cart and buyer information.

**Request:**
```json
{
  "items": [
    {
      "sku": "product-123",
      "quantity": 2
    }
  ],
  "buyer": {
    "email": "jane@example.com",
    "first_name": "Jane",
    "last_name": "Doe"
  },
  "currency": "usd"
}
```

**Response:**
```json
{
  "id": "checkout_abc123",
  "status": "pending_fulfillment",
  "buyer": {
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane@example.com"
  },
  "payment_provider": {
    "provider": "stripe",
    "supported_payment_methods": ["card"]
  },
  "line_items": [
    {
      "id": "item_123",
      "item": {
        "id": "product-123",
        "title": "Wireless Keyboard",
        "description": "Bluetooth mechanical keyboard",
        "image_url": "https://...",
        "quantity": 2
      },
      "base_amount": 4900,
      "discount": 0,
      "subtotal": 9800,
      "tax": 0,
      "total": 9800
    }
  ],
  "fulfillment_options": [
    {
      "type": "shipping",
      "id": "standard",
      "title": "Standard Shipping",
      "subtitle": "5-7 business days",
      "carrier": "USPS",
      "subtotal": 500,
      "tax": 0,
      "total": 500
    }
  ],
  "subtotal": 9800,
  "tax": 0,
  "total": 10300,
  "currency": "usd"
}
```

### Endpoint 2: Update Checkout Session

**PUT /checkouts/{id}**

Updates checkout with fulfillment information, quantities, or other modifications.

**Request:**
```json
{
  "items": [
    {"id": "item_123", "quantity": 3}
  ],
  "fulfillment_address": {
    "name": "Jane Doe",
    "line_one": "456 Oak Ave",
    "city": "Los Angeles",
    "state": "CA",
    "country": "US",
    "postal_code": "90210"
  },
  "fulfillment_option_id": "express"
}
```

**Response:**
Returns updated checkout state with recalculated totals, tax, and shipping.

### Endpoint 3: Complete Checkout

**POST /checkouts/{id}/complete**

Finalizes the purchase with payment token and billing information.

**Request:**
```json
{
  "payment_data": {
    "token": "spt_1A2B3C4D5E6F...",
    "provider": "stripe",
    "billing_address": {
      "name": "Jane Doe",
      "line_one": "456 Oak Ave",
      "city": "Los Angeles",
      "state": "CA",
      "postal_code": "90210"
    }
  }
}
```

**Response:**
```json
{
  "id": "checkout_abc123",
  "status": "complete",
  "order": {
    "id": "ord_xyz789",
    "order_number": "ORD-2025-001",
    "status": "processing",
    "tracking": {
      "url": "https://merchant.com/track/xyz789"
    }
  },
  "total": 15300,
  "currency": "usd",
  "payment": {
    "status": "succeeded",
    "last4": "4242"
  }
}
```

### Endpoint 4: Cancel Checkout

**POST /checkouts/{id}/cancel**

Notifies merchant to release inventory and clean up checkout session.

**Request:**
```json
{
  "reason": "user_cancelled"
}
```

**Response:**
```json
{
  "id": "checkout_abc123",
  "status": "cancelled",
  "cancelled_at": "2026-02-03T12:34:56Z"
}
```

### Checkout States

**pending_fulfillment**
- Initial state
- Waiting for address/shipping selection

**ready_for_payment**
- All information collected
- Ready to accept payment token

**complete**
- Payment processed
- Order created

**cancelled**
- User or merchant cancelled
- Inventory released

### Error Handling

Merchants return structured error messages:

```json
{
  "status": "error",
  "messages": [
    {
      "type": "error",
      "code": "insufficient_inventory",
      "message": "Only 1 item remaining in stock"
    }
  ]
}
```

Common error codes:
- `insufficient_inventory`: Stock unavailable
- `invalid_address`: Address validation failed
- `payment_declined`: Payment authorization failed
- `invalid_token`: SPT validation failed
- `token_expired`: SPT no longer valid
```

**Product Feed Specification**

```markdown
## Product Feed Spec

Merchants share structured product catalogs with AI agents to enable discovery.

### Format Options

**CSV Format**
```csv
id,title,description,price,currency,availability,image_url,category
"kbd-001","Wireless Keyboard","Bluetooth mechanical","49.99","USD","in_stock","https://...","Electronics"
```

**JSON Format**
```json
{
  "products": [
    {
      "id": "kbd-001",
      "title": "Wireless Keyboard",
      "description": "Bluetooth mechanical keyboard with RGB backlight",
      "price": 4999,
      "currency": "usd",
      "availability": "in_stock",
      "images": ["https://cdn.example.com/kbd-001.jpg"],
      "category": "Electronics > Keyboards",
      "attributes": {
        "brand": "TechCo",
        "color": "Black",
        "connectivity": "Bluetooth"
      }
    }
  ]
}
```

### Required Fields

- **id**: Unique product identifier (SKU)
- **title**: Product name
- **price**: Price in smallest currency unit (cents)
- **currency**: ISO 4217 currency code
- **availability**: `in_stock`, `out_of_stock`, `preorder`

### Recommended Fields

- **description**: Detailed product information
- **images**: Array of image URLs
- **category**: Product taxonomy
- **brand**: Manufacturer/brand name
- **attributes**: Custom properties (size, color, material)
- **reviews**: Rating and review count
- **inventory_count**: Stock quantity

### Feed Hosting

Merchants host product feeds at a publicly accessible URL:

```
https://merchant.com/acp/products.json
```

Or use Stripe's Agentic Commerce Suite to manage feeds.

### Update Frequency

- **Real-time**: Webhook notifications for critical changes (out of stock)
- **Daily**: Full catalog refresh
- **Incremental**: Delta updates for changed products

### Product Discovery

AI agents:
1. Fetch merchant product feeds
2. Index products for search
3. Match user queries to relevant products
4. Present options in conversational UI
5. Link to checkout when user is ready
```

**Delegated Payment Specification**

```markdown
## Delegated Payment Spec

Defines how AI agents securely share payment credentials with merchants or PSPs.

### Core Concept

The agent acts as an intermediary, holding the buyer's payment method and issuing temporary, scoped tokens to merchants for specific transactions.

### Key Principles

**Credential Isolation**
- Agent stores buyer's payment method
- Merchant never sees raw credentials
- Token scoped to specific transaction

**Explicit Authorization**
- User authorizes each purchase
- Agent creates token only after approval
- Merchant validates token before charging

**PSP Flexibility**
- Works with Stripe (primary implementation)
- Compatible with other PSPs
- Merchants can use existing payment infrastructure

### Token Properties

**Scoping:**
```json
{
  "usage_limits": {
    "currency": "usd",
    "max_amount": 5000,
    "expires_at": 1738597200
  },
  "seller_details": {
    "network_id": "merchant_identifier",
    "external_id": "checkout_session_id"
  }
}
```

**Risk Signals:**
When using Stripe, SPTs include:
- Device fingerprint
- Fraud likelihood score
- Card testing indicators
- Geographic risk signals
- Transaction velocity metrics

Merchants can evaluate these signals before deciding to accept the payment.

### Payment Flow

```
┌────────┐     ┌─────────┐     ┌─────────┐     ┌──────────┐
│ Buyer  │────▶│  Agent  │────▶│Merchant │────▶│   PSP    │
└────────┘     └─────────┘     └─────────┘     └──────────┘
    │              │                │                │
    │ Approves     │                │                │
    │ Purchase     │                │                │
    │──────────────│                │                │
    │              │ Creates SPT    │                │
    │              │────────────────│                │
    │              │                │ Validates SPT  │
    │              │                │────────────────│
    │              │                │                │
    │              │                │  Processes     │
    │              │                │  Payment       │
    │              │                │◀───────────────│
    │              │ Order Complete │                │
    │              │◀───────────────│                │
    │ Confirmation │                │                │
    │◀─────────────│                │                │
```

### For PSPs: Building SPT Support

PSPs wishing to implement SPT-compatible tokens must:

1. **Token Generation API**: Accept parameters for amount, expiry, merchant
2. **Token Validation**: Verify constraints before authorization
3. **Risk Signals**: Provide fraud detection metadata
4. **Revocation**: Support token cancellation
5. **Network Compatibility**: Map to network tokenization standards

Currently, Stripe provides the reference implementation. Additional PSPs expected to add support in 2026.
```

---

### Implementation Guide Section

**For Merchants**

```markdown
## Implementing ACP as a Merchant

### Prerequisites

1. **Product Catalog**: Structured product feed (CSV or JSON)
2. **Payment Processor**: Stripe account (or ACP-compatible PSP)
3. **Existing Commerce System**: Cart, inventory, order management
4. **Public API Endpoint**: Accessible to AI agents

### Implementation Steps

#### Step 1: Build ACP Endpoints

Implement four REST endpoints following the Agentic Checkout Spec:

```javascript
// Example using Express.js
const express = require('express');
const app = express();

// Create checkout session
app.post('/checkouts', async (req, res) => {
  const { items, buyer } = req.body;
  
  // Create internal cart
  const cart = await createCart(items, buyer);
  
  // Calculate totals
  const totals = await calculateTotals(cart);
  
  // Fetch fulfillment options
  const options = await getFulfillmentOptions(cart);
  
  res.json({
    id: cart.id,
    status: 'pending_fulfillment',
    buyer: cart.buyer,
    line_items: cart.items,
    fulfillment_options: options,
    ...totals
  });
});

// Update checkout session
app.put('/checkouts/:id', async (req, res) => {
  const cart = await getCart(req.params.id);
  
  // Update with new information
  await updateCart(cart.id, req.body);
  
  // Recalculate totals
  const totals = await calculateTotals(cart);
  
  res.json({
    id: cart.id,
    status: 'ready_for_payment',
    ...totals
  });
});

// Complete checkout
app.post('/checkouts/:id/complete', async (req, res) => {
  const { payment_data } = req.body;
  const cart = await getCart(req.params.id);
  
  // Process payment with SPT
  const payment = await stripe.paymentIntents.create({
    amount: cart.total,
    currency: cart.currency,
    shared_payment_granted_token: payment_data.token,
    confirm: true
  });
  
  if (payment.status === 'succeeded') {
    // Create order
    const order = await createOrder(cart);
    
    res.json({
      id: cart.id,
      status: 'complete',
      order: {
        id: order.id,
        order_number: order.number
      }
    });
  }
});

// Cancel checkout
app.post('/checkouts/:id/cancel', async (req, res) => {
  await cancelCart(req.params.id);
  res.json({ status: 'cancelled' });
});
```

#### Step 2: Publish Product Feed

Create and host a product catalog:

```javascript
// Generate product feed
app.get('/acp/products.json', async (req, res) => {
  const products = await getActiveProducts();
  
  const feed = products.map(p => ({
    id: p.sku,
    title: p.name,
    description: p.description,
    price: p.price_cents,
    currency: 'usd',
    availability: p.in_stock ? 'in_stock' : 'out_of_stock',
    images: p.images,
    category: p.category,
    attributes: p.attributes
  }));
  
  res.json({ products: feed });
});
```

#### Step 3: Configure Stripe (or Your PSP)

```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// No additional Stripe configuration needed!
// SPTs work with your existing Stripe integration
```

#### Step 4: Register with AI Agents

- **For ChatGPT**: Submit product feed and API endpoints to OpenAI
- **For Other Agents**: Follow their specific onboarding process
- **Using Stripe's Agentic Commerce Suite**: One-click distribution

### Testing

Use Stripe's test mode to simulate SPTs:

```javascript
// Create test SPT
const testSPT = await stripe.testHelpers.sharedPaymentTokens.create({
  payment_method: 'pm_card_visa',
  usage_limits: {
    currency: 'usd',
    max_amount: 10000,
    expires_at: Math.floor(Date.now() / 1000) + 900
  }
});

// Use in test checkout
POST /checkouts/test_123/complete
{
  "payment_data": {
    "token": testSPT.id,
    "provider": "stripe"
  }
}
```

### Production Checklist

- [ ] ACP endpoints deployed and accessible
- [ ] Product feed hosted and updating daily
- [ ] Stripe production keys configured
- [ ] Error handling implemented
- [ ] Webhook endpoints for order updates
- [ ] Fraud checks integrated
- [ ] Passed ChatGPT conformance tests
- [ ] Monitoring and logging configured
```

**For AI Agents**

```markdown
## Implementing ACP as an AI Agent Platform

### Prerequisites

1. **User Authentication**: Manage user accounts
2. **Payment Method Storage**: Securely store user payment methods
3. **PSP Integration**: Stripe (or ACP-compatible provider)
4. **Merchant Discovery**: System to discover and index merchant catalogs

### Implementation Steps

#### Step 1: Product Discovery

Index merchant product catalogs:

```python
import requests

def fetch_merchant_catalog(merchant_url):
    """Fetch and index merchant products"""
    response = requests.get(f"{merchant_url}/acp/products.json")
    catalog = response.json()
    
    for product in catalog['products']:
        index_product({
            'merchant_id': merchant_url,
            'product_id': product['id'],
            'title': product['title'],
            'description': product['description'],
            'price': product['price'],
            'availability': product['availability']
        })
```

#### Step 2: Conversational Shopping

Guide user through product discovery:

```python
async def handle_shopping_query(user_query):
    """Process shopping intent"""
    
    # Extract shopping intent
    intent = extract_intent(user_query)
    # "User wants: wireless keyboard under $50"
    
    # Search indexed products
    products = search_products(
        query="wireless keyboard",
        max_price=5000,
        currency="usd"
    )
    
    # Present options to user
    return format_product_results(products)
```

#### Step 3: Create Checkout Session

When user selects product:

```python
async def initiate_checkout(product, user):
    """Start checkout with merchant"""
    
    response = requests.post(
        f"{product.merchant_url}/checkouts",
        json={
            "items": [
                {"sku": product.id, "quantity": 1}
            ],
            "buyer": {
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name
            }
        }
    )
    
    checkout = response.json()
    return checkout
```

#### Step 4: Collect Fulfillment Info

Update checkout with user's selections:

```python
async def update_checkout(checkout_id, merchant_url, fulfillment_data):
    """Update checkout with fulfillment info"""
    
    response = requests.put(
        f"{merchant_url}/checkouts/{checkout_id}",
        json={
            "fulfillment_address": fulfillment_data['address'],
            "fulfillment_option_id": fulfillment_data['option_id']
        }
    )
    
    return response.json()
```

#### Step 5: Generate SPT

Create payment token:

```python
import stripe

async def create_payment_token(user, checkout):
    """Generate Shared Payment Token"""
    
    spt = stripe.shared_payment_tokens.create(
        payment_method=user.default_payment_method,
        usage_limits={
            'currency': checkout['currency'],
            'max_amount': checkout['total'],
            'expires_at': int(time.time()) + 900  # 15 minutes
        },
        seller_details={
            'network_id': checkout['merchant_id'],
            'external_id': checkout['id']
        }
    )
    
    return spt.id
```

#### Step 6: Complete Purchase

Finalize checkout:

```python
async def complete_purchase(checkout_id, merchant_url, spt_token, billing_address):
    """Complete the purchase"""
    
    response = requests.post(
        f"{merchant_url}/checkouts/{checkout_id}/complete",
        json={
            "payment_data": {
                "token": spt_token,
                "provider": "stripe",
                "billing_address": billing_address
            }
        }
    )
    
    result = response.json()
    
    if result['status'] == 'complete':
        # Show order confirmation to user
        return format_order_confirmation(result['order'])
```

### User Experience Best Practices

**Clear Communication:**
- Explain what's happening at each step
- Show price breakdown clearly
- Confirm before finalizing purchase

**Error Handling:**
- Graceful fallbacks for out-of-stock
- Clear messages for payment issues
- Offer alternatives when checkout fails

**Trust Building:**
- Display merchant information
- Show secure payment badges
- Provide order tracking links

### Security Considerations

- Store payment methods encrypted
- Validate SPT constraints before creation
- Log all transactions for audit
- Implement rate limiting
- Monitor for unusual patterns
```

---

## Comparison Framework

### Side-by-Side Comparison Table

```markdown
## UCP vs ACP: Feature Comparison

| Feature | UCP | ACP |
|---------|-----|-----|
| **Founded By** | Shopify + Google | OpenAI + Stripe |
| **Launch Date** | January 2026 | September 2025 |
| **Primary Focus** | Comprehensive commerce protocol | Checkout-first approach |
| **Governance** | Open community (heading to standards bodies) | Joint governance (OpenAI + Stripe) |
| **License** | Open source | Apache 2.0 |

### Architecture

| Aspect | UCP | ACP |
|--------|-----|-----|
| **Discovery** | `/.well-known/ucp` profile | Product feed (CSV/JSON) |
| **Negotiation** | Dynamic capability intersection | Implicit via available endpoints |
| **Transport** | REST, MCP, A2A, Embedded | REST, MCP (in development) |
| **Payment Model** | Instruments + Handlers (provider-agnostic) | SPT (Stripe-first, extensible) |
| **Extensions** | Composable via JSON Schema | Custom merchant capabilities |
| **State Machine** | Explicit (incomplete → escalation → complete) | Implicit (pending → ready → complete) |

### Core Capabilities

| Capability | UCP | ACP |
|------------|-----|-----|
| **Checkout** | ✅ Full lifecycle with escalation | ✅ Four-endpoint flow |
| **Identity Linking** | ✅ OAuth 2.0 standard | ⏳ Coming soon |
| **Order Management** | ✅ Full post-purchase tracking | ⏳ Webhook notifications |
| **Product Catalog** | ⏳ Roadmap | ✅ Product Feed Spec |
| **Subscriptions** | ⏳ Extension in development | ⏳ Future |
| **Returns/Refunds** | ✅ Part of Order capability | ⏳ Future |

### Payment Approach

| Feature | UCP | ACP |
|---------|-----|-----|
| **Primary Method** | Tokenization handlers (multiple patterns) | Shared Payment Tokens (SPT) |
| **PSP Flexibility** | Any PSP via handler specs | Stripe (primary), others extensible |
| **Autonomous Agents** | AP2 integration for verifiable mandates | SPT with time/amount constraints |
| **Fraud Detection** | PSP-dependent | Stripe Radar built-in |
| **Network Tokens** | Supported via handlers | Supported via Stripe |

### Merchant Experience

| Aspect | UCP | ACP |
|--------|-----|-----|
| **Integration Complexity** | Moderate (implement full profile + operations) | Low (four endpoints) |
| **Merchant of Record** | ✅ Always merchant | ✅ Always merchant |
| **Existing Systems** | Must map to UCP operations | Minimal changes (use existing cart/payment) |
| **Brand Control** | ✅ Full control via embedded protocol | ✅ Maintained (agent facilitates only) |
| **Escalation Path** | Structured (continue_url + embedded checkout) | Limited (agent handles most UI) |

### AI Agent Experience

| Aspect | UCP | ACP |
|--------|-----|-----|
| **Discovery** | Profile-based capability detection | Feed-based product discovery |
| **Flexibility** | High (negotiate what's supported) | Medium (four standard endpoints) |
| **Error Handling** | Structured messages with severity levels | HTTP status codes + error messages |
| **Testing** | Community examples | Stripe test helpers |
| **MCP Support** | ✅ Native MCP binding | ⏳ In development |

### Ecosystem

| Aspect | UCP | ACP |
|--------|-----|-----|
| **First Implementation** | Google AI Mode, Gemini | ChatGPT Instant Checkout |
| **Platform Partners** | Google, Microsoft, ChatGPT, Shopify | OpenAI, Anthropic, Perplexity, Vercel |
| **Merchant Partners** | Shopify (millions), Target, Walmart, Etsy, Wayfair | Shopify (millions), Etsy |
| **Payment Partners** | Adyen, Amex, Mastercard, Stripe, Visa | Stripe (primary) |
| **Total Endorsers** | 20+ | Growing (Stripe ecosystem) |

### Use Case Fit

| Use Case | Best Fit | Reasoning |
|----------|----------|-----------|
| **ChatGPT Integration** | ACP | Native implementation, proven at scale |
| **Multi-Agent Distribution** | UCP | Single integration, all agents |
| **Complex Fulfillment** | UCP | Rich extension model for custom needs |
| **Quick MVP** | ACP | Simpler, fewer endpoints |
| **Stripe-Powered Merchants** | ACP | Seamless integration |
| **Platform Aggregators** | UCP | Capability negotiation, flexible transports |
| **Subscription Commerce** | UCP | Subscription extension in roadmap |
| **Physical + Digital Goods** | Both | Both support mixed carts |
| **Enterprise Customization** | UCP | Extensive extension framework |
| **Rapid Time-to-Market** | ACP | Stripe's commerce suite |
```

### Visual Comparison Diagrams

**Architecture Comparison**

```markdown
## How They Differ: Architecture

### UCP: Capability-First

```
┌──────────────────────────────────────────────┐
│           Discovery & Negotiation             │
│  /.well-known/ucp ──> Compute Intersection   │
└───────────────────┬──────────────────────────┘
                    │
      ┌─────────────┴─────────────┐
      │                           │
┌─────▼─────┐             ┌───────▼────────┐
│  Services │             │  Capabilities  │
│ (Shopping)│             │  (Checkout,    │
│           │             │   Orders, etc) │
└─────┬─────┘             └───────┬────────┘
      │                           │
      └─────────────┬─────────────┘
                    │
          ┌─────────▼──────────┐
          │    Extensions      │
          │ (Fulfillment,      │
          │  Discounts, AP2)   │
          └─────────┬──────────┘
                    │
      ┌─────────────┴─────────────┐
      │                           │
┌─────▼─────┐             ┌───────▼────────┐
│ Transport │             │   Payment      │
│  Bindings │             │   Handlers     │
│(REST,MCP, │             │ (Provider-     │
│ A2A, EP)  │             │  Agnostic)     │
└───────────┘             └────────────────┘
```

**Key:** Modular, layered, everything negotiable

### ACP: Checkout-First

```
┌──────────────────────────────────────────────┐
│          Product Feed Discovery               │
│    CSV/JSON ──> Index ──> Search             │
└───────────────────┬──────────────────────────┘
                    │
          ┌─────────▼──────────┐
          │  Checkout Endpoints│
          │  • Create          │
          │  • Update          │
          │  • Complete        │
          │  • Cancel          │
          └─────────┬──────────┘
                    │
          ┌─────────▼──────────┐
          │  Shared Payment    │
          │  Token (SPT)       │
          │  • Stripe-native   │
          │  • Time-limited    │
          │  • Single-use      │
          └─────────┬──────────┘
                    │
          ┌─────────▼──────────┐
          │  Merchant Payment  │
          │  Processing        │
          │  • Existing PSP    │
          │  • Order creation  │
          └────────────────────┘
```

**Key:** Linear, checkout-centric, Stripe-optimized
```

### Decision Framework Interactive Tool

```markdown
## Which Protocol Should You Use?

Answer these questions to get personalized guidance:

**1. What's your primary use case?**
- [ ] Selling through ChatGPT specifically → **ACP**
- [ ] Multi-agent distribution (Google, Microsoft, etc.) → **UCP**
- [ ] Both → **Consider implementing both**

**2. What's your payment infrastructure?**
- [ ] Stripe (and happy with it) → **ACP** (seamless)
- [ ] Multiple PSPs or non-Stripe → **UCP** (provider-agnostic)
- [ ] Planning to migrate → **Flexible with either**

**3. How complex is your checkout?**
- [ ] Standard: address, shipping, payment → **Either works**
- [ ] Custom: age verification, special terms, white-glove → **UCP** (better escalation)
- [ ] Very simple: digital goods only → **ACP** (simpler)

**4. What's your timeline?**
- [ ] Need to launch in weeks → **ACP** (fewer endpoints)
- [ ] Can invest 2-3 months → **UCP** (more comprehensive)
- [ ] Long-term platform play → **UCP** (more extensible)

**5. What's your merchant scale?**
- [ ] SMB / Early stage → **ACP** (easier start)
- [ ] Enterprise / Complex → **UCP** (more flexibility)
- [ ] Platform / Aggregator → **UCP** (capability negotiation)

**6. Do you need custom capabilities?**
- [ ] Yes, lots of customization → **UCP** (rich extension model)
- [ ] No, standard checkout → **ACP** (proven patterns)
- [ ] Some customization → **Either can work**

### Recommendation Algorithm

```javascript
function recommendProtocol(answers) {
  let ucpScore = 0;
  let acpScore = 0;
  
  // Use case
  if (answers.useCase === 'chatgpt') acpScore += 3;
  if (answers.useCase === 'multi-agent') ucpScore += 3;
  if (answers.useCase === 'both') { ucpScore += 1; acpScore += 1; }
  
  // Payment infrastructure
  if (answers.psp === 'stripe-happy') acpScore += 2;
  if (answers.psp === 'multiple') ucpScore += 2;
  
  // Complexity
  if (answers.complexity === 'standard') acpScore += 1;
  if (answers.complexity === 'custom') ucpScore += 2;
  if (answers.complexity === 'simple') acpScore += 2;
  
  // Timeline
  if (answers.timeline === 'weeks') acpScore += 2;
  if (answers.timeline === 'months') ucpScore += 1;
  if (answers.timeline === 'long-term') ucpScore += 2;
  
  // Scale
  if (answers.scale === 'smb') acpScore += 1;
  if (answers.scale === 'enterprise') ucpScore += 2;
  if (answers.scale === 'platform') ucpScore += 3;
  
  // Customization
  if (answers.customization === 'lots') ucpScore += 2;
  if (answers.customization === 'none') acpScore += 1;
  
  return {
    ucp: ucpScore,
    acp: acpScore,
    recommendation: ucpScore > acpScore ? 'UCP' : 'ACP',
    confidence: Math.abs(ucpScore - acpScore)
  };
}
```
```

**Interactive Tool Spec:**
- User answers 6 questions
- Visual score accumulation
- Clear recommendation with reasoning
- Links to specific implementation guides
- Option to implement both (show sequence)

---

## Interactive Tools

### Tool 1: Protocol Comparison Matrix

**Purpose:** Allow users to filter and compare specific features

**Features:**
- Checkboxes to select comparison categories
- Real-time filtering
- Expandable rows for details
- Export comparison to PDF/CSV
- Share link with selected filters

**Categories:**
- Architecture
- Capabilities
- Payment Model
- Developer Experience
- Ecosystem Support
- Cost Implications
- Time to Market

### Tool 2: Use Case Matcher

**Purpose:** Match user's specific scenario to protocol recommendation

**Interface:**
- Dropdown: Industry (Retail, SaaS, Services, Marketplace)
- Slider: Transaction complexity (Simple → Complex)
- Multiselect: Required features
- Buttons: Merchant type (Direct, Platform, Aggregator)

**Output:**
- Protocol recommendation
- Confidence score
- Reasoning bullets
- Implementation roadmap
- Similar case studies

### Tool 3: Integration Effort Estimator

**Purpose:** Estimate development time for each protocol

**Inputs:**
- Current infrastructure (PSP, commerce platform)
- Team size
- Engineering resources
- Existing API maturity

**Outputs:**
- Estimated weeks for ACP
- Estimated weeks for UCP
- Comparison bar chart
- Breakdown by implementation phase
- Risk factors and dependencies

### Tool 4: Protocol Feature Explorer

**Purpose:** Interactive exploration of both protocols

**Interface:**
- Side-by-side protocol viewers
- Click any feature to see details
- Hover for tooltips
- Filter by capability type
- Search across both specs

**Features:**
- Syntax-highlighted code examples
- Request/response comparisons
- State diagrams
- Error handling patterns

---

## Visual Design

### Color Coding

**UCP:**
- Primary: Protocol Blue `#0066FF`
- Accent: Agent Purple `#8B5CF6`

**ACP:**
- Primary: Stripe Purple `#635BFF`
- Accent: OpenAI Teal `#10A37F`

**Comparison:**
- Neutral Gray for shared features
- Distinct colors for unique features
- Highlight color for "better fit" indicators

### Comparison Table Styling

```css
.comparison-table {
  /* Clean, scannable design */
  border-collapse: collapse;
  width: 100%;
}

.comparison-table th {
  background: linear-gradient(135deg, #635BFF, #0066FF);
  color: white;
  padding: 16px;
  font-weight: 600;
}

.comparison-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #E2E8F0;
}

.comparison-table tr:hover {
  background: #F8FAFC;
}

/* Feature indicators */
.feature-check {
  color: #00B87C;
  font-weight: 600;
}

.feature-planned {
  color: #FFB020;
}

.feature-none {
  color: #64748B;
}
```

### Icons & Badges

**Protocol Badges:**
```
┌──────────────┐
│ UCP          │  Blue gradient
│ Shopify+Google│
└──────────────┘

┌──────────────┐
│ ACP          │  Purple gradient
│ OpenAI+Stripe│
└──────────────┘
```

**Feature Status Icons:**
- ✅ Fully supported
- ⏳ Coming soon
- 🔧 In development
- ➖ Not planned

---

## Integration Points

### Navigation Updates

Update main navigation:
```
What is UCP | How It Works | Capabilities | Architecture | ... | ACP | Comparison
```

### Cross-References

**In UCP sections, add:**
- "Compare with ACP" link cards
- "See how ACP handles this" callouts
- Side-by-side code examples where relevant

**In ACP sections, add:**
- "Compare with UCP" link cards
- "Alternative approach in UCP" notes
- Highlight philosophical differences

### Footer Updates

```
## Related Protocols

**Universal Commerce Protocol (UCP)**
Comprehensive commerce standard
[Learn More →](#ucp)

**Agentic Commerce Protocol (ACP)**
Checkout-first approach for AI agents
[Learn More →](#acp)

**Agent Payments Protocol (AP2)**
Payment authorization for autonomous agents
[Learn More →](https://ap2-protocol.org)
```

### Search & Filtering

- Global search across both protocols
- Filter results by protocol
- Tag content with relevant protocol
- "Show in comparison" quick action

---

# Claude Code Prompt - ACP Extension

## Instructions for Claude Code

You are extending an existing UCP educational website by adding a comprehensive ACP section and protocol comparison framework.

## Your Task

Add the ACP protocol section to the existing site:

1. **Create new ACP section** with all content specified above
2. **Build comparison section** with interactive decision tools
3. **Update navigation** to include ACP and comparison links
4. **Maintain design consistency** with existing UCP styling
5. **Add cross-references** between UCP and ACP content
6. **Implement comparison tools** (decision matrix, use case matcher)
7. **Ensure responsive design** across all new components

## File Structure Updates

```
src/
├── components/
│   ├── sections/
│   │   ├── [existing UCP sections...]
│   │   ├── acp/  [NEW]
│   │   │   ├── ACPHero.tsx
│   │   │   ├── WhatIsACP.tsx
│   │   │   ├── HowACPWorks.tsx
│   │   │   ├── CoreComponents.tsx
│   │   │   ├── ImplementationGuide.tsx
│   │   │   └── ACPEcosystem.tsx
│   │   └── comparison/  [NEW]
│   │       ├── ComparisonHero.tsx
│   │       ├── FeatureMatrix.tsx
│   │       ├── ArchitectureDiagram.tsx
│   │       ├── UseCaseMatcher.tsx
│   │       └── DecisionFramework.tsx
│   ├── interactive/
│   │   ├── [existing UCP tools...]
│   │   ├── ACPFlowStepper.tsx  [NEW]
│   │   ├── SPTVisualizer.tsx  [NEW]
│   │   ├── ProtocolComparator.tsx  [NEW]
│   │   └── IntegrationEstimator.tsx  [NEW]
```

## Implementation Priorities

### Priority 1: Core ACP Content (Days 1-2)
1. ACP Hero and What is ACP sections
2. How ACP Works with flow diagrams
3. Core Components documentation
4. Basic styling and responsive layout

### Priority 2: Comparison Framework (Days 3-4)
1. Side-by-side feature matrix
2. Architecture comparison diagrams
3. Use case scenarios
4. Decision tree logic

### Priority 3: Interactive Tools (Days 5-6)
1. ACP Flow Stepper
2. SPT Visualizer
3. Protocol Comparison Matrix
4. Use Case Matcher

### Priority 4: Integration & Polish (Day 7)
1. Cross-references between sections
2. Updated navigation
3. Search functionality
4. Mobile optimization
5. Performance testing

## Key Design Decisions

### Color Scheme
- UCP: Blue tones (#0066FF)
- ACP: Purple tones (#635BFF)
- Comparison: Neutral grays with both accent colors
- Shared features: Green (#00B87C)

### Typography
- Maintain existing Inter + JetBrains Mono
- Use consistent heading hierarchy
- Match existing code block styling

### Interactive Elements
- Same animation library (Framer Motion)
- Consistent interaction patterns
- Shared component library where possible

### Content Tone
- Objective and balanced
- No protocol favoritism
- Technical accuracy critical
- Practical implementation focus

## Testing Requirements

- [ ] All ACP sections render correctly
- [ ] Comparison tables are accurate
- [ ] Interactive tools function properly
- [ ] Navigation updated successfully
- [ ] Cross-links work bidirectionally
- [ ] Mobile responsive (test 375px, 768px, 1280px)
- [ ] Code examples are syntactically correct
- [ ] SPT visualizer shows correct flow
- [ ] Decision framework logic is sound
- [ ] Performance acceptable (Lighthouse > 90)

## Content Accuracy Checklist

- [ ] All ACP technical details are correct
- [ ] SPT flow accurately represented
- [ ] Endpoint specifications match Stripe docs
- [ ] Comparison table is fair and unbiased
- [ ] Use case recommendations are sound
- [ ] Links to external resources work
- [ ] Code examples are runnable
- [ ] Governance model accurately described

## Success Criteria

The ACP extension is successful if:
1. Users can understand ACP as clearly as UCP
2. Comparison framework helps decision-making
3. No technical inaccuracies
4. Design is cohesive with existing site
5. Interactive tools provide real value
6. Mobile experience is excellent
7. Content is balanced and objective

## Special Notes

- **Objectivity is critical**: Don't favor one protocol over the other
- **Technical accuracy**: Verify all API endpoints and flows against official docs
- **Future-proof**: Structure supports adding more protocols (e.g., x402)
- **Cross-linking**: Liberally link between UCP and ACP content where relevant
- **Code examples**: Must be realistic and executable

## Build Commands

Same as existing site:
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

Good luck! Build something that helps developers make informed decisions.
