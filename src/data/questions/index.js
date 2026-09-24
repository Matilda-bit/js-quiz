import javascriptQuestions from './javascriptQuestions.js';
import { OKTOPOST_QUESTIONS } from './oktopostQuestions.js';

const normalizedJavascriptQuestions = javascriptQuestions.map((question) => ({
  ...question,

  id: `javascript-${question.id}`,

  type: 'multiple-choice',
  topicId: 'javascript',

  source: 'legacy-quiz',

  difficulty: question.difficulty || 'medium',

  tags: question.tags || [],

  interviewIds: question.interviewIds || [],
}));

export const QUESTIONS = [
  ...normalizedJavascriptQuestions,
  ...OKTOPOST_QUESTIONS,
];

export const MULTIPLE_CHOICE_QUESTIONS = QUESTIONS.filter(
  (question) => question.type === 'multiple-choice'
);

export const getQuestionsByTopic = (topicId) =>
  QUESTIONS.filter((question) => question.topicId === topicId);