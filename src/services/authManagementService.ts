import { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { RegisterDto } from "../models/Auth/registerRequestBody";
import { LoginDto } from "../models/Auth/loginRequestBody";
import { ChangePasswordDto } from "../models/Auth/changePasswordBody";

class authManagementService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "Auth";
  }

  register(requestBody: RegisterDto): Promise<AxiosResponse<RegisterDto, any>> {
    return axiosInstance.post<any>(this.apiUrl + "/register", requestBody);
  }

  login(requestBody: LoginDto): Promise<AxiosResponse<LoginDto, any>> {
    return axiosInstance.post<any>(this.apiUrl + "/login", requestBody);
  }

  changePassword(
    requestBody: ChangePasswordDto
  ): Promise<AxiosResponse<ChangePasswordDto, any>> {
    return axiosInstance.post<any>(
      this.apiUrl + "/changePassword",
      requestBody
    );
  }
}

export default new authManagementService();
