function CourseList({ college, onSelectCourse, onBack }) {
  return (
    <section className="panel">
      <div className="section-header">
        <p className="step-label">Step 3: Courses</p>
        <button className="secondary-btn" onClick={onBack}>
          ← Back to Colleges
        </button>
      </div>
      <h2>{college.name}</h2>
      <p>Choose one of the 2 courses:</p>
      <div className="card-grid">
        {college.courses.map((course) => (
          <button
            key={course.id}
            className="card clickable"
            onClick={() => onSelectCourse(course)}
          >
            <h3>{course.name}</h3>
            <p>{course.students.length} students</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CourseList
