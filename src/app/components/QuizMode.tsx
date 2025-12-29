import { useState } from 'react';
import { GrammarTopic } from '../data/grammarData';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check, X, RotateCcw } from 'lucide-react';

interface QuizModeProps {
  topic: GrammarTopic;
  isUkrainian: boolean;
  onComplete: (score: number) => void;
}

export function QuizMode({ topic, isUkrainian, onComplete }: QuizModeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = topic.quizQuestions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < topic.quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
      const finalScore = Math.round((score / topic.quizQuestions.length) * 100);
      onComplete(finalScore);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / topic.quizQuestions.length) * 100);
    return (
      <Card className="p-10 text-center bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-xl">
        <div className="mb-8">
          <div className="text-8xl mb-6 animate-bounce">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '💪'}
          </div>
          <h2 className="mb-4 text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {isUkrainian ? 'Вікторину завершено!' : 'Quiz Completed!'}
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-4 inline-block">
            <p className="text-gray-600 mb-2">
              {isUkrainian ? 'Ваш результат:' : 'Your Score:'}
            </p>
            <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {score}/{topic.quizQuestions.length}
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-2xl font-bold text-gray-700">{percentage}%</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {percentage >= 80 && (
            <p className="text-emerald-600 text-lg font-semibold bg-emerald-50 py-3 px-6 rounded-xl">
              {isUkrainian ? '🌟 Відмінно! Ви чудово знаєте цю тему!' : '🌟 Excellent! You mastered this topic!'}
            </p>
          )}
          {percentage >= 60 && percentage < 80 && (
            <p className="text-blue-600 text-lg font-semibold bg-blue-50 py-3 px-6 rounded-xl">
              {isUkrainian ? '👏 Добре! Продовжуйте практикуватись!' : '👏 Good job! Keep practicing!'}
            </p>
          )}
          {percentage < 60 && (
            <p className="text-orange-600 text-lg font-semibold bg-orange-50 py-3 px-6 rounded-xl">
              {isUkrainian ? '💪 Не здавайтесь! Спробуйте ще раз!' : '💪 Don\'t give up! Try again!'}
            </p>
          )}
        </div>

        <Button onClick={handleRestart} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg">
          <RotateCcw className="w-5 h-5 mr-2" />
          {isUkrainian ? 'Спробувати знову' : 'Try Again'}
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {isUkrainian ? 'Питання' : 'Question'} {currentQuestion + 1}/{topic.quizQuestions.length}
        </div>
        <div className="text-sm">
          {isUkrainian ? 'Правильних:' : 'Score:'} {score}
        </div>
      </div>

      <Card className="p-6">
        <h3 className="mb-2">
          {isUkrainian ? question.questionUk : question.question}
        </h3>
        
        <div className="space-y-3 mt-6">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctAnswer;
            const isSelected = index === selectedAnswer;
            
            let buttonClass = 'w-full justify-start text-left h-auto py-4 px-4';
            
            if (showExplanation) {
              if (isCorrect) {
                buttonClass += ' bg-green-100 border-green-500 text-green-900 hover:bg-green-100';
              } else if (isSelected && !isCorrect) {
                buttonClass += ' bg-red-100 border-red-500 text-red-900 hover:bg-red-100';
              } else {
                buttonClass += ' opacity-50';
              }
            }

            return (
              <Button
                key={index}
                variant={isSelected && !showExplanation ? 'default' : 'outline'}
                className={buttonClass}
                onClick={() => !showExplanation && handleAnswer(index)}
                disabled={showExplanation}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{option}</span>
                  {showExplanation && (
                    <>
                      {isCorrect && <Check className="w-5 h-5 text-green-600" />}
                      {isSelected && !isCorrect && <X className="w-5 h-5 text-red-600" />}
                    </>
                  )}
                </div>
              </Button>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-900">
              {isUkrainian ? question.explanationUk : question.explanation}
            </p>
          </div>
        )}
      </Card>

      {showExplanation && (
        <Button onClick={handleNext} className="w-full">
          {currentQuestion < topic.quizQuestions.length - 1
            ? (isUkrainian ? 'Наступне питання' : 'Next Question')
            : (isUkrainian ? 'Завершити' : 'Finish')}
        </Button>
      )}
    </div>
  );
}