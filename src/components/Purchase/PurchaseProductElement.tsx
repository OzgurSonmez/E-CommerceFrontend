import React from "react";
import "./PurchaseProductElement.css";

type Props = {
  brandName: string;
  productName: string;
  productQuantity: number;
  productPrice: number;
};

const PurchaseProductElement = (props: Props) => {
  return (
    <div className="purchase-element-product-element">
      <div className="purchase-element-product-element-brand">
        {props.brandName}
      </div>
      <div className="purchase-element-product-element-product-name">
        {props.productName}
      </div>
      <div className="purchase-element-product-element-quantity">
        {props.productQuantity + " adet"}
      </div>
      <div className="purchase-element-product-element-unit-price">
        {props.productPrice + " ₺"}
      </div>
    </div>
  );
};

export default PurchaseProductElement;
