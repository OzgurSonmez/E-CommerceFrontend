import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/register"> Kayıt Ol </Link>
              </li>
              <li className="nav-item">
                <Link to="/login"> Giriş Yap </Link>
              </li>
              <li className="nav-item">
                <Link to="/change-password"> Şifre Değiştir </Link>
              </li>
              <li className="nav-item">
                <Link to="/products"> Ürünler </Link>
              </li>
              <li className="nav-item">
                <Link to="/orders"> Siparişlerim </Link>
              </li>
              <li className="nav-item">
                <Link to="/basket"> Sepet </Link>
              </li>
              <li className="nav-item">
                <Link to="/productFavorite"> Favori Ürünler </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
