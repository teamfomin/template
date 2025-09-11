export default function HeaderDefault({ logo, navItems, actions }) {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="header__nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header__actions">
        <button className="cta-btn first-btn">{actions[0].label}</button>
        <button className="cta-btn second-btn">{actions[1].label}</button>
      </div>
    </header>
  );
}
