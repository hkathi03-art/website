function Breadcrumbs({ steps }) {
  return (
    <div className="breadcrumbs" aria-label="Navigation steps">
      {steps.map((step, index) => (
        <span key={step.label} className="breadcrumb-item">
          <span className={step.active ? 'active-step' : ''}>{step.label}</span>
          {index < steps.length - 1 ? <span className="separator">→</span> : null}
        </span>
      ))}
    </div>
  )
}

export default Breadcrumbs
