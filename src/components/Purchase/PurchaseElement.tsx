import React, { useEffect } from "react";
import OrderProductElement from "../Order/OrderProductElement";
import "./PurchaseElement.css";
import AddressDetail from "./AddressDetail";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import basketProductService from "../../services/basketProductService";
import { setSelectedBasketProducts } from "../../store/basketProduct/basketProductSlice";
import { getListBasketProductDto } from "../../models/BasketProduct/getListBasketProductDto";
import deliveryAddressService from "../../services/deliveryAddressService";
import { setDeliveryAddresses } from "../../store/deliveryAddress/deliveryAddressSlice";
import { DeliveryAddressDto } from "../../models/DeliveryAddress/DeliveryAddressDto";

type Props = {};

const PurchaseElement = (props: Props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/orders");
  };

  const dispatch = useDispatch();
  const customerId: number | null = useSelector(
    (state: RootState) => state.customer.customerId
  );

  // BasketProducts -----------------------------
  async function fetchBasketProductsData(customerId: number) {
    try {
      const basketProductsResponse =
        await basketProductService.getSelectedBasketProductByCustomerId(
          customerId
        );
      const data = basketProductsResponse.data;
      dispatch(setSelectedBasketProducts(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    if (customerId) {
      fetchBasketProductsData(customerId);
    }
  }, [customerId]);

  // DeliveryAddresses -----------------------------
  async function fetchDeliveryAddressesData(customerId: number) {
    try {
      const deliveryAddressesResponse =
        await deliveryAddressService.getDeliveryAddresses(customerId);

      const data = deliveryAddressesResponse.data;
      dispatch(setDeliveryAddresses(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    if (customerId) {
      fetchDeliveryAddressesData(customerId);
    }
  }, [customerId]);

  const getListSelectedBasketProductDto: getListBasketProductDto[] =
    useSelector(
      (state: RootState) => state.basketProduct.selectedBasketProducts
    );

  const deliveryAddresses: DeliveryAddressDto[] = useSelector(
    (state: RootState) => state.deliveryAddress.deliveryAddresses
  );

  console.log(deliveryAddresses);

  return (
    <div className="purchase-element">
      <div className="purchase-element-content">
        <div className="purchase-element-header">
          <span>Sipariş Ekranı</span>
        </div>
        <div className="purchase-element-delivery-adress">
          <div className="purchase-element-delivery-adress-title">
            Teslimat Adresi
          </div>
          {deliveryAddresses &&
            deliveryAddresses.length > 0 &&
            deliveryAddresses.map((value, index) => (
              <AddressDetail
                key={index}
                deliveryAddressDetail={value.deliveryAddressDetail}
                deliveryAddressId={value.deliveryAddressId}
                fullName={value.fullName}
                phoneNumber={value.phoneNumber}
              />
            ))}
        </div>
        <div className="purchase-element-products">
          <div className="purchase-element-products-title">Ürünler</div>
          <div className="purchase-element-product-element-title">
            <span className="purchase-element-product-element-title-brand">
              Marka
            </span>
            <span className="purchase-element-product-element-title-product-name">
              Model
            </span>
            <span className="purchase-element-product-element-title-quantity">
              Adet
            </span>
            <span className="purchase-element-product-element-title-unit-price">
              Birim Fiyat
            </span>
          </div>
          {getListSelectedBasketProductDto &&
            getListSelectedBasketProductDto.length > 0 &&
            getListSelectedBasketProductDto.map((value, index) => (
              <OrderProductElement
                key={index}
                brandName={value.brandName}
                productName={value.productName}
                productQuantity={value.productQuantity}
                productPrice={value.productPrice}
              />
            ))}
        </div>
        <div className="purchase-element-total-price">
          <span>Toplam Sipariş Tutarı</span>
          <span>15960 ₺</span>
        </div>
        <div className="purchase-element-complete-order">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleButtonClick}
          >
            Siparişi onayla
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseElement;
