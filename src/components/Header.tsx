import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Student } from '../types';

interface HeaderProps {
  step: number;
  studentData: Student | null;
}

export function Header({ step, studentData }: HeaderProps) {
  return (
    <header className="bg-svef-beige">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-8 h-8 text-svef-purple" />
            <div>
              <h1 className="font-oswald text-3xl font-semibold text-svef-gray">UDL Support</h1>
              <p className="font-open-sans text-sm text-svef-brown mt-1">Elevate Math Curriculum Support</p>
            </div>
          </div>
          {step > 1 && studentData && (
            <div className="bg-white px-4 py-2 rounded-md shadow-sm">
              <p className="font-open-sans text-sm text-svef-gray">
                Student ID: <span className="font-medium">{studentData.id}</span> | 
                Grade: <span className="font-medium">{studentData.gradeLevel}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}