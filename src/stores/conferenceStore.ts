import { Conference, JoinableConference } from "types/conference";
import { create } from "zustand";

interface ConferenceState {
  currentConference?: JoinableConference;
  conferences: Conference[];
  setCurrentConference: (conference?: JoinableConference) => void;
  setConferences: (conferences: Conference[]) => void;
}

export const useConferenceStore = create<ConferenceState>((set) => ({
  currentConference: undefined,
  conferences: [],
  setCurrentConference: (conference) => set({ currentConference: conference }),
  setConferences: (conferences) => set({ conferences }),
}));
