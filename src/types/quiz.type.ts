export interface IQuiz {
  title: string;
  description: string;
  timeLimit: number;
  subjectId: string;
  grade: number;
  imgUrl?: string;
  quizParts: any;
  topic: string[];
  shuffleQuestion: boolean;
  shuffleAnswer: boolean;
  assignedStatus: boolean;
}
