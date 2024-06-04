import React, { useState, useEffect } from "react";
import "./OrderProductElement.css";
import customerOrderDetailService from "../../services/customerOrderDetailService";
import { getListCustomerOrderDetailDto } from "../../models/CustomerOrderDetail/getListCustomerOrderDetailDto";

type Props = {
  customerOrderId: number;
};

const OrderProductElement = (props: Props) => {
  const [customerOrderDetails, setCustomerOrderDetails] = useState<
    getListCustomerOrderDetailDto[]
  >([]);

  useEffect(() => {
    async function fetchCustomerOrderDetailsData(customerOrderId: number) {
      try {
        const customerOrderDetailsResponse =
          await customerOrderDetailService.getCustomerOrderDetailByCustomerOrderId(
            customerOrderId
          );
        const data = customerOrderDetailsResponse.data;
        setCustomerOrderDetails(data);
      } catch (error) {
        console.error("Sipariş detay verisi alınamadı:", error);
      }
    }

    if (props.customerOrderId) {
      fetchCustomerOrderDetailsData(props.customerOrderId);
    }
  }, [props.customerOrderId]);

  return (
    <div>
      {customerOrderDetails &&
        customerOrderDetails.length > 0 &&
        customerOrderDetails.map((value, index) => (
          <div className="order-element-product-element" key={index}>
            <div className="order-element-product-element-brand">
              {value.brandName}
            </div>
            <div className="order-element-product-element-product-name">
              {value.productName}
            </div>
            <div className="order-element-product-element-quantity">
              {value.productQuantity + " adet"}
            </div>
            <div className="order-element-product-element-unit-price">
              {value.productUnitPrice + " ₺"}
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderProductElement;
