import React from 'react';
import {QuizCard} from './components/QuizCard';

export default function Quizzes() {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
      </div>
    </div>
  );
}
