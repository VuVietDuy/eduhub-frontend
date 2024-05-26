export interface ITest {
  name: string;
  desc?: string;
  avatar?: string;
  subject: string;
  topic?: string;
  status: string;
  questionPart: IQuestion[];
}

export interface IAnswer {
  id: number;
  content: string;
  isCorrect: boolean;
  explaination?: string;
}

export interface IQuestionPart {
  title: string;
  desc: string;
}
export interface IQuestion {
  test?: ITest;
  order: number;
  point: number;
  partName?: string;
  type: string;
  content: string;
  image?: string;
  audio?: string;
  answerList?: IAnswer[];
}
