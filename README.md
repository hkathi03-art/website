# Predicting Student Academic Performance Using Publicly Available Educational Data

This is a simple React + Vite frontend-only demo for an academic advising dashboard.

It shows a beginner-friendly flow:

1. Landing page
2. College list
3. Course list
4. Course detail with student grades and predicted outcomes

The prediction in this version is intentionally basic and rules-based.

## What the app does

- Displays the project title and a landing screen.
- Shows exactly 3 colleges:
  - Computer Science
  - Engineering
  - Business Administration
- Shows exactly 2 courses per college.
- Shows students, coursework grades, predicted final result, and risk label.
- Uses a simple Version 1 prediction rule based only on coursework grade.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## File to edit data

All editable dashboard data is in:

- `src/data/dashboardData.js`

You can update in one place:

- project title/subtitle
- colleges
- course names
- student names
- coursework grades (`A+`, `B`, `C`, `D`)

## Where prediction logic lives

Prediction logic is in:

- `src/utils/predictor.js`

Current Version 1 rules:

- `A+` → `Likely A+ in final`
- `B` → `Likely B in final`
- `C` → `Likely C in final`
- `D` → `At-risk / Likely D in final`

## Beginner structure

```text
src/
  components/
  data/dashboardData.js
  utils/predictor.js
  App.jsx
  main.jsx
  styles.css
```

## Version 2 idea (future, documentation only)

For a richer but still frontend-only future version:

1. Add extra student fields in `dashboardData.js`:
   - `studyTime`
   - `absences`
   - `previousFailures`
2. Update predictor logic in `predictor.js` to use small weighted rules (not just grade mapping).
3. Keep no backend for now, but improve advisor insights with richer indicators.
