export interface ConferenceTestQuestion {
  title: string;
  options: string[];
  correctId: number;
}

// API

export interface ConferenceTestResponse {
  conference_id: string;
  question: ConferenceTestQuestion;
  total_answers: number;
  total_correct: number;
}

export interface CreateConferenceTestRequest {
  conference_id: string;
  question: ConferenceTestQuestion;
}

// Internal

export interface ConferenceTest {
  conferenceId: string;
  question: ConferenceTestQuestion;
  totalAnswers: number;
  totalCorrect: number;
}

export const mapConferenceTest = (r: ConferenceTestResponse | null): ConferenceTest | null => (r ? {
  conferenceId: r.conference_id,
  question: r.question,
  totalAnswers: r.total_answers ?? 0,
  totalCorrect: r.total_correct ?? 0,
} : null);
