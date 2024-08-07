import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";

class emailService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "Emails";
  }

  async getEmailIdByEmailAddress(
    emailAddress: string
  ): Promise<AxiosResponse<any, number>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getEmailIdByEmailAddress?emailAddress=" + emailAddress
    );
  }
}

export default new emailService();
