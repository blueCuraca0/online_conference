import { Conference, JoinableConference } from "types/conference";
import { ConferenceTest } from "types/conferenceTest";
import { create } from "zustand";

interface ConferenceState {
  currentConference?: JoinableConference;
  conferences: Conference[];
  currentTest: ConferenceTest | null;
  setCurrentConference: (conference?: JoinableConference) => void;
  setConferences: (conferences: Conference[]) => void;
  setCurrentTest: (test: ConferenceTest | null) => void;
}

export const useConferenceStore = create<ConferenceState>((set) => ({
  currentConference: undefined,
  conferences: [],
  currentTest: null,
  setCurrentConference: (conference) => set({ currentConference: conference }),
  setConferences: (conferences) => set({ conferences }),
  setCurrentTest: (test) => set({ currentTest: test }),
}));
