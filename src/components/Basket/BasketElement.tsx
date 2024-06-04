import React, { useEffect } from "react";
import "./BasketElement.css";
import BasketProductElement from "./BasketProductElement";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import basketProductService from "../../services/basketProductService";
import { setBasketProducts } from "../../store/basketProduct/basketProductSlice";
import { RootState } from "../../store/configureStore";
import { getListBasketProductDto } from "../../models/BasketProduct/getListBasketProductDto";

type Props = {};

const BasketElement = (props: Props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/purchase");
  };

  const dispatch = useDispatch();

  const customerId: number | null = useSelector(
    (state: RootState) => state.customer.customerId
  );

  const refreshData = useSelector(
    (state: any) => state.basketProduct.refreshData
  );

  // BasketProducts -----------------------------
  async function fetchBasketProductsData(customerId: number) {
    try {
      const basketProductsResponse =
        await basketProductService.getBasketProductByCustomerId(customerId);
      const data = basketProductsResponse.data;
      dispatch(setBasketProducts(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    if (customerId) {
      fetchBasketProductsData(customerId);
    }
  }, [customerId, refreshData]);

  const getListBasketProductDto: getListBasketProductDto[] = useSelector(
    (state: RootState) => state.basketProduct.basketProducts
  );

  console.log(getListBasketProductDto);
  return (
    <div className="basket-element">
      <div className="basket-element-content">
        <div className="basket-element-header">
          <span>Sepetim</span>
        </div>

        <div className="basket-element-products">
          <div className="basket-element-products-title">Ürünler</div>
          <div className="basket-element-product-element-title">
            <span className="basket-element-product-element-title-brand">
              Marka
            </span>
            <span className="basket-element-product-element-title-product-name">
              Model
            </span>
            <span className="basket-element-product-element-title-quantity">
              Adet
            </span>
            <span className="basket-element-product-element-title-unit-price">
              Birim Fiyat
            </span>
            <span className="basket-element-product-element-title-operation">
              Operasyon
            </span>
            <span className="basket-element-product-element-is-selected">
              &nbsp;
            </span>
          </div>
          {getListBasketProductDto &&
            getListBasketProductDto.length > 0 &&
            getListBasketProductDto.map((value, index) => (
              <BasketProductElement
                key={index}
                brandName={value.brandName}
                productId={value.productId}
                Name={value.productName}
                Quantity={value.productQuantity}
                Price={value.productPrice}
                isSelected={value.productIsSelected}
              />
            ))}
        </div>

        <div className="basket-element-complete-order">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleButtonClick}
          >
            Alışverişi tamamla
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketElement;
