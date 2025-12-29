import { useState } from 'react';
import { GrammarTopic } from '../data/grammarData';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check, X, RotateCcw } from 'lucide-react';

interface SentenceBuilderProps {
  topic: GrammarTopic;
  isUkrainian: boolean;
  onComplete: (score: number) => void;
}

export function SentenceBuilder({ topic, isUkrainian, onComplete }: SentenceBuilderProps) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedWords, setSelectedWords] = useState<number[]>([]);
  const [availableWords, setAvailableWords] = useState<number[]>(
    Array.from({ length: topic.sentenceBuilding[0].words.length }, (_, i) => i)
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const exercise = topic.sentenceBuilding[currentExercise];

  const handleWordClick = (index: number) => {
    if (showFeedback) return;
    
    setSelectedWords([...selectedWords, index]);
    setAvailableWords(availableWords.filter(i => i !== index));
  };

  const handleRemoveWord = (wordIndex: number) => {
    if (showFeedback) return;
    
    const indexInSelected = selectedWords.indexOf(wordIndex);
    if (indexInSelected !== -1) {
      const newSelected = [...selectedWords];
      newSelected.splice(indexInSelected, 1);
      setSelectedWords(newSelected);
      setAvailableWords([...availableWords, wordIndex].sort((a, b) => a - b));
    }
  };

  const handleCheck = () => {
    const correct = JSON.stringify(selectedWords) === JSON.stringify(exercise.correctOrder);
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentExercise < topic.sentenceBuilding.length - 1) {
      const nextExercise = currentExercise + 1;
      setCurrentExercise(nextExercise);
      setSelectedWords([]);
      setAvailableWords(
        Array.from({ length: topic.sentenceBuilding[nextExercise].words.length }, (_, i) => i)
      );
      setShowFeedback(false);
      setIsCorrect(false);
    } else {
      setCompleted(true);
      const finalScore = Math.round((score / topic.sentenceBuilding.length) * 100);
      onComplete(finalScore);
    }
  };

  const handleRestart = () => {
    setCurrentExercise(0);
    setSelectedWords([]);
    setAvailableWords(
      Array.from({ length: topic.sentenceBuilding[0].words.length }, (_, i) => i)
    );
    setShowFeedback(false);
    setIsCorrect(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    const percentage = Math.round((score / topic.sentenceBuilding.length) * 100);
    return (
      <Card className="p-8 text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎯' : '💡'}
          </div>
          <h2 className="mb-2">
            {isUkrainian ? 'Конструктор речень завершено!' : 'Sentence Builder Completed!'}
          </h2>
          <p className="text-2xl mb-2">
            {isUkrainian ? 'Правильних відповідей:' : 'Correct Answers:'} {score}/{topic.sentenceBuilding.length}
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
          {isUkrainian ? 'Речення' : 'Sentence'} {currentExercise + 1}/{topic.sentenceBuilding.length}
        </div>
        <div className="text-sm">
          {isUkrainian ? 'Правильних:' : 'Score:'} {score}
        </div>
      </div>

      <Card className="p-6">
        <div className="mb-6">
          <p className="mb-2">{isUkrainian ? exercise.promptUk : exercise.prompt}</p>
        </div>

        {/* Selected Words Area */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-3">
            {isUkrainian ? 'Ваше речення:' : 'Your sentence:'}
          </p>
          <div className="min-h-[60px] p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex flex-wrap gap-2">
            {selectedWords.length === 0 ? (
              <p className="text-gray-400 text-sm">
                {isUkrainian ? 'Натисніть на слова нижче, щоб скласти речення' : 'Click on words below to build the sentence'}
              </p>
            ) : (
              selectedWords.map((wordIndex, idx) => (
                <Button
                  key={idx}
                  variant="secondary"
                  className="h-auto py-2"
                  onClick={() => handleRemoveWord(wordIndex)}
                  disabled={showFeedback}
                >
                  {exercise.words[wordIndex]}
                </Button>
              ))
            )}
          </div>
        </div>

        {/* Available Words */}
        <div>
          <p className="text-sm text-gray-500 mb-3">
            {isUkrainian ? 'Доступні слова:' : 'Available words:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {availableWords.map((wordIndex) => (
              <Button
                key={wordIndex}
                variant="outline"
                className="h-auto py-2"
                onClick={() => handleWordClick(wordIndex)}
                disabled={showFeedback}
              >
                {exercise.words[wordIndex]}
              </Button>
            ))}
          </div>
        </div>

        {showFeedback && (
          <div className={`mt-6 p-4 rounded-lg border ${
            isCorrect
              ? 'bg-green-50 border-green-200'
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <Check className="w-5 h-5 text-green-600" />
                  <p className="text-green-900">
                    {isUkrainian ? '✅ Чудово! Правильне речення!' : '✅ Great! Correct sentence!'}
                  </p>
                </>
              ) : (
                <>
                  <X className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-red-900 mb-2">
                      {isUkrainian ? '❌ Спробуйте ще раз. Правильне речення:' : '❌ Try again. Correct sentence:'}
                    </p>
                    <p className="font-medium">
                      {exercise.correctOrder.map(i => exercise.words[i]).join(' ')}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </Card>

      {!showFeedback && selectedWords.length === exercise.words.length && (
        <Button onClick={handleCheck} className="w-full">
          {isUkrainian ? 'Перевірити' : 'Check'}
        </Button>
      )}

      {showFeedback && (
        <Button onClick={handleNext} className="w-full">
          {currentExercise < topic.sentenceBuilding.length - 1
            ? (isUkrainian ? 'Наступне речення' : 'Next Sentence')
            : (isUkrainian ? 'Завершити' : 'Finish')}
        </Button>
      )}
    </div>
  );
}
