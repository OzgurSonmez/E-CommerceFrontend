import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { getListBrandDto } from "../models/Brand/getListBrandDto";

class customerService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "Customers";
  }

  async getCustomerIdByEmailId(
    emailId: number
  ): Promise<AxiosResponse<any, number>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getCustomerIdByEmailId?emailId=" + emailId
    );
  }
}

export default new customerService();
