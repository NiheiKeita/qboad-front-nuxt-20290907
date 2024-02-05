import { Question } from '@/types/question';
import { User } from '@/types/user';
export function testQuestions() {
  const questions: Array<Question> = [
    {
      id: 1,
      created_at: formatDate(Date.now()),
      name: '解答１',
      question_title: '算数の問題',
      question_body: '1+1は？',
      user: <User>{
        id: 1,
        created_at: 'string',
        name: 'nihei',
        posts_number: 1,
        likes_number: 1,
        answers_number: 1,
        followers_number: 1,
        follows_number: 1,
      },
      answers: [
        { id: 1, name: '解答１', is_correct: true },
        { id: 2, name: '解答２', is_correct: false },
        { id: 3, name: '解答３', is_correct: false },
      ],
    },
    {
      id: 1,
      created_at: formatDate(Date.now()),
      name: '解答１',
      question_title: 'question_title',
      question_body: 'question_body',
      user: <User>{
        id: 1,
        created_at: 'string',
        name: 'nihei',
        posts_number: 1,
        likes_number: 1,
        answers_number: 1,
        followers_number: 1,
        follows_number: 1,
      },
      answers: [
        { id: 1, name: '解答１', is_correct: true },
        { id: 2, name: '解答２', is_correct: false },
        { id: 3, name: '解答３', is_correct: false },
      ],
    },
    {
      id: 1,
      created_at: formatDate(Date.now()),
      name: '解答１',
      question_title: 'question_title',
      question_body: 'question_body',
      user: <User>{
        id: 1,
        created_at: 'string',
        name: 'nihei',
        posts_number: 1,
        likes_number: 1,
        answers_number: 1,
        followers_number: 1,
        follows_number: 1,
      },
      answers: [
        { id: 1, name: '解答１', is_correct: true },
        { id: 2, name: '解答２', is_correct: false },
        { id: 3, name: '解答３', is_correct: false },
      ],
    },
  ];

  return questions;
}
