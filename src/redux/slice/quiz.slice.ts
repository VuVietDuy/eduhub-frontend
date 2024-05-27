import { fetcher } from "@/api/fetcher";
import { IQuestion, IQuizPart, IQuiz } from "@/types/quiz.type";
import {
  current,
  createSlice,
  PayloadAction,
  nanoid,
  AsyncThunk,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

interface QuizState {
  quizList: IQuiz[];
  editingQuiz: IQuiz | null;
  quizPartList: IQuizPart[];
  editingQuizPart: IQuizPart | null;
  questionList: IQuestion[];
  editingQuestion: IQuestion | null;
  questionPartList: IQuizPart[];
}

const initialState: QuizState = {
  quizList: [],
  editingQuiz: null,
  questionList: [],
  editingQuestion: null,
  questionPartList: [],
  quizPartList: [],
  editingQuizPart: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuiz: (state, action: PayloadAction<IQuiz>) => {
      // console.log(action.payload);
      state.quizList.push(action.payload);
    },
    deleteQuiz: (state, action: PayloadAction<string>) => {
      const quizId = action.payload;
      const foundQuizIndex = state.quizList.findIndex(
        (quiz) => quiz._id === quizId
      );
      if (foundQuizIndex !== -1) {
        state.quizList.splice(foundQuizIndex, 1);
      }
    },
    startEditingQuiz: (state, action: PayloadAction<string>) => {
      const quizId = action.payload;
      const foundQuiz =
        state.quizList.find((quiz) => quiz._id === quizId) || null;
      state.editingQuiz = foundQuiz;
    },
    cancelEditingQuiz: (state) => {
      state.editingQuiz = null;
    },
    finishEditingQuiz: (state, action: PayloadAction<IQuiz>) => {
      const quizId = action.payload._id;
      state.quizList.some((quiz, index) => {
        if (quiz._id === quizId) {
          state.quizList[index] = action.payload;
          return true;
        }
        return false;
      });
      // state.editingQuiz = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("quizzes/getQuizzesSuccess", (state, action: any) => {
        state.quizList = action.payload;
      })
      .addCase("quizPart/getQuizPartSuccess", (state, action: any) => {
        state.quizPartList = action.payload;
      })
      .addCase("quizPart/addQuizPart", (state, action: any) => {
        state.quizPartList.push(action.payload);
      })
      .addCase("quizPart/deleteQuizPart", (state, action: any) => {
        const quizPartId = action.payload;
        const foundQuizPartIndex = state.quizList.findIndex(
          (quizPart) => quizPart._id === quizPartId
        );
        if (foundQuizPartIndex !== -1) {
          state.quizPartList.splice(foundQuizPartIndex, 1);
        }
      })
      .addCase("quizPart/startEditQuizPart", (state, action: any) => {
        const quizPartId = action.payload;
        const foundQuiz =
          state.quizPartList.find((quizPart) => quizPart._id === quizPartId) ||
          null;
        state.editingQuizPart = foundQuiz;
      })
      .addCase("quizPart/cancelEditQuizPart", (state, action: any) => {
        state.editingQuiz = null;
      })
      .addCase("quizPart/finishEditQuizPart", (state, action: any) => {
        const quizPartId = action.payload._id;
        state.quizPartList.some((quizPart, index) => {
          if (quizPart._id === quizPartId) {
            state.quizList[index] = action.payload;
            return true;
          }
          return false;
        });
      });
    // builder.addCase(addPost, (state, action) => {
    //   state.questionList.push(action.payload);
    // });
  },
});

// Action creators are generated for each case reducer function
export const {
  addQuiz,
  deleteQuiz,
  startEditingQuiz,
  cancelEditingQuiz,
  finishEditingQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
