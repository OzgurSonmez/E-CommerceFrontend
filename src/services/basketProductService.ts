import axios, { AxiosResponse } from "axios";
import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../interceptor/axiosInterceptor";
import { getListBasketProductDto } from "../models/BasketProduct/getListBasketProductDto";
import { AddProductToBasketRequest } from "../models/BasketProduct/addProductToBasketRequest";

class basketProductService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = BASE_API_URL + "BasketProducts";
  }

  async getBasketProductByCustomerId(
    customerId: number
  ): Promise<AxiosResponse<any, getListBasketProductDto>> {
    return axiosInstance.get<any>(
      this.apiUrl + "/getBasketProductByCustomerId?customerId=" + customerId
    );
  }

  addProductToBasket(
    requestBody: AddProductToBasketRequest
  ): Promise<AxiosResponse<AddProductToBasketRequest, any>> {
    return axiosInstance.post<any>(
      this.apiUrl +
        "/addProductToBasket?BasketId=" +
        requestBody.basketId +
        "&ProductId=" +
        requestBody.productId +
        "&ProductQuantity=" +
        requestBody.productQuantity +
        "&IsSelected=" +
        requestBody.isSelected
    );
  }

  deleteProductToBasket(
    basketId: number,
    productId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.post<any>(
      this.apiUrl +
        "/deleteProductToBasket?basketId=" +
        basketId +
        "&ProductId=" +
        productId
    );
  }

  decreaseProductToBasket(
    requestBody: AddProductToBasketRequest
  ): Promise<AxiosResponse<AddProductToBasketRequest, any>> {
    return axiosInstance.post<any>(
      this.apiUrl +
        "/decreaseProductToBasket?BasketId=" +
        requestBody.basketId +
        "&ProductId=" +
        requestBody.productId +
        "&ProductQuantity=" +
        requestBody.productQuantity +
        "&IsSelected=" +
        requestBody.isSelected
    );
  }

  reverseSelectedStatusOfTheProductInBasket(
    basketId: number,
    productId: number
  ): Promise<AxiosResponse<any, any>> {
    return axiosInstance.post<any>(
      this.apiUrl +
        "/reverseSelectedStatusOfTheProductInBasket?basketId=" +
        basketId +
        "&ProductId=" +
        productId
    );
  }

  async getSelectedBasketProductByCustomerId(
    customerId: number
  ): Promise<AxiosResponse<any, getListBasketProductDto>> {
    return axiosInstance.get<any>(
      this.apiUrl +
        "/getSelectedBasketProductByCustomerId?customerId=" +
        customerId
    );
  }
}

export default new basketProductService();
