import React from "react";
import "./OrderElement.css";
import OrderProductElement from "./OrderProductElement";

type Props = {};

const OrderElement = (props: Props) => {
  return (
    <div className="order-element">
      <div className="order-element-content">
        <div className="order-element-header">
          <span>Sipariş Numarası: 10000001</span>
        </div>
        <div className="order-element-body">
          <div className="order-element-order-date">
            <span>Sipariş Tarihi</span>
            <span>24/05/2024</span>
          </div>
          <div className="order-element-order-status">
            <span>Sipariş Durumu</span>
            <span>Sipariş alındı</span>
          </div>
          <div className="order-element-total-price">
            <span>Toplam Sipariş Tutarı</span>
            <span>15960 ₺</span>
          </div>
        </div>
        <div className="order-element-delivery-adress">
          <div>Teslimat Detayları </div>
          <div className="order-element-delivery-adress-detail">
            <span>Özgür Sönmez</span>
            <span>
              Esenyalı Mh. Vatan Cd. No:1 D:1 Pendik / İstanbul / Türkiye
            </span>
            <span>0544 607 1048</span>
          </div>
        </div>
        <div className="order-element-products">
          <div className="order-element-products-title">Ürünler</div>
          <div className="order-element-product-element-title">
            <span className="order-element-product-element-title-brand">
              Marka
            </span>
            <span className="order-element-product-element-title-product-name">
              Model
            </span>
            <span className="order-element-product-element-title-quantity">
              Adet
            </span>
            <span className="order-element-product-element-title-unit-price">
              Birim Fiyat
            </span>
          </div>
          <OrderProductElement />
          <OrderProductElement />
          <OrderProductElement />
          <OrderProductElement />
          <OrderProductElement />
        </div>
      </div>
    </div>
  );
};

export default OrderElement;
