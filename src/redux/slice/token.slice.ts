import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToken } from "../types/token.type";

const initialState: IToken = {
  accessToken: "",
};

const TokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (_, action: PayloadAction<IToken>) => {
      console.log(action.payload);
      return action.payload;
    },
    deleteToken: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, deleteToken } = TokenSlice.actions;

export default TokenSlice.reducer;
