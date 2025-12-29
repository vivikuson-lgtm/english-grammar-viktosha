import { GrammarTopic } from '../data/grammarData';
import { BookOpen, Trophy, Target } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface GrammarTopicCardProps {
  topic: GrammarTopic;
  onClick: () => void;
  progress: number;
  isUkrainian: boolean;
}

export function GrammarTopicCard({ topic, onClick, progress, isUkrainian }: GrammarTopicCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-emerald-500 hover:bg-emerald-600';
      case 'intermediate': return 'bg-sky-500 hover:bg-sky-600';
      case 'advanced': return 'bg-violet-500 hover:bg-violet-600';
      default: return 'bg-gray-500';
    }
  };

  const getLevelGradient = (level: string) => {
    switch (level) {
      case 'beginner': return 'from-emerald-50 to-teal-50';
      case 'intermediate': return 'from-sky-50 to-blue-50';
      case 'advanced': return 'from-violet-50 to-purple-50';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const getLevelText = (level: string) => {
    if (isUkrainian) {
      switch (level) {
        case 'beginner': return 'Початковий';
        case 'intermediate': return 'Середній';
        case 'advanced': return 'Просунутий';
        default: return level;
      }
    }
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  return (
    <Card
      className={`group relative overflow-hidden p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-gradient-to-br ${getLevelGradient(topic.level)} border-2 hover:border-opacity-50`}
      onClick={onClick}
    >
      {/* Progress indicator ribbon */}
      {progress >= 100 && (
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-3 right-[-32px] w-32 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs text-center py-1 rotate-45 shadow-lg">
            ✓
          </div>
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-shadow">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="mb-0.5">{isUkrainian ? topic.titleUk : topic.title}</h3>
            <Badge className={`${getLevelColor(topic.level)} text-white border-0 text-xs`}>
              {getLevelText(topic.level)}
            </Badge>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-5 text-sm leading-relaxed">
        {isUkrainian ? topic.descriptionUk : topic.description}
      </p>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600 font-medium">
            {isUkrainian ? 'Прогрес' : 'Progress'}
          </span>
          <span className="font-bold text-lg">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 shadow-md relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white opacity-20 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        {progress >= 100 && (
          <div className="flex items-center gap-1.5 text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full">
            <Trophy className="w-4 h-4" />
            <span className="text-xs font-semibold">{isUkrainian ? 'Завершено' : 'Completed'}</span>
          </div>
        )}
        {progress > 0 && progress < 100 && (
          <div className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
            <Target className="w-4 h-4" />
            <span className="text-xs font-semibold">{isUkrainian ? 'В процесі' : 'In Progress'}</span>
          </div>
        )}
      </div>
    </Card>
  );
}