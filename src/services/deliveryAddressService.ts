import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { DeliveryAddressDto } from "../models/DeliveryAddress/DeliveryAddressDto";

class deliveryAddressService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "DeliveryAddresses";
  }

  async getDeliveryAddresses(
    customerId: number
  ): Promise<AxiosResponse<any, DeliveryAddressDto>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getDeliveryAddressesByCustomerId?customerId=" + customerId
    );
  }
}

export default new deliveryAddressService();
