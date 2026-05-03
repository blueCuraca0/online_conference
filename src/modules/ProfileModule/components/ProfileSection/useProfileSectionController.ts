import profileApi from "api/profileApi";
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
      const profileResult = await profileApi.getProfile();
      if (profileResult.success) {
        const r = profileResult.data;
        const mapped = {
          userId: r.id,
          displayName: r.name,
          pronouns: r.pronouns,
          role: r.role,
          timezone: r.timezone,
          bio: r.bio,
          email: r.email,
          avatarUrl: r.avatarUrl,
          createdAt: r.created_at,
        };
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
        setUsers(usersResult.data.map((u) => ({
          userId: u.id,
          displayName: u.name,
          pronouns: u.pronouns,
          role: u.role,
          timezone: u.timezone,
          bio: u.bio,
          email: u.email,
          avatarUrl: u.avatarUrl,
          createdAt: u.created_at,
        })));
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
    if (result.success) {
      const r = result.data;
      setProfile({
        userId: r.id,
        displayName: r.name,
        pronouns: r.pronouns,
        role: r.role,
        timezone: r.timezone,
        bio: r.bio,
        email: r.email,
        avatarUrl: r.avatarUrl,
        createdAt: r.created_at,
      });
    }
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
