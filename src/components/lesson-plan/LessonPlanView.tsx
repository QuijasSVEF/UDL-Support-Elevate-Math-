import React from 'react';
import { Clock, Target, Users, BookOpen, CheckCircle } from 'lucide-react';
import { LessonPlan } from '../../types';
import { Button } from '../ui/Button';

interface LessonPlanViewProps {
  lessonPlan: LessonPlan;
  onBack: () => void;
}

export function LessonPlanView({ lessonPlan, onBack }: LessonPlanViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-6 h-6 text-svef-purple" />
          <h3 className="font-oswald text-xl font-medium text-svef-gray">Objective</h3>
        </div>
        <p className="font-roboto text-svef-gray">{lessonPlan.objective}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-6 h-6 text-svef-purple" />
            <h3 className="font-oswald text-xl font-medium text-svef-gray">Engagement ({lessonPlan.duration} min)</h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {lessonPlan.engagement.map((item, index) => (
              <li key={index} className="font-roboto text-svef-gray">{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-6 h-6 text-svef-purple" />
            <h3 className="font-oswald text-xl font-medium text-svef-gray">Representation</h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {lessonPlan.representation.map((item, index) => (
              <li key={index} className="font-roboto text-svef-gray">{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-svef-purple" />
            <h3 className="font-oswald text-xl font-medium text-svef-gray">Action & Expression</h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {lessonPlan.actionExpression.map((item, index) => (
              <li key={index} className="font-roboto text-svef-gray">{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-6 h-6 text-svef-purple" />
            <h3 className="font-oswald text-xl font-medium text-svef-gray">Wrap-up</h3>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {lessonPlan.wrapup.map((item, index) => (
              <li key={index} className="font-roboto text-svef-gray">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="secondary" onClick={onBack}>
          Create Another Plan
        </Button>
        <Button onClick={() => window.print()}>
          Print Lesson Plan
        </Button>
      </div>
    </div>
  );
}