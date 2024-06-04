import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { getListCustomerOrderDetailDto } from "../models/CustomerOrderDetail/getListCustomerOrderDetailDto";

class customerOrderDetailService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "CustomerOrderDetails";
  }

  async getCustomerOrderDetailByCustomerOrderId(
    customerOrderId: number
  ): Promise<AxiosResponse<any, getListCustomerOrderDetailDto>> {
    return axiosInstance.get<any>(
      this.apiUrl +
        "/getCustomerOrderByCustomerId?customerOrderId=" +
        customerOrderId
    );
  }
}

export default new customerOrderDetailService();
