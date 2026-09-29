# CoachingPromo Next backend

Independent Express API for `../next-frontend`, normally on port **5001**.
The original `../backend` remains the React app's backend on port 5000.
This service owns its routes, models, middleware, uploads, package lock and `.env`.
It does not import the original backend or serve `frontend/dist`.

## Run

```sh
npm install
npm run dev
```

Use `npm start` in production and `npm test` for isolated API boundary tests.
`GET /health` identifies the process; `GET /ready` checks MongoDB connectivity.
The process connects to MongoDB before listening and disconnects on shutdown.

The local `.env` has been initialized from the existing integration settings with
`PORT=5001` and `FRONTEND_URL=http://localhost:3000`. Credentials are not committed.
For a fresh deployment copy `.env.example` to `.env` and supply credentials.
Set `FRONTEND_URL` to the Next public URL for reset emails and sitemap URLs, and
`CORS_ORIGINS` to the permitted Next browser origins.

The current MongoDB connection is intentionally retained to preserve products,
users and orders. **Both services currently share database records**, so writes
are visible to both. A separate backend does not imply a separate database.
For data isolation, supply a separate `MONGO_URI` and migrate the needed data;
no database cloning or seeding was performed automatically.

Existing uploaded files were copied once into this service's `uploads/` directory.
New files are stored independently. With a shared database, new upload references
written by one backend may not exist in the other's local storage. Use a shared
media store if both storefronts must keep editing the same catalogue.

API contracts for categories, subcategories, products, search, blogs/comments,
users/password resets, orders, Razorpay, enquiries/email, institutes, visitor
counts, banners and admin statistics match the original service. The Next app
proxies `/api/*` and `/uploads/*` to this API. Its existing server-side CRM adapter
continues to forward CRM submissions with its server-only credentials.

The one-time bootstrap script was removed after backup. There is no automatic
synchronization with the React backend; future changes belong to this app.
Runtime uploads and credentials intentionally remain Git-ignored; back them up
and provision them separately when deploying this service.
