import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion } from "../types/question.type";
import { initQuestionList } from "../constants/question";

interface QuestionState {
  questionList: IQuestion[];
  editingQuestion: IQuestion | null;
}

const initialState: QuestionState = {
  questionList: initQuestionList,
  editingQuestion: null,
};
const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
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
export const {} = questionSlice.actions;

export default questionSlice.reducer;
