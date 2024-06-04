import React from "react";
import "./CustomerProductFavoriteElement.css";
import customerProductFavoriteService from "../../services/customerProductFavoriteService";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
type Props = {
  productId: number;
  brandName: string;
  productName: string;
  productPrice: number;
};

const CustomerProductFavoriteElement = (props: Props) => {
  const customerId: number | null = useSelector(
    (state: RootState) => state.customer.customerId
  );

  const deleteProductToFavorite = async () => {
    if (customerId && props.productId) {
      try {
        await customerProductFavoriteService.removeProductToFavorite(
          customerId,
          props.productId
        );
      } catch (error) {
        console.error("Ürünü favoriden silme hatası:", error);
      }
    }
  };

  return (
    <div className="customer-product-favorite-element">
      <div className="customer-product-favorite-element-brand">
        {props.brandName}
      </div>
      <div className="customer-product-favorite-element-product-name">
        {props.productName}
      </div>
      <div className="customer-product-favorite-element-unit-price">
        {props.productPrice + " ₺"}
      </div>
      <div className="customer-product-favorite-element-button">
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteProductToFavorite}
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default CustomerProductFavoriteElement;
