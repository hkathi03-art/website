function Breadcrumbs({ steps, onNavigate }) {
  return (
    <nav className="breadcrumbs" aria-label="Navigation steps">
      {steps.map((step, index) => {
        const isClickable = typeof step.target === 'string' && !step.current

        return (
          <span key={step.label} className="breadcrumb-item">
            <button
              type="button"
              className={`crumb-btn ${step.current ? 'current' : ''}`}
              disabled={!isClickable}
              onClick={() => isClickable && onNavigate(step.target)}
            >
              {step.label}
            </button>
            {index < steps.length - 1 ? <span className="separator">/</span> : null}
          </span>
        )
      })}
    </nav>
  )
}

export default Breadcrumbs
