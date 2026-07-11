# Product Inventory API

Lab Task 04 solution: a NestJS REST API for managing product inventory with PostgreSQL, TypeORM, validation, search, category filtering, and active-status toggling.

## Requirements

- Node.js
- PostgreSQL
- A database named `product_inventory_db`

## Setup

```bash
npm.cmd install
```

Create the PostgreSQL database:

```sql
CREATE DATABASE product_inventory_db;
```

Optional environment variables:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=
DB_NAME=product_inventory_db
PORT=3000
```

On Windows PowerShell, use `npm.cmd` because `npm.ps1` may be blocked by the execution policy.

## Run

```bash
npm.cmd run start:dev
```

The API runs at `http://localhost:3000`.

## Endpoints

- `POST /products` - create a product
- `GET /products` - get all products
- `GET /products/:id` - get one product
- `PUT /products/:id` - update a product
- `DELETE /products/:id` - delete a product
- `GET /products/search?name=phone` - search by product name
- `GET /products/category?category=Electronics` - filter by category
- `PATCH /products/:id/toggle` - toggle active/inactive status

Example create request:

```json
{
  "productName": "Wireless Mouse",
  "price": 850,
  "quantity": 25,
  "category": "Electronics",
  "isActive": true
}
```

## Verify

```bash
npm.cmd run build
npm.cmd test
```
