export interface AddProductToBasketRequest {
  basketId: number | null;
  productId: number;
  productQuantity: number;
  isSelected: number;
}
