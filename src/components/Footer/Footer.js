export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="footer__item">
          <a className="footer__link" href="/#">
            Acerca
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#section--2">
            Precios
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/#">
            Términos de uso
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/#">
            Póliticas de privacidad
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="/#">
            Contáctanos
          </a>
        </li>
      </ul>
      <img src="../img/logo2.png" className="header__img" alt="Lucca" />
      <p className="footer__copyright">&copy; Copyright. Página de prueba.</p>
    </footer>
  );
};
