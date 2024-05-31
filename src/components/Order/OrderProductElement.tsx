import React from "react";
import "./OrderProductElement.css";
type Props = {};

const OrderProductElement = (props: Props) => {
  return (
    <div className="order-element-product-element">
      <div className="order-element-product-element-brand">Samsung</div>
      <div className="order-element-product-element-product-name">
        Galaxy M34 5G 6 GB 128 GB Koyu Mavi 128 GB
      </div>
      <div className="order-element-product-element-quantity">1 Adet</div>
      <div className="order-element-product-element-unit-price">9800 ₺</div>
    </div>
  );
};

export default OrderProductElement;
