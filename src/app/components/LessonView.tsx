import { GrammarTopic } from '../data/grammarData';
import { Card } from './ui/card';
import { Check, X, BookOpen, Lightbulb } from 'lucide-react';

interface LessonViewProps {
  topic: GrammarTopic;
  isUkrainian: boolean;
}

export function LessonView({ topic, isUkrainian }: LessonViewProps) {
  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-md">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl">{isUkrainian ? 'Пояснення' : 'Explanation'}</h2>
        </div>
        <div className="prose max-w-none">
          <p className="whitespace-pre-line text-gray-800 leading-relaxed text-lg">
            {isUkrainian ? topic.explanationUk : topic.explanation}
          </p>
        </div>
      </Card>

      <Card className="p-8 bg-white border-2 border-emerald-100 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-md">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl">{isUkrainian ? 'Приклади' : 'Examples'}</h2>
        </div>
        <div className="space-y-4">
          {topic.examples.map((example, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-2 border-emerald-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-emerald-500 rounded-lg shadow-md">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                </div>
                <div className="flex-1">
                  <p className="text-emerald-900 font-medium text-lg mb-2">{example.correct}</p>
                  <p className="text-gray-600 text-sm bg-white px-3 py-2 rounded-lg inline-block">{example.translation}</p>
                </div>
              </div>
              
              {example.incorrect && (
                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-red-50 to-rose-50 rounded-xl border-2 border-red-200 shadow-sm">
                  <div className="p-2 bg-red-500 rounded-lg shadow-md">
                    <X className="w-5 h-5 text-white flex-shrink-0" />
                  </div>
                  <div className="flex-1">
                    <p className="text-red-900 line-through text-lg mb-2">{example.incorrect}</p>
                    <p className="text-gray-600 text-sm font-semibold bg-white px-3 py-2 rounded-lg inline-block">
                      {isUkrainian ? '❌ Неправильно' : '❌ Incorrect'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}