import { Conference, JoinableConference } from "types/conference";
import { ConferenceTest } from "types/conferenceTest";
import { create } from "zustand";

interface TestAnswer {
  selectedId: number;
  submitted: boolean;
}

interface ConferenceState {
  currentConference?: JoinableConference;
  conferences: Conference[];
  currentTest: ConferenceTest | null;
  testAnswer: TestAnswer | null;
  setCurrentConference: (conference?: JoinableConference) => void;
  setConferences: (conferences: Conference[]) => void;
  setCurrentTest: (test: ConferenceTest | null) => void;
  setTestAnswer: (answer: TestAnswer | null) => void;
}

export const useConferenceStore = create<ConferenceState>((set) => ({
  currentConference: undefined,
  conferences: [],
  currentTest: null,
  testAnswer: null,
  setCurrentConference: (conference) => set({ currentConference: conference }),
  setConferences: (conferences) => set({ conferences }),
  setCurrentTest: (test) => set((state) => ({
    currentTest: test,
    testAnswer: test?.conferenceId !== state.currentTest?.conferenceId ? null : state.testAnswer,
  })),
  setTestAnswer: (answer) => set({ testAnswer: answer }),
}));
