export default function Footer({ name }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4 className="footer__title">{name}</h4>
        </div>

        <div className="footer__section">
          <nav className="footer__nav">
            <a href="#" className="footer__link">
              Игры
            </a>
            <a href="#" className="footer__link">
              О нас
            </a>
            <a href="#" className="footer__link">
              Поддержка
            </a>
            <a href="#" className="footer__link">
              Правила
            </a>
          </nav>
        </div>

        <div className="footer__section">
          <div className="footer__legal">
            <p>
              © {currentYear} {name}. Все права защищены.
            </p>
            <p>18+</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
