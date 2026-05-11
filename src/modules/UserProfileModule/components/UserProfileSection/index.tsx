import { FC, useEffect, useState } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { CircularProgress } from "ui/CircularProgress";
import ProfileAvatar from "components/ProfileAvatar";
import profileApi from "api/profileApi";
import { mapProfile } from "utils/mapProfile";
import { Profile } from "types/profile";
import { styles } from "./styles";

interface Props {
  userId: string;
}

const UserProfileSection: FC<Props> = ({ userId }) => {
  const { t } = useTranslation();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await profileApi.getUserById(userId);
      if (result.success) setProfile(mapProfile(result.data));
      setLoading(false);
    })();
  }, [userId]);

  if (loading) {
    return (
      <Box sx={styles.centered as SxProps}>
        <CircularProgress />
      </Box>
    );
  }

  if (!profile) {
    return (
      <Box sx={styles.centered as SxProps}>
        <Typography>{t("userNotFound")}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.heroBanner}>
        <Typography sx={styles.heroTitle}>{t("userProfileTitle")}</Typography>
      </Box>

      <Box sx={styles.content}>
        <Box sx={styles.card}>
          <Box sx={styles.profileCardRow}>
            <ProfileAvatar name={profile.displayName} size={80} sx={styles.avatar} />
            <Box sx={styles.profileInfo}>
              <Typography sx={styles.profileName}>{profile.displayName}</Typography>
              <Typography sx={styles.profileMeta}>{profile.email}</Typography>
              {profile.role && (
                <Box sx={styles.badges}>
                  <Box component="span" sx={styles.badge}>{profile.role}</Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>

        <Box sx={styles.card}>
          <Typography sx={styles.cardTitle}>{t("profilePublicDetails")}</Typography>
          <Box sx={styles.fieldsGrid}>
            <Box>
              <Typography sx={styles.fieldLabel}>{t("profileDisplayName")}</Typography>
              <Typography sx={styles.fieldValue}>{profile.displayName || "—"}</Typography>
            </Box>
            <Box>
              <Typography sx={styles.fieldLabel}>{t("profilePronouns")}</Typography>
              <Typography sx={styles.fieldValue}>{profile.pronouns || "—"}</Typography>
            </Box>
            <Box>
              <Typography sx={styles.fieldLabel}>{t("settingsRole")}</Typography>
              <Typography sx={styles.fieldValue}>{profile.role || "—"}</Typography>
            </Box>
            <Box>
              <Typography sx={styles.fieldLabel}>{t("profileTimezone")}</Typography>
              <Typography sx={styles.fieldValue}>{profile.timezone || "—"}</Typography>
            </Box>
          </Box>
          {profile.bio && (
            <Box>
              <Typography sx={styles.fieldLabel}>{t("profileShortBio")}</Typography>
              <Typography sx={styles.fieldValue}>{profile.bio}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfileSection;
