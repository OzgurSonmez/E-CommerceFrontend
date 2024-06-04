import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListCustomerProductFavoriteDto } from "../../models/CustomerProductFavorite/getListCustomerProductFavoriteDto";

interface CustomerProductFavoriteState {
  customerProductsFavorite: getListCustomerProductFavoriteDto[];
  refreshData: boolean;
}

const initialState: CustomerProductFavoriteState = {
  customerProductsFavorite: [],
  refreshData: false,
};

const customerProductFavoriteSlice = createSlice({
  name: "customerProductFavorite",
  initialState,
  reducers: {
    setCustomerProductsFavorite: (
      state,
      action: PayloadAction<getListCustomerProductFavoriteDto[]>
    ) => {
      state.customerProductsFavorite = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const customerProductFavoriteReducer =
  customerProductFavoriteSlice.reducer;
export const { setCustomerProductsFavorite, refreshData } =
  customerProductFavoriteSlice.actions;
