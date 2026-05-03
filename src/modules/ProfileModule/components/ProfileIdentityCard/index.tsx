import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { PencilIcon } from "components/icons/PencilIcon";
import { styles } from "../ProfileSection/styles";

interface Props {
  displayName: string;
  email: string;
  onAvatarEdit: () => void;
  onViewPublicCard: () => void;
}

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
