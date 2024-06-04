import React from "react";
import "./ProductElement.css";
import { AddProductToBasketRequest } from "../../models/BasketProduct/addProductToBasketRequest";
import basketProductService from "../../services/basketProductService";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import customerProductFavoriteService from "../../services/customerProductFavoriteService";

type Props = {
  productId: number;
  brandName: string;
  productName: string;
  categoryName: string;
  favoriteCount: number;
  discount: number;
  price: number;
};

const ProductElement = (props: Props) => {
  const basketId: number | null = useSelector(
    (state: RootState) => state.basket.basketId
  );

  const addProductToBasket = async () => {
    try {
      const request: AddProductToBasketRequest = {
        basketId: basketId,
        productId: props.productId,
        productQuantity: 1,
        isSelected: 1,
      };
      await basketProductService.addProductToBasket(request);
    } catch (error) {
      console.error("Ürünü sepete ekleme hatası:", error);
    }
  };

  const customerId: number | null = useSelector(
    (state: RootState) => state.customer.customerId
  );

  const addProductToFavorite = async () => {
    if (customerId && props.productId) {
      try {
        await customerProductFavoriteService.addProductToFavorite(
          customerId,
          props.productId
        );
      } catch (error) {
        console.error("Ürünü favoriden silme hatası:", error);
      }
    }
  };

  return (
    <div className="product-element card">
      <div className="product-element-header card-body">
        <h5 className="card-title">{props.brandName}</h5>
        <p className="card-text">{props.productName}</p>
      </div>
      <div className="product-element-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="bi bi-tag-fill" style={{ color: "darkblue" }}></i>
            {" " + props.categoryName}
          </li>
          <li className="list-group-item">
            <i
              className="bi bi-heart-fill favorite-icon"
              style={{ color: "tomato" }}
            ></i>
            {" " + props.favoriteCount}
          </li>
          <li className="list-group-item">
            <i className="bi bi-arrow-down" style={{ color: "green" }}></i>
            {" %" + props.discount + " İndirim"}
          </li>
          <li className="list-group-item product-element-price">
            <i className="bi bi-cash" style={{ color: "goldenrod" }}></i>
            {" " + props.price + " ₺"}
          </li>
        </ul>
      </div>
      <div className="product-element-buttons card-body">
        <button
          type="button"
          className="btn btn-danger"
          onClick={addProductToFavorite}
        >
          <i className="bi bi-heart-fill"></i>
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={addProductToBasket}
        >
          <i className="bi bi-cart-plus-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductElement;
