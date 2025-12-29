import { useState, useEffect } from 'react';
import { grammarTopics, GrammarTopic } from './data/grammarData';
import { GrammarTopicCard } from './components/GrammarTopicCard';
import { LessonView } from './components/LessonView';
import { QuizMode } from './components/QuizMode';
import { PracticeMode } from './components/PracticeMode';
import { SentenceBuilder } from './components/SentenceBuilder';
import { Button } from './components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import { Card } from './components/ui/card';
import { ArrowLeft, BookOpen, Brain, Target, Zap, Languages, Trophy, Award, GraduationCap } from 'lucide-react';

type LearningMode = 'lesson' | 'quiz' | 'practice' | 'builder';

interface Progress {
  [topicId: string]: {
    lesson: boolean;
    quiz: number;
    practice: number;
    builder: number;
  };
}

export default function App() {
  const [isUkrainian, setIsUkrainian] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null);
  const [learningMode, setLearningMode] = useState<LearningMode | null>(null);
  const [progress, setProgress] = useState<Progress>({});
  const [totalPoints, setTotalPoints] = useState(0);

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('grammarProgress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
    const savedPoints = localStorage.getItem('totalPoints');
    if (savedPoints) {
      setTotalPoints(parseInt(savedPoints));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('grammarProgress', JSON.stringify(progress));
    localStorage.setItem('totalPoints', totalPoints.toString());
  }, [progress, totalPoints]);

  const getTopicProgress = (topicId: string): number => {
    const topicProgress = progress[topicId];
    if (!topicProgress) return 0;

    const lessonComplete = topicProgress.lesson ? 25 : 0;
    const quizScore = (topicProgress.quiz / 100) * 25;
    const practiceScore = (topicProgress.practice / 100) * 25;
    const builderScore = (topicProgress.builder / 100) * 25;

    return Math.round(lessonComplete + quizScore + practiceScore + builderScore);
  };

  const handleTopicSelect = (topic: GrammarTopic) => {
    setSelectedTopic(topic);
    setLearningMode('lesson');
  };

  const handleBack = () => {
    setSelectedTopic(null);
    setLearningMode(null);
  };

  const handleModeComplete = (mode: LearningMode, score: number) => {
    if (!selectedTopic) return;

    const newProgress = { ...progress };
    if (!newProgress[selectedTopic.id]) {
      newProgress[selectedTopic.id] = {
        lesson: false,
        quiz: 0,
        practice: 0,
        builder: 0,
      };
    }

    if (mode === 'lesson') {
      newProgress[selectedTopic.id].lesson = true;
    } else {
      const currentScore = newProgress[selectedTopic.id][mode] || 0;
      if (score > currentScore) {
        newProgress[selectedTopic.id][mode] = score;
        const pointsEarned = Math.round(score / 10);
        setTotalPoints(totalPoints + pointsEarned);
      }
    }

    setProgress(newProgress);
  };

  const markLessonComplete = () => {
    if (!selectedTopic) return;
    handleModeComplete('lesson', 100);
  };

  const completedTopics = grammarTopics.filter(topic => getTopicProgress(topic.id) >= 100).length;

  // Home/Topics View
  if (!selectedTopic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h1 className="mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {isUkrainian ? 'Вивчення англійської граматики з Viktosha' : 'English Grammar Learning with Viktosha'}
                    </h1>
                    <p className="text-gray-600 text-lg">
                      {isUkrainian 
                        ? 'Обирайте свій улюблений спосіб навчання!' 
                        : 'Choose your favourite way to learn!'}
                    </p>
                  </div>
                </div>
              </div>
              
              <Button
                variant="outline"
                onClick={() => setIsUkrainian(!isUkrainian)}
                className="flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow bg-white"
              >
                <Languages className="w-5 h-5" />
                <span className="font-semibold">{isUkrainian ? 'English' : 'Українська'}</span>
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-amber-400 to-orange-500 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-100 text-sm mb-1 font-medium">{isUkrainian ? 'Загальні бали' : 'Total Points'}</p>
                    <p className="text-4xl font-bold drop-shadow-lg">{totalPoints}</p>
                    <p className="text-amber-100 text-xs mt-1">{isUkrainian ? '🔥 Продовжуй!' : '🔥 Keep going!'}</p>
                  </div>
                  <div className="p-4 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                    <Trophy className="w-12 h-12 drop-shadow-lg" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm mb-1 font-medium">{isUkrainian ? 'Завершено тем' : 'Topics Completed'}</p>
                    <p className="text-4xl font-bold drop-shadow-lg">{completedTopics}/{grammarTopics.length}</p>
                    <p className="text-blue-100 text-xs mt-1">
                      {completedTopics === grammarTopics.length 
                        ? (isUkrainian ? '🎉 Всі теми!' : '🎉 All done!') 
                        : (isUkrainian ? '💪 Майже там!' : '💪 Almost there!')}
                    </p>
                  </div>
                  <div className="p-4 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                    <Award className="w-12 h-12 drop-shadow-lg" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm mb-1 font-medium">{isUkrainian ? 'Ваш рівень' : 'Your Level'}</p>
                    <p className="text-2xl font-bold drop-shadow-lg">
                      {completedTopics === 0 ? (isUkrainian ? 'Новачок' : 'Beginner') :
                       completedTopics < 5 ? (isUkrainian ? 'Учень' : 'Learner') :
                       completedTopics < 10 ? (isUkrainian ? 'Майстер' : 'Master') :
                       completedTopics < 16 ? (isUkrainian ? 'Професіонал' : 'Pro') :
                       (isUkrainian ? '🌟 Експерт' : '🌟 Expert')}
                    </p>
                    <p className="text-purple-100 text-xs mt-1">{isUkrainian ? '📚 Вчись далі!' : '📚 Keep learning!'}</p>
                  </div>
                  <div className="p-4 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm">
                    <Brain className="w-12 h-12 drop-shadow-lg" />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Topics Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="flex items-center gap-2">
                <span>{isUkrainian ? '📖 Всі теми граматики' : '📖 All Grammar Topics'}</span>
                <span className="text-sm text-gray-500">({grammarTopics.length})</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grammarTopics.map((topic) => (
                <GrammarTopicCard
                  key={topic.id}
                  topic={topic}
                  onClick={() => handleTopicSelect(topic)}
                  progress={getTopicProgress(topic.id)}
                  isUkrainian={isUkrainian}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Topic Learning View
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {isUkrainian ? 'Назад' : 'Back'}
          </Button>

          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="mb-1">{isUkrainian ? selectedTopic.titleUk : selectedTopic.title}</h1>
              <p className="text-gray-600">
                {isUkrainian ? selectedTopic.descriptionUk : selectedTopic.description}
              </p>
            </div>
            
            <Button
              variant="outline"
              onClick={() => setIsUkrainian(!isUkrainian)}
              className="flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {isUkrainian ? 'EN' : 'UA'}
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                {isUkrainian ? 'Прогрес теми' : 'Topic Progress'}
              </span>
              <span className="font-medium">{getTopicProgress(selectedTopic.id)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all"
                style={{ width: `${getTopicProgress(selectedTopic.id)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Learning Modes */}
        <Tabs value={learningMode || 'lesson'} onValueChange={(value) => setLearningMode(value as LearningMode)}>
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="lesson" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">{isUkrainian ? 'Урок' : 'Lesson'}</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden md:inline">{isUkrainian ? 'Тест' : 'Quiz'}</span>
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              <span className="hidden md:inline">{isUkrainian ? 'Практика' : 'Practice'}</span>
            </TabsTrigger>
            <TabsTrigger value="builder" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="hidden md:inline">{isUkrainian ? 'Конструктор' : 'Builder'}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lesson">
            <LessonView topic={selectedTopic} isUkrainian={isUkrainian} />
            {!progress[selectedTopic.id]?.lesson && (
              <Button onClick={markLessonComplete} className="w-full mt-6">
                {isUkrainian ? 'Позначити урок як завершений' : 'Mark Lesson as Complete'}
              </Button>
            )}
          </TabsContent>

          <TabsContent value="quiz">
            <QuizMode
              topic={selectedTopic}
              isUkrainian={isUkrainian}
              onComplete={(score) => handleModeComplete('quiz', score)}
            />
          </TabsContent>

          <TabsContent value="practice">
            <PracticeMode
              topic={selectedTopic}
              isUkrainian={isUkrainian}
              onComplete={(score) => handleModeComplete('practice', score)}
            />
          </TabsContent>

          <TabsContent value="builder">
            <SentenceBuilder
              topic={selectedTopic}
              isUkrainian={isUkrainian}
              onComplete={(score) => handleModeComplete('builder', score)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}