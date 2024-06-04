import React, { useEffect } from "react";
import "./ProductFavoriteElement.css";
import CustomerProductFavoriteElement from "./CustomerProductFavoriteElement";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import customerProductFavoriteService from "../../services/customerProductFavoriteService";
import { setCustomerProductsFavorite } from "../../store/customerProductFavorite/customerProductFavoriteSlice";
import { getListCustomerProductFavoriteDto } from "../../models/CustomerProductFavorite/getListCustomerProductFavoriteDto";

type Props = {};

const ProductFavoriteElement = (props: Props) => {
  const dispatch = useDispatch();

  const customerId: number | null = useSelector(
    (state: RootState) => state.customer.customerId
  );

  // CustomerProductFavorite -----------------------------
  async function fetchCustomerProductFavoritesData(customerId: number) {
    try {
      const customerProductFavoritesResponse =
        await customerProductFavoriteService.getCustomerProductFavorite(
          customerId
        );
      const data = customerProductFavoritesResponse.data;
      dispatch(setCustomerProductsFavorite(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    if (customerId) {
      fetchCustomerProductFavoritesData(customerId);
    }
  }, [customerId]);

  const getListCustomerProductFavoriteDto: getListCustomerProductFavoriteDto[] =
    useSelector(
      (state: RootState) =>
        state.customerProductFavorite.customerProductsFavorite
    );

  return (
    <div className="product-favorite-element">
      <div className="product-favorite-element-content">
        <div className="product-favorite-element-header">
          <span>Favori Ürünler</span>
        </div>

        <div className="product-favorite-element-products">
          <div className="product-favorite-element-products-title">Ürünler</div>
          <div className="product-favorite-element-product-element-title">
            <span className="product-favorite-element-product-element-title-brand">
              Marka
            </span>
            <span className="product-favorite-element-product-element-title-product-name">
              Model
            </span>
            <span className="product-favorite-element-product-element-title-unit-price">
              Birim Fiyat
            </span>
            <span className="product-favorite-element-product-element-title-operation">
              Operasyon
            </span>
          </div>
          {getListCustomerProductFavoriteDto &&
            getListCustomerProductFavoriteDto.length > 0 &&
            getListCustomerProductFavoriteDto.map((value, index) => (
              <CustomerProductFavoriteElement
                key={index}
                productId={value.productId}
                brandName={value.brandName}
                productName={value.productName}
                productPrice={value.productPrice}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFavoriteElement;
