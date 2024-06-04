import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListBasketProductDto } from "../../models/BasketProduct/getListBasketProductDto";

interface BasketProductState {
  basketProducts: getListBasketProductDto[];
  selectedBasketProducts: getListBasketProductDto[];
  refreshData: boolean;
}

const initialState: BasketProductState = {
  basketProducts: [],
  selectedBasketProducts: [],
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
    setSelectedBasketProducts: (
      state,
      action: PayloadAction<getListBasketProductDto[]>
    ) => {
      state.selectedBasketProducts = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const basketProductReducer = basketProductSlice.reducer;
export const { setBasketProducts, setSelectedBasketProducts, refreshData } =
  basketProductSlice.actions;
