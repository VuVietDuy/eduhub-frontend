import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBreadcrumd } from "../types/breadcrumd.type";

const initialState: IBreadcrumd = {
  segments: [],
};

const BreadcrumdSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setSegment: (_, action: PayloadAction<IBreadcrumd>) => {
      return action.payload;
    },
    deleteSegment: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSegment, deleteSegment } = BreadcrumdSlice.actions;

export default BreadcrumdSlice.reducer;
