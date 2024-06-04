import React from "react";
import "./OrderProductElement.css";
type Props = {
  brandName: string;
  productName: string;
  productQuantity: number;
  productPrice: number;
};

const OrderProductElement = (props: Props) => {
  return (
    <div className="order-element-product-element">
      <div className="order-element-product-element-brand">
        {props.brandName}
      </div>
      <div className="order-element-product-element-product-name">
        {props.productName}
      </div>
      <div className="order-element-product-element-quantity">
        {props.productQuantity + " adet"}
      </div>
      <div className="order-element-product-element-unit-price">
        {props.productPrice + " ₺"}
      </div>
    </div>
  );
};

export default OrderProductElement;
