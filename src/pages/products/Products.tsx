import React, { useEffect } from "react";
import ProductElement from "../../components/Product/ProductElement";
import "./Products.css";
import ProductFilter from "../../components/Product/ProductFilter";
import { useDispatch, useSelector } from "react-redux";
import productService from "../../services/productService";
import { FilteredProductRequestDto } from "../../models/Product/filteredProductRequestDto";
import { setFilteredProducts } from "../store/product/productSlice";
import { getListFilteredProductDto } from "../../models/Product/getListFilteredProductDto";
import { RootState } from "../store/configureStore";

type Props = {};

const Products = (props: Props) => {
  const dispatch = useDispatch();

  const filteredProductRequestDto: FilteredProductRequestDto = {
    categoryId: null,
    brandId: null,
    productName: null,
    minPrice: null,
    maxPrice: null,
    orderBy: null,
    orderDirection: null,
  };

  async function fetchProductData() {
    try {
      const productResponse = await productService.getFilteredProducts(
        filteredProductRequestDto
      );
      const data = productResponse.data;
      dispatch(setFilteredProducts(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  const getListFilteredProductDto: getListFilteredProductDto[] = useSelector(
    (state: RootState) => state.product.products
  );

  console.log(getListFilteredProductDto);

  return (
    <div className="product-page">
      <div className="product-page-filter">
        <ProductFilter />
      </div>
      <div className="product-page-products">
        {getListFilteredProductDto &&
          getListFilteredProductDto.length > 0 &&
          getListFilteredProductDto.map((value, index) => (
            <ProductElement
              key={index}
              productId={value.productId}
              brandName={value.brandName}
              productName={value.productName}
              categoryName={value.categoryName}
              favoriteCount={value.favCount}
              discount={value.discountPercentage}
              price={value.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
