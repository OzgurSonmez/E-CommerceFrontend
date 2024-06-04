import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { getListCustomerProductFavoriteDto } from "../models/CustomerProductFavorite/getListCustomerProductFavoriteDto";

class customerProductFavoriteService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "customerProductFavorites";
  }

  addProductToFavorite(
    customerId: number,
    productId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.post<any>(
      this.apiUrl +
        "/addProductToFavorite?customerId=" +
        customerId +
        "&productId=" +
        productId
    );
  }

  removeProductToFavorite(
    customerId: number,
    productId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.post<any>(
      this.apiUrl +
        "/removeProductFromFavorite?customerId=" +
        customerId +
        "&productId=" +
        productId
    );
  }

  async getCustomerProductFavorite(
    customerId: number
  ): Promise<AxiosResponse<any, getListCustomerProductFavoriteDto>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getCustomerProductFavorite?customerId=" + customerId
    );
  }
}

export default new customerProductFavoriteService();
