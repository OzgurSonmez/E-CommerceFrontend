import React, { useState } from "react";
import "./AddressDetail.css";

type Props = {};

const AddressDetail = (props: Props) => {
  return (
    <div className="purchase-element-delivery-adress-detail">
      <div className="delivery-adress-detail-content">
        <span>Özgür Sönmez</span>
        <span>Esenyalı Mh. Vatan Cd. No:1 D:1 Pendik / İstanbul / Türkiye</span>
        <span>0544 607 1048</span>
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
