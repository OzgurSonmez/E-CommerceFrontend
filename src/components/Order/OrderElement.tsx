import React, { useEffect } from "react";
import "./OrderElement.css";
import OrderProductElement from "./OrderProductElement";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import customerOrderService from "../../services/customerOrderService";
import { setCustomerOrders } from "../../store/customerOrder/customerOrderSlice";
import { getListCustomerOrderDto } from "../../models/CustomerOrder/getListCustomerOrderDto";

type Props = {};

const OrderElement = (props: Props) => {
  const dispatch = useDispatch();

  const customerId: number | null = useSelector(
    (state: RootState) => state.customer.customerId
  );

  const refreshData = useSelector(
    (state: any) => state.customerOrder.refreshData
  );
  // CustomerOrder -----------------------------
  async function fetchCustomerOrdersData(customerId: number) {
    try {
      const customerOrdersResponse =
        await customerOrderService.getCustomerOrderByCustomerId(customerId);
      const data = customerOrdersResponse.data;
      dispatch(setCustomerOrders(data));
    } catch (error) {
      console.error("Sipariş verisi alınamadı:", error);
    }
  }

  useEffect(() => {
    if (customerId) {
      fetchCustomerOrdersData(customerId);
    }
  }, [customerId, refreshData]);

  const getListCustomerOrderDto: getListCustomerOrderDto[] = useSelector(
    (state: RootState) => state.customerOrder.customerOrders
  );

  const formatDate = (dateString: any) => {
    const options: any = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "tr-TR",
      options
    );
    return formattedDate;
  };

  return (
    <div>
      {getListCustomerOrderDto &&
        getListCustomerOrderDto.length > 0 &&
        getListCustomerOrderDto.map((value, index) => (
          <div className="order-element">
            <div className="order-element-content">
              <div className="order-element-header">
                <span>{"Sipariş Numarası: " + value.orderNo}</span>
              </div>
              <div className="order-element-body">
                <div className="order-element-order-date">
                  <span>Sipariş Tarihi</span>
                  <span>{formatDate(value.orderDate)}</span>
                </div>
                <div className="order-element-order-status">
                  <span>Sipariş Durumu</span>
                  <span>{value.orderStatus}</span>
                </div>
                <div className="order-element-total-price">
                  <span>Toplam Sipariş Tutarı</span>
                  <span>{value.totalPrice + " ₺"}</span>
                </div>
              </div>
              <div className="order-element-delivery-adress">
                <div>Teslimat Detayları </div>
                <div className="order-element-delivery-adress-detail">
                  <span>{value.fullName}</span>
                  <span>{value.deliveryAddressDetail}</span>
                  <span>{value.phoneNumber}</span>
                </div>
              </div>
              <div className="order-element-products">
                <div className="order-element-products-title">Ürünler</div>
                <div className="order-element-product-element-title">
                  <span className="order-element-product-element-title-brand">
                    Marka
                  </span>
                  <span className="order-element-product-element-title-product-name">
                    Model
                  </span>
                  <span className="order-element-product-element-title-quantity">
                    Adet
                  </span>
                  <span className="order-element-product-element-title-unit-price">
                    Birim Fiyat
                  </span>
                </div>
                <OrderProductElement
                  key={index}
                  customerOrderId={value.customerOrderId}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderElement;
