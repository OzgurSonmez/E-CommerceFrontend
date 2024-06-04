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
type Props = {};

const ProductFilter = (props: Props) => {
  const dispatch = useDispatch();

  // Categories -----------------------------

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

  // Brands ----------------------------------

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
                      value={category.categoryId} // Değişiklik: Kategori adını checkbox değeri olarak atadık
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
          />
          <input
            type="number"
            id="max-price"
            name="max-price"
            placeholder="Maksimum fiyat"
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
                <button>Fiyata göre artan</button>
              </li>
              <li>
                <button>Fiyata göre azalan</button>
              </li>

              <li>
                <button>İndirime göre artan</button>
              </li>
              <li>
                <button>İndirime göre azalan</button>
              </li>
              <li>
                <button>Favoriye göre artan</button>
              </li>
              <li>
                <button>Favoriye göre azalan</button>
              </li>
              <li>
                <button>Varsayılan</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
