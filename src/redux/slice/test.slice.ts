import { current, createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
// import { initQuestionList } from "../constants/question";
import { IQuestion, IQuestionPart, ITest } from "../types/test.type";

interface TestState {
  testList: ITest[];
  questionList: IQuestion[];
  editingQuestion: IQuestion | null;
  questionPartList: IQuestionPart[];
}

const initialState: TestState = {
  testList: [],
  questionList: [],
  editingQuestion: null,
  questionPartList: [],
};
const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addQuestionPart: (state, action: PayloadAction<IQuestionPart>) => {
      // console.log(action.payload);
      state.questionPartList.push(action.payload);
    },

    // addPost: {
    //   reducer: (state, action: PayloadAction<IQuestion>) => {
    //     const question = action.payload
    //     state.questionList.push(question)
    //   },
    //   prepare: (post: Omit<Post, 'id'>) => ({
    //     payload: {
    //       ...post,
    //       id: nanoid()
    //     }
    //   })
    // }
  },
});

// Action creators are generated for each case reducer function
export const {} = testSlice.actions;

export default testSlice.reducer;
