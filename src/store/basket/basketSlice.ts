import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BasketState {
  basketId: number | null;
  refreshData: boolean;
}

const initialState: BasketState = {
  basketId: null,
  refreshData: false,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasketId: (state, action: PayloadAction<number | null>) => {
      state.basketId = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const basketReducer = basketSlice.reducer;
export const { setBasketId, refreshData } = basketSlice.actions;
