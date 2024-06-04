import React, { useState } from "react";
import "./AddressDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDeliveryAddress } from "../../store/deliveryAddress/deliveryAddressSlice";
import { RootState } from "../../store/configureStore";

type Props = {
  deliveryAddressId: number;
  fullName: string;
  deliveryAddressDetail: string;
  phoneNumber: string;
};

const AddressDetail = (props: Props) => {
  const dispatch = useDispatch();

  const handleDeliveryAddressId = () => {
    dispatch(setSelectedDeliveryAddress(props.deliveryAddressId));
  };

  // const selectedDeliveryAddress: number | null = useSelector(
  //   (state: RootState) => state.deliveryAddress.selectedDeliveryAddress
  // );
  // console.log("adresId " + selectedDeliveryAddress);

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
          onChange={handleDeliveryAddressId}
        />
      </div>
    </div>
  );
};

export default AddressDetail;
