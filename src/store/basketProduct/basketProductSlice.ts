import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListBasketProductDto } from "../../models/BasketProduct/getListBasketProductDto";

interface BasketProductState {
  basketProducts: getListBasketProductDto[];
  refreshData: boolean;
}

const initialState: BasketProductState = {
  basketProducts: [],
  refreshData: false,
};

const basketProductSlice = createSlice({
  name: "basketProduct",
  initialState,
  reducers: {
    setBasketProducts: (
      state,
      action: PayloadAction<getListBasketProductDto[]>
    ) => {
      state.basketProducts = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const basketProductReducer = basketProductSlice.reducer;
export const { setBasketProducts, refreshData } = basketProductSlice.actions;
