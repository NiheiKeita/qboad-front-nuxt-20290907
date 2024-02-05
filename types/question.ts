import { Answer } from '@/types/answer';
import { User } from '@/types/user';
export type Question = {
  id: number;
  created_at: string;
  name: string | null;
  question_body: string | null;
  question_title: string | null;
  user: User;
  answers: Array<Answer>;
};
