import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListCustomerOrderDto } from "../../models/CustomerOrder/getListCustomerOrderDto";

interface CustomerOrderState {
  customerOrders: getListCustomerOrderDto[];
  refreshData: boolean;
}

const initialState: CustomerOrderState = {
  customerOrders: [],
  refreshData: false,
};

const customerOrderSlice = createSlice({
  name: "customerOrder",
  initialState,
  reducers: {
    setCustomerOrders: (
      state,
      action: PayloadAction<getListCustomerOrderDto[]>
    ) => {
      state.customerOrders = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const customerOrderReducer = customerOrderSlice.reducer;
export const { setCustomerOrders, refreshData } = customerOrderSlice.actions;
