import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { getListCategoryDto } from "../models/Category/getListCategoryDto";

class categoryService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "Categories";
  }

  async getCategories(): Promise<AxiosResponse<any, getListCategoryDto>> {
    return axiosInstance.get<any>(this.apiUrl + "/getCategories");
  }
}

export default new categoryService();
