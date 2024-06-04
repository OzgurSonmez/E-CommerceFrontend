import React, { useEffect } from "react";
import "./ProductFilter.css";
import { useDispatch, useSelector } from "react-redux";
import categoryService from "../../services/categoryService";
import { setCategories } from "../../store/category/categorySlice";
import { getListCategoryDto } from "../../models/Category/getListCategoryDto";
import { RootState } from "../../store/configureStore";
import brandService from "../../services/brandService";
import { setBrands } from "../../store/brand/brandSlice";
import { getListBrandDto } from "../../models/Brand/getListBrandDto";
import {
  setBrandId,
  setCategoryId,
  setMaxPrice,
  setMinPrice,
  setOrderBy,
  setOrderDirection,
  setProductName,
} from "../../store/product/filterSlice";

type Props = {};

const ProductFilter = (props: Props) => {
  const dispatch = useDispatch();

  // Kategoriler -----------------------------
  async function fetchCategoriesData() {
    try {
      const categoryResponse = await categoryService.getCategories();
      const data = categoryResponse.data;
      dispatch(setCategories(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const getListCategoryDto: getListCategoryDto[] = useSelector(
    (state: RootState) => state.category.categories
  );

  // Markalar ----------------------------------
  async function fetchBrandsData() {
    try {
      const brandResponse = await brandService.getBrands();
      const data = brandResponse.data;
      dispatch(setBrands(data));
    } catch (error) {
      console.error("Veri alınamadı:", error);
    }
  }

  useEffect(() => {
    fetchBrandsData();
  }, []);

  const getListBrandDto: getListBrandDto[] = useSelector(
    (state: RootState) => state.brand.brands
  );

  return (
    <div className="product-filter-component">
      <div className="product-filter-element">
        <div className="filter-by-product-category">
          <div className="dropdown">
            <button
              className="filter-by-product-category-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>Kategori</span>
              <i className="bi bi-chevron-down filter-by-product-category-icon"></i>
            </button>
            <ul className="dropdown-menu filter-by-product-category-menu">
              {getListCategoryDto &&
                getListCategoryDto.length > 0 &&
                getListCategoryDto.map((category, index) => (
                  <li key={index}>
                    <button
                      className="filter-by-product-category-menu-checkbox"
                      onClick={() =>
                        dispatch(setCategoryId(category.categoryId))
                      }
                      value={category.categoryId}
                    >
                      <span className="filter-by-product-category-menu-content">
                        {category.categoryName}
                      </span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="filter-by-product-brand">
          <button
            className="dropdown filter-by-product-brand-element"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>Marka</span>
            <div className="filter-by-product-brand-icons">
              <i className="bi bi-three-dots-vertical filter-by-product-brand-icon"></i>
              <i className="bi bi-chevron-down filter-by-product-brand-icon"></i>
            </div>
          </button>

          <ul className="dropdown-menu filter-by-product-brand-menu">
            {getListBrandDto &&
              getListBrandDto.length > 0 &&
              getListBrandDto.map((brand, index) => (
                <li key={index}>
                  <button
                    className="filter-by-product-brand-menu-button"
                    onClick={() => dispatch(setBrandId(brand.brandId))}
                    value={brand.brandId}
                  >
                    {brand.brandName}
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="product-filter-search-box">
          <input
            className="product-filter-search-box-input"
            placeholder="Arama"
            onChange={(e) => dispatch(setProductName(e.target.value))}
          />
          <button className="product-filter-search-box-button">
            <i className="bi bi-search product-filter-search-box-icon"></i>
          </button>
        </div>

        <div className="product-filter-price">
          <input
            type="number"
            id="min-price"
            name="min-price"
            placeholder="Minimum fiyat"
            onChange={(e) => dispatch(setMinPrice(Number(e.target.value)))}
          />
          <input
            type="number"
            id="max-price"
            name="max-price"
            placeholder="Maksimum fiyat"
            onChange={(e) => dispatch(setMaxPrice(Number(e.target.value)))}
          />
        </div>

        <div className="sorting-bar">
          <div className="dropdown">
            <button
              className="sorting-bar-button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span>Sıralama</span>
              <i className="bi bi-chevron-down sorting-bar-icon"></i>
            </button>
            <ul className="dropdown-menu sorting-bar-menu">
              <li>
                <button
                  onClick={() => {
                    dispatch(setOrderBy("price"));
                    dispatch(setOrderDirection("ascending"));
                  }}
                >
                  Fiyata göre artan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    dispatch(setOrderBy("price"));
                    dispatch(setOrderDirection("descending"));
                  }}
                >
                  Fiyata göre azalan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    dispatch(setOrderBy("discount"));
                    dispatch(setOrderDirection("ascending"));
                  }}
                >
                  İndirime göre artan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    dispatch(setOrderBy("discount"));
                    dispatch(setOrderDirection("descending"));
                  }}
                >
                  İndirime göre azalan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    dispatch(setOrderBy("favcount"));
                    dispatch(setOrderDirection("ascending"));
                  }}
                >
                  Favoriye göre artan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    dispatch(setOrderBy("favcount"));
                    dispatch(setOrderDirection("descendingc"));
                  }}
                >
                  Favoriye göre azalan
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    dispatch(setOrderBy(null));
                    dispatch(setOrderDirection(null));
                  }}
                >
                  Varsayılan
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            className="filter-by-product-clean-filters"
            onClick={() => {
              dispatch(setCategoryId(null));
              dispatch(setBrandId(null));
              dispatch(setProductName(null));
              dispatch(setMinPrice(null));
              dispatch(setMaxPrice(null));
              dispatch(setOrderBy(null));
              dispatch(setOrderDirection(null));
            }}
          >
            X Filtreleri Temizle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
