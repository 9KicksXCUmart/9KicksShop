# 9Kicks

## Development Setup

```bash
git clone git@github.com:9KicksXCUmart/9KicksShop.git
cd 9KicksShop

make setup

# Start the development server
make
```

# 9Kicks Shop

This the Frontend of Online Shopping for the 9Kicks project. It is written in `Svelte` and `TypeScript` and uses the `SvelteKit` framework.

Implemented features:

- [x] User registration with email verification
- [x] User login
- [x] User logout
- [x] User password reset
- [x] Full-text search with OpenSearch
- [x] Browse Product with Filters
- [x] Browse Product Details
- [x] Product Recommendation System
- [x] Account Summary View
- [x] Account Summary Update
- [x] Order Tracking
- [x] Order History and Management
- [x] Add Product Review
- [x] Stimulated Payment System with Stripe
- [x] Shopping Cart (Add, Delete Shopping Cart Item)
- [x] Shopping Cart Item Checkout

## Prerequisites

- AWS account
- AWS DynamoDB
- Running Microservices Go (Backend) and Microservices Kotlin (Backend) locally or remotely

## Getting Started

```bash
cp .env.example .env
```

Input your credentials in the `.env` file.

```bash
STRIPE_SECRET_KEY=<YOUR-STRIPE-SECRET-KEY>
PUBLIC_STRIPE_KEY=<YOUR-PUBLIC-STRIPE-KEY>
PUBLIC_KOTLIN_BACKEND_URL=<BACKEND-KOTLIN-URL-HOST>
PUBLIC_GO_BACKEND_URL=<BACKEND-GO-URL-HOST>
```

Run development server :

```bash
git clone git@github.com:9KicksXCUmart/9KicksShop.git
cd 9KicksShop

make setup

# Start the development server
make
```
