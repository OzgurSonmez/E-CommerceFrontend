import React from "react";
import OrderProductElement from "../Order/OrderProductElement";
import "./PurchaseElement.css";
import AddressDetail from "./AddressDetail";
import { useNavigate } from "react-router-dom";

type Props = {};

const PurchaseElement = (props: Props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/orders");
  };
  return (
    <div className="purchase-element">
      <div className="purchase-element-content">
        <div className="purchase-element-header">
          <span>Sipariş Ekranı</span>
        </div>
        <div className="purchase-element-delivery-adress">
          <div className="purchase-element-delivery-adress-title">
            Teslimat Adresi
          </div>
          <AddressDetail />
          <AddressDetail />
          <AddressDetail />
        </div>
        <div className="purchase-element-products">
          <div className="purchase-element-products-title">Ürünler</div>
          <div className="purchase-element-product-element-title">
            <span className="purchase-element-product-element-title-brand">
              Marka
            </span>
            <span className="purchase-element-product-element-title-product-name">
              Model
            </span>
            <span className="purchase-element-product-element-title-quantity">
              Adet
            </span>
            <span className="purchase-element-product-element-title-unit-price">
              Birim Fiyat
            </span>
          </div>
          <OrderProductElement />
          <OrderProductElement />
        </div>
        <div className="purchase-element-total-price">
          <span>Toplam Sipariş Tutarı</span>
          <span>15960 ₺</span>
        </div>
        <div className="purchase-element-complete-order">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleButtonClick}
          >
            Siparişi onayla
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseElement;
