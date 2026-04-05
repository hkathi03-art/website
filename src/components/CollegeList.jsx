function CollegeList({ colleges, onSelectCollege, onBack }) {
  return (
    <section className="panel">
      <div className="section-header">
        <p className="step-label">Step 2: Colleges</p>
        <button className="secondary-btn" onClick={onBack}>
          ← Back to Landing
        </button>
      </div>
      <h2>Select a College</h2>
      <div className="card-grid">
        {colleges.map((college) => (
          <button
            key={college.id}
            className="card clickable"
            onClick={() => onSelectCollege(college)}
          >
            <h3>{college.name}</h3>
            <p>{college.courses.length} courses available</p>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CollegeList
