import { getRiskLabel, predictFinalResult } from '../utils/predictor'

function CourseDetail({ college, course, note, onBack }) {
  return (
    <section className="panel">
      <div className="section-header">
        <p className="step-label">Step 4: Course Detail</p>
        <button className="secondary-btn" onClick={onBack}>
          ← Back to Courses
        </button>
      </div>
      <h2>{course.name}</h2>
      <p className="muted">{college.name}</p>

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
            {course.students.map((student) => {
              const prediction = predictFinalResult(student.courseworkGrade)
              const riskLabel = getRiskLabel(student.courseworkGrade)

              return (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>
                    <span className={`badge grade-${student.courseworkGrade.replace('+', 'plus')}`}>
                      {student.courseworkGrade}
                    </span>
                  </td>
                  <td>{prediction}</td>
                  <td>
                    <span className={`badge risk-${riskLabel.toLowerCase().replace(/\s+/g, '-')}`}>
                      {riskLabel}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p className="note">{note}</p>
    </section>
  )
}

export default CourseDetail
