import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";

class basketService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "Baskets";
  }

  async getBasketIdByCustomerId(
    customerId: number
  ): Promise<AxiosResponse<any, number>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getBasketIdByCustomerId?customerId=" + customerId
    );
  }
}

export default new basketService();
