import { IQuestion } from "./question.type";

export interface ITest {
  name: string;
  desc?: string;
  avatar?: string;
  subject: string;
  topic?: string;
  status: string;
  questionList: IQuestion[];
}
