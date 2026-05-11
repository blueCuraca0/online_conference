import { FC } from "react";
import { SxProps } from "@mui/material";
import profileApi from "api/profileApi";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { CircularProgress } from "ui/CircularProgress";
import { styles } from "./styles";
import { useProfileSectionController } from "./useProfileSectionController";
import ProfileIdentityCard from "../ProfileIdentityCard";
import ProfilePublicDetailsForm from "../ProfilePublicDetailsForm";


const ProfileSection: FC = () => {
  const { t, profile, loading, register, handleViewPublicCard, handleAvatarEdit, handleUpdateUser, handleDeleteUser } = useProfileSectionController();

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={styles.root as SxProps}>
      <Box sx={styles.heroBanner as SxProps}>
        <Box sx={styles.breadcrumb as SxProps}>
          <span>{t("navSettingsLabel")}</span>
          <span style={{ margin: "0 4px" }}>›</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>{t("navProfile")}</span>
        </Box>
        <Typography sx={styles.heroTitle}>{t("profileTitle")}</Typography>
      </Box>

      <ProfileIdentityCard
        displayName={profile?.displayName ?? ""}
        email={profile?.email ?? ""}
        onAvatarEdit={handleAvatarEdit}
        onViewPublicCard={handleViewPublicCard}
      />

      <ProfilePublicDetailsForm register={register} onSave={handleUpdateUser} />

      {/* When I join a room */}
      <Box sx={styles.card as SxProps}>
        <Typography sx={styles.whenJoinTitle}>{t("profileWhenIJoinRoom")}</Typography>
        <Typography sx={styles.whenJoinSubtitle}>{t("profileWhenIJoinRoomDesc")}</Typography>
      </Box>

      <Box component="button" sx={styles.deleteBtn as SxProps} onClick={handleDeleteUser}>
        {t("profileDeleteAccount")}
      </Box>

      {/* <Box
        component="button"
        sx={styles.debugBtn as SxProps}
        onClick={async () => {
          const id = prompt("User ID:");
          if (!id) return;
          const user = await profileApi.getUserById(id);
          alert(JSON.stringify(user, null, 2));
        }}
      >
        [debug] find user by id
      </Box> */}
    </Box>
  );
};

export default ProfileSection;
