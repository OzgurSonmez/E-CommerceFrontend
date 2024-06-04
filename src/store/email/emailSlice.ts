import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EmailState {
  emailId: number | null;
  refreshData: boolean;
}

const initialState: EmailState = {
  emailId: null,
  refreshData: false,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmailId: (state, action: PayloadAction<number | null>) => {
      state.emailId = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const emailReducer = emailSlice.reducer;
export const { setEmailId, refreshData } = emailSlice.actions;
