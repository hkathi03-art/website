// Version 1 rules-based predictor.
// Beginners: if you want different logic, edit this mapping.

export function predictFinalResult(courseworkGrade) {
  const predictionMap = {
    'A+': 'Likely A+ in final',
    B: 'Likely B in final',
    C: 'Likely C in final',
    D: 'At-risk / Likely D in final',
  }

  return predictionMap[courseworkGrade] ?? 'Unknown'
}

export function getRiskLabel(courseworkGrade) {
  if (courseworkGrade === 'D') return 'At-risk'
  if (courseworkGrade === 'C') return 'Monitor'
  return 'Not at-risk'
}
