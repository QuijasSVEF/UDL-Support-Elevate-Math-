import { LessonPlan } from '../types';

// This is a mock service that would be replaced with actual API calls
export async function generateLessonPlan(
  gradeLevel: string,
  lastLesson: string,
  struggledAreas: string
): Promise<LessonPlan> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  return {
    objective: `Help students master ${struggledAreas} through interactive and multi-modal learning approaches`,
    engagement: [
      'Start with a real-world problem related to the concept',
      'Use visual aids and manipulatives to demonstrate the concept',
      'Engage students in group discussion about their understanding'
    ],
    representation: [
      'Present content through multiple media (visual, audio, hands-on)',
      'Use graphic organizers to break down complex concepts',
      'Provide step-by-step instructions with examples'
    ],
    actionExpression: [
      'Allow students to demonstrate understanding through multiple means',
      'Provide options for physical and digital manipulatives',
      'Use peer teaching opportunities'
    ],
    wrapup: [
      'Review key concepts through student explanations',
      'Exit ticket to assess understanding',
      'Preview connection to next lesson'
    ],
    duration: 25
  };
}