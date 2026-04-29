// TYPES
export type QuestionType =
  | "quantitative_comparison"
  | "numeric_entry"
  | "multiple_choice"
  | "select_all"
  | string;

export interface Question {
  id: string;
  number: number;
  type: QuestionType;
  text?: string;
  context?: string;
  quantity_a?: string;
  quantity_b?: string;
  options?: Record<string, string> | string[];
  answer: string | string[] | number;
  explanation: string;
  image?: string;
}

export interface TopicBank {
  topic: string;
  source?: string;
  chapter: number;
  total_questions?: number;
  questions: Question[];
  quantitative_comparison_instructions?: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

import { Algebra } from "./questions/Algebra";
import { Arithmetic } from "./questions/Arithmetic";
import { Averages } from "./questions/averages";
import { Circles } from "./questions/circles";
import { CoordinateGeometry } from "./questions/coordinate_geometry";
import { DataInterpretation } from "./questions/data_interpretation";
import { DivisibilityPrimes } from "./questions/divisibility_primes";
import { exponents_roots } from "./questions/exponents_roots";
import { fractions_decimals } from "./questions/fractions_decimals";
import { Functions } from "./questions/functions";
import { Inequalities } from "./questions/inequalities";
import { MixedGeometry } from "./questions/mixed_geometry";
import { NumberProperties } from "./questions/number_properties";
import { Percents } from "./questions/percents";
import { Polygons } from "./questions/polygons";
import { Probability } from "./questions/probability";
import { RatesWork } from "./questions/rates_work";
import { Ratios } from "./questions/ratios";
import { StandardDeviation } from "./questions/standard_deviation";
import { Triangles } from "./questions/triangles";
import { TwoVariableWordProblems } from "./questions/two_variable_word_problems";
import { VariablesInChoices } from "./questions/variables_in_choices";
import { WordProblems } from "./questions/word_problems";

// 🔥 ADD ALL TOPICS HERE
const ALL_BANKS: TopicBank[] = [
  Arithmetic,
  Algebra,
  Averages,
  Circles,
  CoordinateGeometry,
  DataInterpretation,
  DivisibilityPrimes,
  exponents_roots,
  fractions_decimals,
  Functions,
  Inequalities,
  MixedGeometry,
  NumberProperties,
  Percents,
  Polygons,
  Probability,
  RatesWork,
  Ratios,
  StandardDeviation,
  Triangles,
  TwoVariableWordProblems,
  VariablesInChoices,
  WordProblems
];

// 🧠 STEP 1: DAY INDEX
function getDayIndex(): number {
  const now = new Date();
  const epoch = new Date(Date.UTC(2025, 0, 1));
  const utcNow = new Date(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  );

  return Math.floor(
    (utcNow.getTime() - epoch.getTime()) / 86_400_000
  );
}

// 🧠 STEP 2: PICK TOPIC
function getDailyTopic(dayIndex: number): TopicBank {
  const topicIndex = dayIndex % ALL_BANKS.length;
  return ALL_BANKS[topicIndex];
}

// 🧠 STEP 3: PICK QUESTION INSIDE TOPIC
function getQuestionFromTopic(
  topic: TopicBank,
  dayIndex: number
): Question {
  const questionIndex =
    Math.floor(dayIndex / ALL_BANKS.length) %
    topic.questions.length;

  return topic.questions[questionIndex];
}

// 🚀 FINAL FUNCTION
export function getDailyQuestion() {
  const dayIndex = getDayIndex();

  const topicBank = getDailyTopic(dayIndex);
  const question = getQuestionFromTopic(topicBank, dayIndex);

  return {
    question,
    topic: topicBank.topic,
    topicChapter: topicBank.chapter,
    totalQuestionsInTopic: topicBank.total_questions ?? topicBank.questions.length,
    questionNumber: question.number,
  };
}

// 📊 OPTIONAL: GET ALL TOPICS (for UI)
export function getAllTopicQuestions() {
  return ALL_BANKS.map((b) => ({
    topic: b.topic,
    count: b.total_questions ?? b.questions.length,
  }));
}