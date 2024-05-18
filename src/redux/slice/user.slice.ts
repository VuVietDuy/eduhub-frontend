import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user.type";

const initialState: User = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (action: PayloadAction<User>) => {
      console.log("actioc payload >>> ", action.payload);
      return action.payload;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = UserSlice.actions;

export default UserSlice.reducer;
