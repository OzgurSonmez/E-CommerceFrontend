import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DeliveryAddressDto } from "../../models/DeliveryAddress/DeliveryAddressDto";

interface DeliveryAddressesState {
  deliveryAddresses: DeliveryAddressDto[];
  refreshData: boolean;
}

const initialState: DeliveryAddressesState = {
  deliveryAddresses: [],
  refreshData: false,
};

const deliveryAddressSlice = createSlice({
  name: "deliveryAddress",
  initialState,
  reducers: {
    setDeliveryAddresses: (
      state,
      action: PayloadAction<DeliveryAddressDto[]>
    ) => {
      state.deliveryAddresses = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const deliveryAddressReducer = deliveryAddressSlice.reducer;
export const { setDeliveryAddresses, refreshData } =
  deliveryAddressSlice.actions;
