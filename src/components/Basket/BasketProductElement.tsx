import React, { useState } from "react";
import "./BasketProductElement.css";

type Props = {};

const BasketProductElement = (props: Props) => {
  // Checkbox durumunu yönetmek için useState kullanıyoruz
  const [isChecked, setIsChecked] = useState(true);

  // Checkbox'ın durumunu değiştiren fonksiyon
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="basket-element-product-element">
      <div className="basket-element-product-element-brand">Samsung</div>
      <div className="basket-element-product-element-product-name">
        Galaxy M34 5G 6 GB 128 GB Koyu Mavi 128 GB
      </div>
      <div className="basket-element-product-element-quantity">1 Adet</div>
      <div className="basket-element-product-element-unit-price">9800 ₺</div>
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
