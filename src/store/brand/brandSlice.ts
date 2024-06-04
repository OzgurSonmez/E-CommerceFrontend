import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListBrandDto } from "../../models/Brand/getListBrandDto";

interface BrandState {
  brands: getListBrandDto[];
  refreshData: boolean;
}

const initialState: BrandState = {
  brands: [],
  refreshData: false,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<getListBrandDto[]>) => {
      state.brands = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const brandReducer = brandSlice.reducer;
export const { setBrands, refreshData } = brandSlice.actions;
