import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CustomerState {
  customerId: number | null;
  refreshData: boolean;
}

const initialState: CustomerState = {
  customerId: null,
  refreshData: false,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomerId: (state, action: PayloadAction<number | null>) => {
      state.customerId = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const customerReducer = customerSlice.reducer;
export const { setCustomerId, refreshData } = customerSlice.actions;
