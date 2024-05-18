import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user.type";

// const initUser: User = {
//   firstName: "",
//   lastName: "",
//   dateOfBirth: "",
// };
interface UserState {
  user: {};
}

const initialState: UserState = {
  user: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<any>) => {
      console.log("action payload >>> ", action.payload);
      state.user = action.payload;
      // return action.payload;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
