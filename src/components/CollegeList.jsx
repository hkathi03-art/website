function CollegeList({ colleges, onSelectCollege }) {
  return (
    <section className="panel">
      <div className="section-header">
        <div>
          <p className="step-label">Step 2</p>
          <h2>Colleges</h2>
          <p className="muted">Choose one college to continue.</p>
        </div>
      </div>

      <div className="card-grid">
        {colleges.map((college) => (
          <button
            key={college.id}
            className="card clickable"
            onClick={() => onSelectCollege(college)}
          >
            <h3>{college.name}</h3>
            <p>{college.courses.length} courses</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CollegeList
