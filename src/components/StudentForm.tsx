import React from 'react';
import { useForm } from 'react-hook-form';
import { Student } from '../types';
import { GraduationCap, AlertCircle } from 'lucide-react';
import { cn } from '../utils/cn';

export function StudentForm({ onSubmit }: { onSubmit: (data: Student) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Student>();

  const onSubmitForm = (data: Student) => {
    data.subject = 'Mathematics';
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <GraduationCap className="w-6 h-6 text-svef-purple" />
        <h2 className="font-oswald text-2xl font-medium text-svef-gray">Student Information</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="id" className="block font-open-sans text-sm font-medium text-svef-gray">
            Student Number (1-40)
          </label>
          <input
            type="number"
            {...register('id', {
              required: 'Student ID is required',
              min: { value: 1, message: 'ID must be between 1 and 40' },
              max: { value: 40, message: 'ID must be between 1 and 40' }
            })}
            className={cn(
              "mt-1 block w-full rounded-md border shadow-sm focus:ring-svef-green focus:border-svef-green",
              errors.id ? "border-red-300" : "border-gray-300"
            )}
          />
          {errors.id && (
            <div className="mt-1 flex items-center text-sm text-red-600">
              <AlertCircle className="w-4 h-4 mr-1" />
              <span>{errors.id.message}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="gradeLevel" className="block font-open-sans text-sm font-medium text-svef-gray">
            Grade Level
          </label>
          <select
            {...register('gradeLevel', {
              required: 'Grade level is required'
            })}
            className={cn(
              "mt-1 block w-full rounded-md border shadow-sm focus:ring-svef-green focus:border-svef-green",
              errors.gradeLevel ? "border-red-300" : "border-gray-300"
            )}
          >
            <option value="">Select grade level...</option>
            <option value="3">3rd Grade</option>
            <option value="4">4th Grade</option>
            <option value="5">5th Grade</option>
            <option value="6">6th Grade</option>
            <option value="7">7th Grade</option>
            <option value="8">8th Grade</option>
            <option value="9">9th Grade</option>
            <option value="10">10th Grade</option>
          </select>
          {errors.gradeLevel && (
            <div className="mt-1 flex items-center text-sm text-red-600">
              <AlertCircle className="w-4 h-4 mr-1" />
              <span>{errors.gradeLevel.message}</span>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block font-open-sans text-sm font-medium text-svef-gray">
            Subject Area
          </label>
          <input
            type="text"
            defaultValue="Mathematics"
            disabled
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
          />
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
        {isSubmitting ? 'Processing...' : 'Continue'}
      </button>
    </form>
  );
}