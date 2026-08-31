import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../../estilos/menu.css"

// Nota: La gestión de usuarios (login/logout), la cesta de la compra y la administración
// de listas dependían de usuarios y base de datos. Se han eliminado del menú.

const MenuSuperior = () => {

  const handleNavLinkClick = () => setIsNavbarCollapsed(true);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  useEffect(() => {
    setIsNavbarCollapsed(true)
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3 menu-superior fixed-top" >
      <Link className="navbar-brand" to="/">
        <img
          src="/imagenes/logo-menu.png"
          alt="Supermercado"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
        <span className="mx-3 d-inline-block align-top">
          <span className="fw-bold fs-4">Comparator</span>
        </span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)}
        aria-controls="navbarNav"
        aria-expanded={!isNavbarCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${!isNavbarCollapsed ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav ms-auto d-flex align-items-center">
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/"
              onClick={handleNavLinkClick}>Comparador de supermercados</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/comparador2"
              onClick={handleNavLinkClick}>Comparador entre 2 supermercados</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link" to="/cesta"
              onClick={handleNavLinkClick}>Cesta de la compra</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;
