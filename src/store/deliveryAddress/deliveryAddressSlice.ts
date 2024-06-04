import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DeliveryAddressDto } from "../../models/DeliveryAddress/DeliveryAddressDto";

interface DeliveryAddressesState {
  deliveryAddresses: DeliveryAddressDto[];
  selectedDeliveryAddress: number | null;
  refreshData: boolean;
}

const initialState: DeliveryAddressesState = {
  deliveryAddresses: [],
  selectedDeliveryAddress: 0,
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
    setSelectedDeliveryAddress: (state, action: PayloadAction<number>) => {
      state.selectedDeliveryAddress = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const deliveryAddressReducer = deliveryAddressSlice.reducer;
export const { setDeliveryAddresses, setSelectedDeliveryAddress, refreshData } =
  deliveryAddressSlice.actions;
