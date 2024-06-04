import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { getListBrandDto } from "../models/Brand/getListBrandDto";

class brandService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "Brands";
  }

  async getBrands(): Promise<AxiosResponse<any, getListBrandDto>> {
    return axiosInstance.get<any>(this.apiUrl + "/getBrands");
  }
}

export default new brandService();
