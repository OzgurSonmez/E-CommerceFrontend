import React from "react";
import "./BasketElement.css";
import BasketProductElement from "./BasketProductElement";
import { useNavigate } from "react-router-dom";

type Props = {};

const BasketElement = (props: Props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/purchase");
  };
  return (
    <div className="basket-element">
      <div className="basket-element-content">
        <div className="basket-element-header">
          <span>Sepetim</span>
        </div>

        <div className="basket-element-products">
          <div className="basket-element-products-title">Ürünler</div>
          <div className="basket-element-product-element-title">
            <span className="basket-element-product-element-title-brand">
              Marka
            </span>
            <span className="basket-element-product-element-title-product-name">
              Model
            </span>
            <span className="basket-element-product-element-title-quantity">
              Adet
            </span>
            <span className="basket-element-product-element-title-unit-price">
              Birim Fiyat
            </span>
            <span className="basket-element-product-element-title-operation">
              Operasyon
            </span>
            <span className="basket-element-product-element-is-selected">
              &nbsp;
            </span>
          </div>
          <BasketProductElement />
          <BasketProductElement />
          <BasketProductElement />
          <BasketProductElement />
          <BasketProductElement />
        </div>

        <div className="basket-element-complete-order">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleButtonClick}
          >
            Alışverişi tamamla
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketElement;
