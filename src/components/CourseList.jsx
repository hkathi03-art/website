function CourseList({ college, onSelectCourse }) {
  return (
    <section className="panel">
      <p className="step-label">Step 3</p>
      <h2>{college.name}</h2>
      <p className="muted">Exactly 2 courses are shown for this college.</p>

      <div className="card-grid two-cols">
        {college.courses.map((course) => (
          <button
            key={course.id}
            className="card clickable"
            onClick={() => onSelectCourse(course)}
          >
            <h3>{course.name}</h3>
            <p>{course.students.length} enrolled students</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CourseList
