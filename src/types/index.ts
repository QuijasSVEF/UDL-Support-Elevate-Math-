export interface Student {
  id: number;
  gradeLevel: string;
  subject: string;
}

export interface Teacher {
  username: string;
  name: string;
}

export interface ExitTicketResult {
  studentId: number;
  score: number;
  totalQuestions: number;
  struggledAreas: string[];
  lastLesson: string;
  timestamp: Date;
}

export interface LessonPlan {
  objective: string;
  engagement: string[];
  representation: string[];
  actionExpression: string[];
  wrapup: string[];
  duration: number;
}

export interface StudentAnalytics {
  studentId: number;
  averageScore: number;
  totalAssessments: number;
  commonStruggles: string[];
  progressTrend: 'improving' | 'steady' | 'declining';
}