import React from "react";
import "./ProductElement.css";

type Props = {};

const ProductElement = (props: Props) => {
  return (
    <div className="product-element card">
      <div className="card-body">
        <h5 className="card-title">Brand</h5>
        <p className="card-text">
          Product Name Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia nihil iste animi quibusdam .
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Category</li>
        <li className="list-group-item">Favorite Count</li>
        <li className="list-group-item">Discount</li>
        <li className="list-group-item">Price</li>
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
