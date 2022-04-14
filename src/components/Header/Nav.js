export const Nav = () => {
  return (
    <nav className="nav sticky">
      <img
        src="./img/logo2.png"
        alt="Lucca-loggo"
        className="nav__logo"
        id="logo"
      ></img>
      <ul className="nav__links">
        <li className="nav__item">
          <a className="nav__link" href="/#section--1">
            Producto
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#section--3">
            Servicios
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/#section--2">
            Planes
          </a>
        </li>
        <li className="nav__item">
          <a
            className="nav__link nav__link--btn btn--show-modal"
            href="/contain"
          >
            Pruebalo Gratis
          </a>
        </li>
      </ul>
    </nav>
  );
};
