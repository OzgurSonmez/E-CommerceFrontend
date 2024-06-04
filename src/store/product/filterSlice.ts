// store/filter/filterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  categoryId: number | null;
  brandId: number | null;
  productName: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  orderBy: string | null;
  orderDirection: string | null;
}

const initialState: FilterState = {
  categoryId: null,
  brandId: null,
  productName: null,
  minPrice: null,
  maxPrice: null,
  orderBy: null,
  orderDirection: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number | null>) {
      state.categoryId = action.payload;
    },
    setBrandId(state, action: PayloadAction<number | null>) {
      state.brandId = action.payload;
    },
    setProductName(state, action: PayloadAction<string | null>) {
      state.productName = action.payload;
    },
    setMinPrice(state, action: PayloadAction<number | null>) {
      state.minPrice = action.payload;
    },
    setMaxPrice(state, action: PayloadAction<number | null>) {
      state.maxPrice = action.payload;
    },
    setOrderBy(state, action: PayloadAction<string | null>) {
      state.orderBy = action.payload;
    },
    setOrderDirection(state, action: PayloadAction<string | null>) {
      state.orderDirection = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const {
  setCategoryId,
  setBrandId,
  setProductName,
  setMinPrice,
  setMaxPrice,
  setOrderBy,
  setOrderDirection,
} = filterSlice.actions;
