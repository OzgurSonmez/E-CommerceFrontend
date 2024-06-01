import React from "react";
import ProductElement from "../../components/Product/ProductElement";
import "./Products.css";
import ProductFilter from "../../components/Product/ProductFilter";

type Props = {};

const Products = (props: Props) => {
  return (
    <div className="product-page">
      <div className="product-page-filter">
        <ProductFilter />
      </div>
      <div className="product-page-products">
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
        <ProductElement />
      </div>
    </div>
  );
};

export default Products;
