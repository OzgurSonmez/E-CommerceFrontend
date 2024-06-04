import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListCategoryDto } from "../../models/Category/getListCategoryDto";

interface CategoryState {
  categories: getListCategoryDto[];
  refreshData: boolean;
}

const initialState: CategoryState = {
  categories: [],
  refreshData: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<getListCategoryDto[]>) => {
      state.categories = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const categoryReducer = categorySlice.reducer;
export const { setCategories, refreshData } = categorySlice.actions;
