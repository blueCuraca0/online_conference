import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "../ProfileSection/styles";

interface Props {
  displayName: string;
  email: string;
  onAvatarEdit: () => void;
  onViewPublicCard: () => void;
}

const PencilIcon: FC = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="#546B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#546B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProfileIdentityCard: FC<Props> = ({ displayName, email, onAvatarEdit, onViewPublicCard }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.card as SxProps}>
      <Box sx={styles.profileCardRow as SxProps}>
        <Box sx={styles.avatarWrap as SxProps}>
          <Box sx={styles.avatar as SxProps}>
            <Typography sx={styles.avatarInitials}>
              {displayName.slice(0, 2).toUpperCase()}
            </Typography>
          </Box>
          <Box component="button" sx={styles.avatarEditBtn as SxProps} onClick={onAvatarEdit}>
            <PencilIcon />
          </Box>
        </Box>

        <Box sx={styles.profileInfo as SxProps}>
          <Typography sx={styles.profileName}>{displayName}</Typography>
          <Typography sx={styles.profileMeta as SxProps}>{email}</Typography>
          <Box sx={styles.badges as SxProps}>
            <Box component="span" sx={styles.badge as SxProps}>{t("profileProPlan")}</Box>
            <Box component="span" sx={styles.badge as SxProps}>{t("badgeHost")}</Box>
          </Box>
        </Box>

        <Box component="button" sx={styles.viewCardBtn as SxProps} onClick={onViewPublicCard}>
          {t("profileViewPublicCard")}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileIdentityCard;
