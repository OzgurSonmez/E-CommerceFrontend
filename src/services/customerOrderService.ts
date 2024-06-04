import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { getListCustomerOrderDto } from "../models/CustomerOrder/getListCustomerOrderDto";

class customerOrderService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "CustomerOrders";
  }

  async getCustomerOrderByCustomerId(
    customerId: number
  ): Promise<AxiosResponse<any, getListCustomerOrderDto>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getCustomerOrderByCustomerId?customerId=" + customerId
    );
  }
}

export default new customerOrderService();
