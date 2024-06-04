import React, { useState } from "react";
import "./AddressDetail.css";

type Props = {
  deliveryAddressId: number;
  fullName: string;
  deliveryAddressDetail: string;
  phoneNumber: string;
};

const AddressDetail = (props: Props) => {
  return (
    <div className="purchase-element-delivery-adress-detail">
      <div className="delivery-adress-detail-content">
        <span>{props.fullName}</span>
        <span>{props.deliveryAddressDetail}</span>
        <span>{props.phoneNumber}</span>
      </div>
      <div className="delivery-adress-radio-button">
        <input
          type="radio"
          className="purchase-element-delivery-adress-detail-radio"
          name="delivery-address"
        />
      </div>
    </div>
  );
};

export default AddressDetail;
