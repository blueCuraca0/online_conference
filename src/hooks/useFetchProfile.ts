import { useEffect } from "react";
import profileApi from "api/profileApi";
import { useProfileStore } from "stores/profileStore";
import { mapProfile } from "utils/mapProfile";

export const useFetchProfile = () => {
  const { profile, setProfile } = useProfileStore();

  useEffect(() => {
    if (profile) return;
    profileApi.getProfile().then((result) => {
      if (result.success) setProfile(mapProfile(result.data));
    });
  }, []);

  return profile;
};
