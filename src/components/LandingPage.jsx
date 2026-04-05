function LandingPage({ title, subtitle, onOpenDashboard }) {
  return (
    <section className="panel landing-panel">
      <p className="step-label">Step 1: Landing</p>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <button className="primary-btn" onClick={onOpenDashboard}>
        Open Dashboard
      </button>
    </section>
  )
}

export default LandingPage
