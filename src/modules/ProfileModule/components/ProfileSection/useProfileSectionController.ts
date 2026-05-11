import profileApi from "api/profileApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useProfileStore } from "stores/profileStore";
import { mapProfile } from "utils/mapProfile";

interface ProfileFormValues {
  displayName: string;
  pronouns: string;
  role: string;
  timezone: string;
  bio: string;
}

export const useProfileSectionController = () => {
  const { t } = useTranslation();
  const { profile, setProfile, setUsers } = useProfileStore();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { register, reset, getValues } = useForm<ProfileFormValues>({
    defaultValues: {
      displayName: "",
      pronouns: "",
      role: "",
      timezone: "",
      bio: "",
    },
  });

  useEffect(() => {
    (async () => {
      const profileResult = await profileApi.getProfile();
      if (profileResult.success) {
        const mapped = mapProfile(profileResult.data);
        setProfile(mapped);
        reset({
          displayName: mapped.displayName,
          pronouns: mapped.pronouns,
          role: mapped.role,
          timezone: mapped.timezone,
          bio: mapped.bio,
        });
      }

      const usersResult = await profileApi.getUsers();
      if (usersResult.success) {
        setUsers(usersResult.data.map(mapProfile));
      }

      setLoading(false);
    })();
  }, [reset, setProfile, setUsers]);

  const handleUpdateUser = async () => {
    const values = getValues();
    const result = await profileApi.updateUser({
      name: values.displayName,
      pronouns: values.pronouns,
      role: values.role,
      timezone: values.timezone,
      bio: values.bio,
    });
    if (result.success) setProfile(mapProfile(result.data));
  };

  const handleDeleteUser = async () => {
    await profileApi.deleteUser();
    setProfile(null);
  };

  const handleGetUserById = async (id: string) => {
    return profileApi.getUserById(id);
  };

  const handleViewPublicCard = () => {
    navigate(`/user/${profile?.userId}`);
  };

  const handleAvatarEdit = () => {
    // TODO: open avatar upload dialog
  };

  return {
    t,
    profile,
    loading,
    register,
    handleViewPublicCard,
    handleAvatarEdit,
    handleUpdateUser,
    handleDeleteUser,
    handleGetUserById,
  };
};
