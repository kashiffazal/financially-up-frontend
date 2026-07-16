# Implementation Plan: Backend Server Setup
### Date: 2026-07-15 00:49 AM
### Prompt Reference:

> - If you need to create a component and that component is used in multiple routes, you can place it in the components folder in admin/website or mutual, but if a component is used in a single route like the forgot password component, it's just one-time use in the login screen, then you have to place it in the same route folder like the login folder.
> - Now it's time to create the backend. I have created the folder named 'server' in the root; all the backend stuff will be in this folder with proper folder structure
> - The old app is live at https://financiallyup.com.au/ (localhost:3001) and new app at localhost:3000
> - When user submits form on old app, data should go to new app's DB via API
> - Create .env files for development and production
> - Use Sequelize for every DB task
> - Create table from agent-data/forms-field/individual-engagement.json
> - Production URL: https://financiallyup.innotechcloud.online/
> - PDF storage: Skip for now, will handle later
> - Frontend and backend must be separate (independently deployable)

---

*(Full plan content is in the artifact implementation_plan.md)*

## Architecture Flow

```
Old App (form submit) → POST to New App Express API (port 5000) → Sequelize → MySQL (financially-up DB)
Admin Panel (New App frontend) → GET from Express API → Display in table
```

## Server Folder Structure

```
server/
├── package.json
├── .env.development
├── .env.production
├── app.js
├── index.js
├── config/
│   └── database.js
├── models/
│   ├── index.js
│   └── IndividualEngagement.js
├── routes/
│   └── individualEngagement.routes.js
├── controllers/
│   └── individualEngagement.controller.js
├── middleware/
│   └── errorHandler.js
└── utils/
    └── apiResponse.js
```

## Key Decisions
- Port: 5000
- DB: XAMPP MySQL (root, no password)
- Separate package.json inside server/
- Production URL: https://financiallyup.innotechcloud.online/
- No PDF storage columns for now
