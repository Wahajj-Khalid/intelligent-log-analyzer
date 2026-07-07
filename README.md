# Intelligent Log Analytics & Monitoring Platform

An enterprise-ready, asynchronous full-stack platform designed to handle distributed system log streams. The application ingests logs via a structured REST API layer, processes data efficiently with connection-pooled storage, and routes payload data into an isolated Python-based Machine Learning microservice for real-time anomaly detection and predictive error categorization.

## 🚀 Key Architectural Highlights & Engineering Practices
- **SOLID Design Principles:** Fully decoupled codebase utilizing the Model-View-Controller-Repository (MVC-R) pattern to guarantee high maintainability and isolate database queries from core business domains.
- **Enterprise Data Layer:** Built using Node.js, TypeScript, and native PostgreSQL connection pooling (`pg-pool`) to support concurrent heavy data writes without system degradation.
- **Microservices & Containerization:** Engineered to decouple full-stack environments. The infrastructure relies entirely on **Docker** and **Docker Compose**, eliminating local operating system dependencies and maximizing environment parity.
- **Robust Security & Validation:** Integrated runtime parameter validation barriers ensuring high-quality, sanitized data ingestion into the analytical tables.

## 🛠️ Technology Stack
- **Backend Infrastructure:** Node.js, Express, TypeScript
- **Database Engine:** PostgreSQL (Alpine-optimized container)
- **DevOps & Containers:** Docker, Docker Compose, Linux/WSL2
- **Artificial Intelligence (In Progress):** Python, FastAPI, Scikit-Learn

---

## 📂 System Architecture Blueprint

```text
intelligent-log-analyzer/
├── backend/                  # TypeScript Node.js API Service
│   ├── src/
│   │   ├── config/           # Infrastructure & DB Pooling Initialization
│   │   ├── controllers/      # Network Ingestion & HTTP Controllers
│   │   ├── repositories/     # Data Isolation Layer (SQL Operations)
│   │   ├── routes/           # REST Route Mapping (API v1)
│   │   └── index.ts          # Server Bootstrap Core
│   ├── .env.example          # Non-sensitive configuration layout template
│   ├── package.json
│   └── tsconfig.json
├── ai-service/               # Python ML Analytical Engine (Upcoming Phase)
├── frontend/                 # React Observability Dashboard (Upcoming Phase)
└── docker-compose.yml         # Multi-container Infrastructure Orchestrator