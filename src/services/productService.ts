import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { FilteredProductRequestDto } from "../models/Product/filteredProductRequestDto";
import { getListFilteredProductDto } from "../models/Product/getListFilteredProductDto";

class productService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "Products";
  }

  //https://localhost:7157/api/Products/getFilteredProducts?CategoryId=1&BrandId=1&ProductName=a&MinPrice=15&MaxPrice=99999&OrderBy=price&OrderDirection=ascending

  async getFilteredProducts(
    filteredProductRequestDto: FilteredProductRequestDto
  ): Promise<AxiosResponse<any, getListFilteredProductDto>> {
    const {
      categoryId,
      brandId,
      productName,
      minPrice,
      maxPrice,
      orderBy,
      orderDirection,
    } = filteredProductRequestDto;

    const params = new URLSearchParams();
    if (categoryId !== null) params.append("CategoryId", categoryId.toString());
    if (brandId !== null) params.append("BrandId", brandId.toString());
    if (productName !== null) params.append("ProductName", productName);
    if (minPrice !== null) params.append("MinPrice", minPrice.toString());
    if (maxPrice !== null) params.append("MaxPrice", maxPrice.toString());
    if (orderBy !== null) params.append("OrderBy", orderBy);
    if (orderDirection !== null)
      params.append("OrderDirection", orderDirection);

    try {
      const response = await axios.get<any>(
        `${this.apiUrl}/getFilteredProducts`,
        { params }
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default new productService();
