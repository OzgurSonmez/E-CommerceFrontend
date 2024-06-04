import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { getListBasketProductDto } from "../models/BasketProduct/getListBasketProductDto";

class basketProductService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "BasketProduct";
  }

  async getBasketProductByCustomerId(
    customerId: number
  ): Promise<AxiosResponse<any, getListBasketProductDto>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getBasketProductByCustomerId?customerId=" + customerId
    );
  }
}

export default new basketProductService();
