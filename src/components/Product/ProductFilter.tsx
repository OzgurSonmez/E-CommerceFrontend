import React from "react";
import "./ProductFilter.css";
type Props = {};

const ProductFilter = (props: Props) => {
  return (
    <div className="product-filter-component">
      <div className="product-filter-element">
        <div className="filter-by-product-category">
          <div className="dropdown">
            <button
              className="filter-by-product-category-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>Kategori</span>
              <i className="bi bi-chevron-down filter-by-product-category-icon"></i>
            </button>
            <ul className="dropdown-menu filter-by-product-category-menu">
              <li>
                <input
                  className="filter-by-product-category-menu-checkbox"
                  type="checkbox"
                ></input>
                <label className="filter-by-product-category-menu-content">
                  1
                </label>
              </li>
              <li>
                <input
                  className="filter-by-product-category-menu-checkbox"
                  type="checkbox"
                ></input>
                <label className="filter-by-product-category-menu-content">
                  2
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="filter-by-product-brand">
          <div
            className="dropdown filter-by-product-brand-element"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <input
              className="filter-by-product-brand-input "
              placeholder="Marka"
            ></input>
            <div className="filter-by-product-brand-icons">
              <i className="bi bi-three-dots-vertical filter-by-product-brand-icon"></i>
              <i className="bi bi-chevron-down filter-by-product-brand-icon"></i>
            </div>
          </div>

          <ul className="dropdown-menu filter-by-product-brand-menu">
            <li>
              <button className="filter-by-product-brand-menu-button">
                Asus
              </button>
            </li>
            <li>
              <button className="filter-by-product-brand-menu-button">
                Apple
              </button>
            </li>
            <li>
              <button className="filter-by-product-brand-menu-button">
                Lg
              </button>
            </li>
          </ul>
        </div>

        <div className="product-filter-search-box">
          <input
            className="product-filter-search-box-input"
            placeholder="Arama"
          />
          <button className="product-filter-search-box-button">
            <i className="bi bi-search product-filter-search-box-icon"></i>
          </button>
        </div>

        <div className="product-filter-price">
          <input
            type="number"
            id="min-price"
            name="min-price"
            placeholder="Minimum fiyat"
          />
          <input
            type="number"
            id="max-price"
            name="max-price"
            placeholder="Maksimum fiyat"
          />
        </div>

        <div className="sorting-bar">
          <div className="dropdown">
            <button
              className="sorting-bar-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>Sıralama</span>
              <i className="bi bi-chevron-down sorting-bar-icon"></i>
            </button>
            <ul className="dropdown-menu sorting-bar-menu">
              <li>
                <button>Fiyata göre artan</button>
              </li>
              <li>
                <button>Fiyata göre azalan</button>
              </li>

              <li>
                <button>İndirime göre artan</button>
              </li>
              <li>
                <button>İndirime göre azalan</button>
              </li>
              <li>
                <button>Favoriye göre artan</button>
              </li>
              <li>
                <button>Favoriye göre azalan</button>
              </li>
              <li>
                <button>Varsayılan</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
