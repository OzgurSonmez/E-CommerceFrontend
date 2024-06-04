import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getListCustomerOrderDetailDto } from "../../models/CustomerOrderDetail/getListCustomerOrderDetailDto";

interface CustomerOrderDetailState {
  customerOrderDetails: getListCustomerOrderDetailDto[];
  refreshData: boolean;
}

const initialState: CustomerOrderDetailState = {
  customerOrderDetails: [],
  refreshData: false,
};

const customerOrderDetailSlice = createSlice({
  name: "customerOrderDetail",
  initialState,
  reducers: {
    setCustomerOrderDetails: (
      state,
      action: PayloadAction<getListCustomerOrderDetailDto[]>
    ) => {
      state.customerOrderDetails = action.payload;
    },

    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const customerOrderDetailReducer = customerOrderDetailSlice.reducer;
export const { setCustomerOrderDetails, refreshData } =
  customerOrderDetailSlice.actions;
