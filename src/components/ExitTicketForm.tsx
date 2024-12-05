import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipboardCheck, AlertCircle } from 'lucide-react';
import { cn } from '../utils/cn';

interface ExitTicketFormData {
  score: number;
  totalQuestions: number;
  lastLesson: string;
  struggledAreas: string;
}

interface Props {
  onSubmit: (data: ExitTicketFormData) => void;
  studentId: number;
}

export function ExitTicketForm({ onSubmit, studentId }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ExitTicketFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <ClipboardCheck className="w-6 h-6 text-svef-purple" />
        <h2 className="font-oswald text-2xl font-medium text-svef-gray">Formative assessment results </h2>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="score" className="block font-open-sans text-sm font-medium text-svef-gray">
              Score
            </label>
            <input
              type="number"
              {...register('score', {
                required: 'Score is required',
                min: { value: 0, message: 'Score must be 0 or greater' }
              })}
              className={cn(
                "mt-1 block w-full rounded-md border shadow-sm focus:ring-svef-green focus:border-svef-green",
                errors.score ? "border-red-300" : "border-gray-300"
              )}
            />
            {errors.score && (
              <div className="mt-1 flex items-center text-sm text-red-600">
                <AlertCircle className="w-4 h-4 mr-1" />
                <span>{errors.score.message}</span>
              </div>
            )}
          </div>
          
          <div>
            <label htmlFor="totalQuestions" className="block font-open-sans text-sm font-medium text-svef-gray">
              Total Questions
            </label>
            <input
              type="number"
              {...register('totalQuestions', {
                required: 'Total questions is required',
                min: { value: 1, message: 'Must have at least 1 question' }
              })}
              className={cn(
                "mt-1 block w-full rounded-md border shadow-sm focus:ring-svef-green focus:border-svef-green",
                errors.totalQuestions ? "border-red-300" : "border-gray-300"
              )}
            />
            {errors.totalQuestions && (
              <div className="mt-1 flex items-center text-sm text-red-600">
                <AlertCircle className="w-4 h-4 mr-1" />
                <span>{errors.totalQuestions.message}</span>
              </div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="lastLesson" className="block font-open-sans text-sm font-medium text-svef-gray">
            Lesson Focus
          </label>
          <input
            type="text"
            {...register('lastLesson', {
              required: 'Last lesson topic is required'
            })}
            className={cn(
              "mt-1 block w-full rounded-md border shadow-sm focus:ring-svef-green focus:border-svef-green",
              errors.lastLesson ? "border-red-300" : "border-gray-300"
            )}
            placeholder="e.g., Fractions, Equations, etc."
          />
          {errors.lastLesson && (
            <div className="mt-1 flex items-center text-sm text-red-600">
              <AlertCircle className="w-4 h-4 mr-1" />
              <span>{errors.lastLesson.message}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="struggledAreas" className="block font-open-sans text-sm font-medium text-svef-gray">
            Areas of Struggle
          </label>
          <textarea
            {...register('struggledAreas', {
              required: 'Areas of struggle are required'
            })}
            rows={3}
            className={cn(
              "mt-1 block w-full rounded-md border shadow-sm focus:ring-svef-green focus:border-svef-green",
              errors.struggledAreas ? "border-red-300" : "border-gray-300"
            )}
            placeholder="Describe specific concepts or skills the student struggled with..."
          />
          {errors.struggledAreas && (
            <div className="mt-1 flex items-center text-sm text-red-600">
              <AlertCircle className="w-4 h-4 mr-1" />
              <span>{errors.struggledAreas.message}</span>
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm",
          "font-open-sans text-sm font-medium text-white",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-svef-green",
          isSubmitting
            ? "bg-svef-green/70 cursor-not-allowed"
            : "bg-svef-green hover:bg-svef-green/90"
        )}
      >
        Generate UDL Lesson Plan
      </button>
    </form>
  );
}