export { type Question } from './data/motoquestions';

export interface ExamAttempt {
  id: string;
  date: string;
  mode: string;
  score: number;
  totalQuestions: number;
  strikes: number;
  status: 'PASSED' | 'FAILED' | 'COMPLETED';
  permitType?: 'motorcycle' | 'classD' | 'cdl';
}

export type QuizMode = 'exam' | 'marathon' | 'controls' | 'lanes' | 'laws';
export type AppView = 'home' | 'quiz' | 'stats' | 'disclaimer';
export type PermitType = 'motorcycle' | 'classD' | 'cdl';
