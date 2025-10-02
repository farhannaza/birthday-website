"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, CheckCircle2, XCircle } from "lucide-react"

const quizQuestions = [
  {
    question: "Where did we have our first date?",
    options: ["Coffee shop", "Restaurant", "Park", "Movies"],
    correct: 0,
  },
  {
    question: "What's my favorite thing about you?",
    options: ["Your smile", "Your laugh", "Your kindness", "Everything"],
    correct: 3,
  },
  {
    question: "What song reminds me of you?",
    options: ["Song A", "Song B", "Song C", "Song D"],
    correct: 1,
  },
  {
    question: "What was the first movie we watched together?",
    options: ["Movie A", "Movie B", "Movie C", "Movie D"],
    correct: 2,
  },
  {
    question: "What's our special place?",
    options: ["The beach", "The park", "That café", "Everywhere with you"],
    correct: 3,
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  const handleAnswer = (index: number) => {
    if (answered) return

    setSelectedAnswer(index)
    setAnswered(true)

    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswered(false)
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story Quiz</h1>
          <p className="text-xl text-muted-foreground">Let's see how well you remember our journey!</p>
        </div>

        {!showResult ? (
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-primary">
                  Question {currentQuestion + 1} of {quizQuestions.length}
                </span>
                <span className="text-sm font-semibold text-muted-foreground">
                  Score: {score}/{quizQuestions.length}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-8">{quizQuestions[currentQuestion].question}</h2>

            <div className="space-y-4 mb-8">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                    answered
                      ? index === quizQuestions[currentQuestion].correct
                        ? "border-green-500 bg-green-500/10"
                        : index === selectedAnswer
                          ? "border-red-500 bg-red-500/10"
                          : "border-border bg-card"
                      : "border-border bg-card hover:border-primary hover:bg-accent"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{option}</span>
                    {answered && index === quizQuestions[currentQuestion].correct && (
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    )}
                    {answered && index === selectedAnswer && index !== quizQuestions[currentQuestion].correct && (
                      <XCircle className="w-6 h-6 text-red-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {answered && (
              <Button onClick={handleNext} className="w-full" size="lg">
                {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
              </Button>
            )}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center space-y-8">
            <Heart className="w-24 h-24 text-primary mx-auto animate-pulse" fill="currentColor" />
            <h2 className="text-4xl font-bold">Quiz Complete!</h2>
            <div className="space-y-4">
              <p className="text-6xl font-bold text-primary">
                {score}/{quizQuestions.length}
              </p>
              <p className="text-2xl">
                {score === quizQuestions.length
                  ? "Perfect! You remember everything! 💜"
                  : score >= quizQuestions.length / 2
                    ? "Great job! You know our story well! 💜"
                    : "That's okay! Every moment with you is unforgettable to me! 💜"}
              </p>
            </div>
            <Button onClick={resetQuiz} size="lg">
              Try Again
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
