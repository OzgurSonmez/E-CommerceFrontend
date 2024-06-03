import React from "react";
import "./ProductElement.css";

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
  return (
    <div className="product-element card">
      <div className="card-body">
        <h5 className="card-title">{props.brandName}</h5>
        <p className="card-text">{props.productName}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.categoryName}</li>
        <li className="list-group-item">{props.favoriteCount}</li>
        <li className="list-group-item">{"%" + props.discount + " indirim"}</li>
        <li className="list-group-item">{props.price + " ₺"}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="btn btn-primary">
          Sepete Ekle
        </a>
      </div>
    </div>
  );
};

export default ProductElement;
