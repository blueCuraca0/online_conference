import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileApi from "api/profileApi";
import { useProfileStore } from "stores/profileStore";
import { mapProfile } from "utils/mapProfile";
import { supabase } from "lib/supabase";

export const useFetchProfile = () => {
  const { profile, setProfile } = useProfileStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) return;

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        navigate("/welcome");
        return;
      }

      profileApi.getProfile().then((result) => {
        if (result.success) setProfile(mapProfile(result.data));
      });
    });
  }, []);

  return profile;
};
