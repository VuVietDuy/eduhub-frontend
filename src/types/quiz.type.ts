export interface IQuiz {
  _id?: any;
  title: string;
  description: string;
  timeLimit: number;
  subjectId: string;
  assignedStatus: boolean;
  grade: number;
  imgUrl?: string;
  topic: string[];
  shuffleQuestion: boolean;
  shuffleAnswer: boolean;
  createdAt?: any;
  updatedAt?: any;
}

export interface IAnswer {
  id: number;
  content: string;
  isCorrect: boolean;
  explaination?: string;
  createdAt?: any;
  updatedAt?: any;
}

export interface IQuizPart {
  _id?: any;
  quizId: any;
  title: string;
  desc: string;
  createdAt?: any;
  updatedAt?: any;
}
export interface IQuestion {
  _id?: any;
  quiz?: IQuiz;
  order: number;
  point: number;
  partName?: string;
  type: string;
  content: string;
  image?: string;
  audio?: string;
  answerList?: IAnswer[];
  createdAt?: any;
  updatedAt?: any;
}
