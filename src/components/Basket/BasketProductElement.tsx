import React, { useEffect, useState } from "react";
import "./BasketProductElement.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import basketProductService from "../../services/basketProductService";
import { AddProductToBasketRequest } from "../../models/BasketProduct/addProductToBasketRequest";
import { refreshData } from "../../store/basketProduct/basketProductSlice";

type Props = {
  brandName: string;
  productId: number;
  Name: string;
  Quantity: number;
  Price: number;
  isSelected: number;
};

const BasketProductElement = (props: Props) => {
  const dispatch = useDispatch();

  // Checkbox durumunu yönetmek için useState kullanıyoruz
  const [isChecked, setIsChecked] = useState(props.isSelected === 1);

  useEffect(() => {
    setIsChecked(props.isSelected === 1);
  }, [props.isSelected]);

  // Checkbox'ın durumunu değiştiren fonksiyon
  const handleCheckboxChange = async () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    if (basketId) {
      try {
        await basketProductService.reverseSelectedStatusOfTheProductInBasket(
          basketId,
          props.productId
        );
      } catch (error) {
        console.error("Ürünü sepetten silme hatası:", error);
      }
    }
  };

  const basketId: number | null = useSelector(
    (state: RootState) => state.basket.basketId
  );

  const deleteProductToBasket = async () => {
    if (basketId) {
      try {
        await basketProductService.deleteProductToBasket(
          basketId,
          props.productId
        );
        dispatch(refreshData());
      } catch (error) {
        console.error("Ürünü sepetten silme hatası:", error);
      }
    }
  };

  const decreaseProductToBasket = async () => {
    if (basketId) {
      try {
        const request: AddProductToBasketRequest = {
          basketId: basketId,
          productId: props.productId,
          productQuantity: 1,
          isSelected: 1,
        };
        await basketProductService.decreaseProductToBasket(request);
        dispatch(refreshData());
      } catch (error) {
        console.error("Ürünü sepetten azaltma hatası:", error);
      }
    }
  };

  const addProductToBasket = async () => {
    if (basketId) {
      try {
        const request: AddProductToBasketRequest = {
          basketId: basketId,
          productId: props.productId,
          productQuantity: 1,
          isSelected: 1,
        };
        await basketProductService.addProductToBasket(request);
        dispatch(refreshData());
      } catch (error) {
        console.error("Ürünü sepette arttırma hatası:", error);
      }
    }
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
        <button
          type="button"
          className="btn btn-warning"
          onClick={decreaseProductToBasket}
        >
          <i className="bi bi-dash-lg"></i>
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={addProductToBasket}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteProductToBasket}
        >
          <i className="bi bi-trash3-fill"></i>
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
