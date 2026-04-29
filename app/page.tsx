// app/gre-question-of-day/page.tsx
import { Metadata } from "next";
import { getAllTopicQuestions, getDailyQuestion } from "@/lib/getDailyQuestion";
import QuestionClient from "./QuestionClient";

const today         = new Date();
const formattedDate = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
const isoDate       = today.toISOString().split("T")[0];

export const metadata: Metadata = {
  title: `GRE Question of the Day – ${formattedDate} | Free GRE Math Practice`,
  description: `Sharpen your GRE Quantitative Reasoning with today's free daily math question — updated every 24 hours. Covers all 23 GRE topics: arithmetic, algebra, geometry, data interpretation, and more.`,
  keywords: [
    "GRE question of the day", "GRE math practice", "GRE quantitative reasoning",
    "free GRE questions", "GRE prep", "GRE arithmetic", "GRE algebra", "GRE geometry",
    "quantitative comparison practice", "GRE numeric entry", "daily GRE quiz",
  ],
  openGraph: {
    title: `GRE Question of the Day – ${formattedDate}`,
    description: "Free daily GRE math practice. Sharpen your quantitative skills one question at a time.",
    type: "website",
    url: "https://yoursite.com/gre-question-of-day",
  },
  twitter: {
    card: "summary_large_image",
    title: `GRE Question of the Day – ${formattedDate}`,
    description: "Free daily GRE math practice question with full explanation.",
  },
  alternates: { canonical: "https://yoursite.com/gre-question-of-day" },
};

export default function GREQuestionOfTheDayPage() {
  const totalQuestions = 750
  const { question, topic, questionNumber } = getDailyQuestion();
  const allTopics = getAllTopicQuestions();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: `GRE Question of the Day – ${formattedDate}`,
    description: `Daily GRE math practice question from the topic: ${topic}`,
    datePublished: isoDate,
    educationalLevel: "Graduate",
    about: { "@type": "Thing", name: "GRE Quantitative Reasoning" },
    provider: { "@type": "Organization", name: "GRE Daily Prep" },
    hasPart: {
      "@type": "Question",
      name: question.text ?? `${topic} Practice Question`,
      educationalAlignment: {
        "@type": "AlignmentObject",
        alignmentType: "educationalSubject",
        targetName: topic,
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <QuestionClient
        question={question}
        topic={topic}
        questionNumber={questionNumber}
        totalQuestions={totalQuestions}
        formattedDate={formattedDate}
        allTopics={allTopics}
      />
    </>
  );
}