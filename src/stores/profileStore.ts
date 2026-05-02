import { Profile, ProfileResponse } from "types/profile";
import { create } from "zustand";

interface ProfileState {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  users: ProfileResponse[];
  setUsers: (users: ProfileResponse[]) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  users: [],
  setUsers: (users) => set({ users }),
}));
