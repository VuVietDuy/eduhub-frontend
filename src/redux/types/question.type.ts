import { ITest } from "./test.type";

export interface IAnswer {
  id: number;
  content: string;
  isCorrect: boolean;
}
export interface IQuestion {
  test?: ITest;
  order: number;
  questionPart?: {
    partName: string;
    partDesc: string;
  };
  type: string;
  content: string;
  image?: string;
  audio?: string;
  answerList?: IAnswer[];
}
