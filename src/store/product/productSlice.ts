import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListFilteredProductDto } from "../../models/Product/getListFilteredProductDto";

interface ProductState {
  products: getListFilteredProductDto[];
  refreshData: boolean;
}

const initialState: ProductState = {
  products: [],
  refreshData: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilteredProducts: (
      state,
      action: PayloadAction<getListFilteredProductDto[]>
    ) => {
      state.products = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const productReducer = productSlice.reducer;
export const { setFilteredProducts, refreshData } = productSlice.actions;
