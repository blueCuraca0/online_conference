import profileApi from "api/profileApi";
import { supabase } from "lib/supabase";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useProfileStore } from "stores/profileStore";

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
      const response = await profileApi.getProfile();
      const mapped = {
        userId: response.id,
        displayName: response.name,
        pronouns: response.pronouns,
        role: response.role,
        timezone: response.timezone,
        bio: response.bio,
        email: response.email,
        avatarUrl: response.avatarUrl,
        createdAt: response.created_at,
      };
      setProfile(mapped);
      reset({
        displayName: mapped.displayName,
        pronouns: mapped.pronouns,
        role: mapped.role,
        timezone: mapped.timezone,
        bio: mapped.bio,
      });

      const users = await profileApi.getUsers();
      setUsers(users);

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
    setProfile({
      userId: result.id,
      displayName: result.name,
      pronouns: result.pronouns,
      role: result.role,
      timezone: result.timezone,
      bio: result.bio,
      email: result.email,
      avatarUrl: result.avatarUrl,
      createdAt: result.created_at,
    });
  };

  const handleDeleteUser = async () => {
    await profileApi.deleteUser();
    setProfile(null);
  };

  const handleGetUserById = async (id: string) => {
    return profileApi.getUserById(id);
  };

  const handleViewPublicCard = () => {
    // TODO: open public profile card modal
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
