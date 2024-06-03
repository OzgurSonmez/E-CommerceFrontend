export interface FilteredProductRequestDto {
  categoryId: number | null;
  brandId: number | null;
  productName: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  orderBy: string | null;
  orderDirection: string | null;
}
