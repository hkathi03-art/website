function Header({ title, subtitle }) {
  return (
    <header className="header">
      <div>
        <p className="kicker">Academic Advisory Dashboard</p>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
    </header>
  )
}

export default Header
