import { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { RegisterDto } from "../models/Auth/registerRequestBody";
import { LoginDto } from "../models/Auth/loginRequestBody";
import { ChangePasswordDto } from "../models/Auth/changePasswordBody";

class orderManagementService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "OrderManagements";
  }
  ///OrderManagements/completeOrder?customerId=11&deliveryAddressId=111

  completeOrder(
    customerId: number,
    deliveryAddressId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.post<any>(
      this.apiUrl +
        "/completeOrder?customerId=" +
        customerId +
        "&deliveryAddressId=" +
        deliveryAddressId
    );
  }
}

export default new orderManagementService();
