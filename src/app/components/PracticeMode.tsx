import { useState } from 'react';
import { GrammarTopic } from '../data/grammarData';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check, X, RotateCcw } from 'lucide-react';

interface PracticeModeProps {
  topic: GrammarTopic;
  isUkrainian: boolean;
  onComplete: (score: number) => void;
}

export function PracticeMode({ topic, isUkrainian, onComplete }: PracticeModeProps) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const exercise = topic.practiceExercises[currentExercise];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    if (answer === exercise.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentExercise < topic.practiceExercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setCompleted(true);
      const finalScore = Math.round((score / topic.practiceExercises.length) * 100);
      onComplete(finalScore);
    }
  };

  const handleRestart = () => {
    setCurrentExercise(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / topic.practiceExercises.length) * 100);
    return (
      <Card className="p-8 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? '🎊' : percentage >= 60 ? '😊' : '📚'}
          </div>
          <h2 className="mb-2">
            {isUkrainian ? 'Практику завершено!' : 'Practice Completed!'}
          </h2>
          <p className="text-2xl mb-2">
            {isUkrainian ? 'Правильних відповідей:' : 'Correct Answers:'} {score}/{topic.practiceExercises.length}
          </p>
          <p className="text-xl text-gray-600">{percentage}%</p>
        </div>

        <Button onClick={handleRestart} className="mt-6">
          <RotateCcw className="w-4 h-4 mr-2" />
          {isUkrainian ? 'Спробувати знову' : 'Try Again'}
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {isUkrainian ? 'Вправа' : 'Exercise'} {currentExercise + 1}/{topic.practiceExercises.length}
        </div>
        <div className="text-sm">
          {isUkrainian ? 'Правильних:' : 'Score:'} {score}
        </div>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <p className="text-lg mb-2">{exercise.sentence}</p>
          <p className="text-sm text-gray-600">{exercise.sentenceUk}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-3">
            {isUkrainian ? 'Виберіть правильну відповідь:' : 'Choose the correct answer:'}
          </p>
        </div>

        <div className="space-y-3">
          {exercise.options.map((option, index) => {
            const isCorrect = option === exercise.correctAnswer;
            const isSelected = option === selectedAnswer;
            
            let buttonClass = 'w-full justify-start text-left h-auto py-3 px-4';
            
            if (showFeedback) {
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
                variant={isSelected && !showFeedback ? 'default' : 'outline'}
                className={buttonClass}
                onClick={() => !showFeedback && handleAnswer(option)}
                disabled={showFeedback}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{option}</span>
                  {showFeedback && (
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

        {showFeedback && (
          <div className={`mt-6 p-4 rounded-lg border ${
            selectedAnswer === exercise.correctAnswer
              ? 'bg-green-50 border-green-200'
              : 'bg-red-50 border-red-200'
          }`}>
            <p className={selectedAnswer === exercise.correctAnswer ? 'text-green-900' : 'text-red-900'}>
              {selectedAnswer === exercise.correctAnswer
                ? (isUkrainian ? '✅ Правильно!' : '✅ Correct!')
                : (isUkrainian ? `❌ Правильна відповідь: ${exercise.correctAnswer}` : `❌ Correct answer: ${exercise.correctAnswer}`)
              }
            </p>
          </div>
        )}
      </Card>

      {showFeedback && (
        <Button onClick={handleNext} className="w-full">
          {currentExercise < topic.practiceExercises.length - 1
            ? (isUkrainian ? 'Наступна вправа' : 'Next Exercise')
            : (isUkrainian ? 'Завершити' : 'Finish')}
        </Button>
      )}
    </div>
  );
}
