import { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { RegisterDto } from "../models/Auth/registerRequestBody";

class authManagementService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "Auth";
  }

  register(requestBody: RegisterDto): Promise<AxiosResponse<RegisterDto, any>> {
    return axiosInstance.post<any>(this.apiUrl + "/register", requestBody);
  }
}

export default new authManagementService();
