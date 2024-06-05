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
      </nav>
    </div>
  );
};

export default Navbar;
