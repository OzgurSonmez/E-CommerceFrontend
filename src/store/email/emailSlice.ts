import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface EmailState {
  emailId: number | null;
  emailAddress: string | null;
  refreshData: boolean;
}

const initialState: EmailState = {
  emailId: null,
  emailAddress: "",
  refreshData: false,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setEmailId: (state, action: PayloadAction<number | null>) => {
      state.emailId = action.payload;
    },
    setEmailAddress: (state, action: PayloadAction<string | null>) => {
      state.emailAddress = action.payload;
    },
    refreshData: (state) => {
      state.refreshData = !state.refreshData;
    },
  },
});

export const emailReducer = emailSlice.reducer;
export const { setEmailId, setEmailAddress, refreshData } = emailSlice.actions;
