import { useMemo, useState } from 'react'
import { getRiskLabel, predictFinalResult } from '../utils/predictor'

function CourseDetail({ college, course, note }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [riskFilter, setRiskFilter] = useState('All')

  const rows = useMemo(() => {
    return course.students
      .map((student) => {
        const prediction = predictFinalResult(student.courseworkGrade)
        const riskLabel = getRiskLabel(student.courseworkGrade)

        return {
          ...student,
          prediction,
          riskLabel,
        }
      })
      .filter((student) => {
        const matchesName = student.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesRisk = riskFilter === 'All' || student.riskLabel === riskFilter

        return matchesName && matchesRisk
      })
  }, [course.students, searchTerm, riskFilter])

  return (
    <section className="panel">
      <p className="step-label">Step 4</p>
      <h2>{course.name}</h2>
      <p className="muted">{college.name}</p>

      <div className="controls">
        <label>
          Search student
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Type a student name"
          />
        </label>

        <label>
          Risk filter
          <select value={riskFilter} onChange={(event) => setRiskFilter(event.target.value)}>
            <option>All</option>
            <option>Not at-risk</option>
            <option>Monitor</option>
            <option>At-risk</option>
          </select>
        </label>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Coursework Grade</th>
              <th>Predicted Final Result</th>
              <th>Risk Label</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>
                  <span className={`badge grade-${student.courseworkGrade.replace('+', 'plus')}`}>
                    {student.courseworkGrade}
                  </span>
                </td>
                <td>{student.prediction}</td>
                <td>
                  <span className={`badge risk-${student.riskLabel.toLowerCase().replace(/\s+/g, '-')}`}>
                    {student.riskLabel}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="note">{note}</p>
    </section>
  )
}

export default CourseDetail
