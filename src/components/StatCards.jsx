function StatCards({ items }) {
  return (
    <section className="stats-grid" aria-label="Dashboard stats">
      {items.map((item) => (
        <article key={item.label} className="stat-card">
          <p className="stat-label">{item.label}</p>
          <p className="stat-value">{item.value}</p>
          {item.helper ? <p className="stat-helper">{item.helper}</p> : null}
        </article>
      ))}
    </section>
  )
}

export default StatCards
