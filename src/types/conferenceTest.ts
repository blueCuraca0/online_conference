export interface ConferenceTestQuestion {
  title: string;
  options: string[];
  correctId: number;
}

// API

export interface ConferenceTestResponse {
  conference_id: string;
  question: ConferenceTestQuestion;
}

export interface CreateConferenceTestRequest {
  conference_id: string;
  question: ConferenceTestQuestion;
}

// Internal

export interface ConferenceTest {
  conferenceId: string;
  question: ConferenceTestQuestion;
}

export const mapConferenceTest = (r: ConferenceTestResponse | null): ConferenceTest | null => (r ? {
  conferenceId: r.conference_id,
  question: r.question,
} : null);
