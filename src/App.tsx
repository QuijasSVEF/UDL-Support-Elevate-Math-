import React, { useState } from 'react';
import { Header } from './components/Header';
import { TeacherLogin } from './components/TeacherLogin';
import { StudentForm } from './components/StudentForm';
import { ExitTicketForm } from './components/ExitTicketForm';
import { LessonPlanView } from './components/lesson-plan/LessonPlanView';
import { StudentAnalytics } from './components/analytics/StudentAnalytics';
import { Student, Teacher, LessonPlan, ExitTicketResult } from './types';
import { generateLessonPlan } from './services/lessonPlanService';
import { calculateStudentAnalytics } from './services/analyticsService';

function App() {
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const [step, setStep] = useState(1);
  const [studentData, setStudentData] = useState<Student | null>(null);
  const [lessonPlan, setLessonPlan] = useState<LessonPlan | null>(null);
  const [exitTickets, setExitTickets] = useState<ExitTicketResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (username: string) => {
    setTeacher({ username, name: username }); // In a real app, we'd fetch teacher details
  };

  const handleStudentSubmit = (data: Student) => {
    setStudentData(data);
    setStep(2);
  };

  const handleExitTicketSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      // Save exit ticket
      const exitTicket: ExitTicketResult = {
        studentId: studentData?.id || 0,
        score: data.score,
        totalQuestions: data.totalQuestions,
        struggledAreas: data.struggledAreas.split(',').map((s: string) => s.trim()),
        lastLesson: data.lastLesson,
        timestamp: new Date(),
      };
      setExitTickets(prev => [...prev, exitTicket]);

      // Generate lesson plan
      const plan = await generateLessonPlan(
        studentData?.gradeLevel || '',
        data.lastLesson,
        data.struggledAreas
      );
      setLessonPlan(plan);
      setStep(3);
    } catch (error) {
      console.error('Failed to generate lesson plan:', error);
      // TODO: Add error handling
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setStudentData(null);
    setLessonPlan(null);
  };

  if (!teacher) {
    return <TeacherLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header step={step} studentData={studentData} teacher={teacher} />
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-svef-beige/30 shadow-lg rounded-lg p-8">
              {step === 1 && (
                <StudentForm onSubmit={handleStudentSubmit} />
              )}
              {step === 2 && studentData && (
                <ExitTicketForm 
                  onSubmit={handleExitTicketSubmit}
                  studentId={studentData.id}
                  isLoading={isLoading}
                />
              )}
              {step === 3 && lessonPlan && (
                <LessonPlanView 
                  lessonPlan={lessonPlan}
                  onBack={handleReset}
                />
              )}
            </div>
          </div>
          
          {studentData && exitTickets.length > 0 && (
            <div className="lg:col-span-1">
              <StudentAnalytics 
                analytics={calculateStudentAnalytics(exitTickets.filter(t => t.studentId === studentData.id))}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;