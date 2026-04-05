# Predicting Student Academic Performance Using Publicly Available Educational Data

Professional React + Vite frontend demo for advisor-facing student performance insights.

## What this app does

- Provides a polished dashboard flow:
  1. Landing
  2. Colleges
  3. Courses
  4. Course detail
- Includes exactly 3 colleges and exactly 2 courses per college.
- Shows student coursework grades, predicted final result, and risk labels.
- Uses Version 1 rules-based prediction with a professional UI.
- Adds search + risk filter on the course detail screen.

## Tech

- React + Vite
- Frontend only (no backend)
- Single local mock data file for easy updates

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Edit data (single source)

Use this file:

- `src/data/dashboardData.js`

You can update:

- project title/subtitle/notes
- colleges
- courses
- students
- coursework grade (`A+`, `B`, `C`, `D`)

## Prediction logic location

- `src/utils/predictor.js`

Rules in Version 1:

- `A+` → `Likely A+ in final`
- `B` → `Likely B in final`
- `C` → `Likely C in final`
- `D` → `At-risk / Likely D in final`

## Version 2 idea (documentation only)

Add these student features:

- `studyTime`
- `absences`
- `previousFailures`

Then replace simple mapping with weighted score rules while keeping frontend-only architecture.