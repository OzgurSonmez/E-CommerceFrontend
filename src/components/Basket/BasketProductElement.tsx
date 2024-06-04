import React, { useState } from "react";
import "./BasketProductElement.css";

type Props = {
  brandName: string;
  productId: number;
  Name: string;
  Quantity: number;
  Price: number;
  isSelected: number;
};

const BasketProductElement = (props: Props) => {
  // Checkbox durumunu yönetmek için useState kullanıyoruz
  const [isChecked, setIsChecked] = useState(true);

  // Checkbox'ın durumunu değiştiren fonksiyon
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="basket-element-product-element">
      <div className="basket-element-product-element-brand">
        {props.brandName}
      </div>
      <div className="basket-element-product-element-product-name">
        {props.Name}
      </div>
      <div className="basket-element-product-element-quantity">
        {props.Quantity + " adet"}
      </div>
      <div className="basket-element-product-element-unit-price">
        {props.Price + " ₺"}
      </div>
      <div className="basket-element-product-element-button">
        <button type="button" className="btn btn-warning ">
          -
        </button>
        <button type="button" className="btn btn-success">
          +
        </button>
        <button type="button" className="btn btn-danger">
          Sil
        </button>
      </div>
      <div className="basket-element-product-element-is-selected">
        <input
          type="checkbox"
          className="basket-element-product-element-checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default BasketProductElement;
