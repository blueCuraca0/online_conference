import { Conference } from "types/conference";
import { create } from "zustand";

interface ConferenceState {
  conferences: Conference[];
  setConferences: (conferences: Conference[]) => void;
}

export const useConferenceStore = create<ConferenceState>((set) => ({
  conferences: [],
  setConferences: (conferences) => set({ conferences }),
}));
