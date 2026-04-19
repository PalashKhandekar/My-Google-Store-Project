google-store/
├── frontend/
│   ├── package.json
│   ├── src/
│   │   └── index.js
│   └── public/
│       └── index.html
├── backend/
│   ├── package.json
│   ├── server.js
│   └── routes/
│       └── products.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── docker-compose.yml
├── Dockerfile
└── README.md

Frontend served by Parcel for simplicity.
Backend uses Express + CORS to allow FE requests.
GitHub Actions:
Builds frontend + backend.
Can optionally build and push Docker image.
You can later extend pipeline to deploy on GCP (Cloud Run or GKE).
