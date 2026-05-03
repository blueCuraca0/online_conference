import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { MicOffIcon } from "components/icons/MicOffIcon";
import { Participant } from "../ConferenceSection/types";
import { styles } from "./styles";

interface Props {
  participant: Participant;
}

const ParticipantTile: FC<Props> = ({ participant }) => {
  const { t } = useTranslation();
  const { name, isHost, isYou, isMuted, isSpeaking, isCameraOff, initials } = participant;

  return (
    <Box
      sx={
        {
          ...styles.root,
          ...(isCameraOff ? styles.cameraOff : {}),
        } as SxProps
      }
    >
      {isCameraOff && initials && (
        <Box sx={styles.initialsAvatar}>{initials}</Box>
      )}

      {isSpeaking && (
        <Box sx={styles.speakingBadge as SxProps}>
          <Box sx={styles.speakingDot} />
          <Typography sx={styles.speakingText}>{t("badgeSpeaking")}</Typography>
        </Box>
      )}

      {(isHost || isYou) && (
        <Box sx={styles.roleBadge as SxProps}>
          {isHost ? t("badgeHost") : t("badgeYou")}
        </Box>
      )}

      <Box sx={styles.nameBadge as SxProps}>
        {isMuted && !isHost && !isYou && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MicOffIcon />
          </Box>
        )}
        <span>{name}</span>
      </Box>

      {isMuted && (
        <Box sx={styles.mutedIconWrap as SxProps}>
          <MicOffIcon />
        </Box>
      )}
    </Box>
  );
};

export default ParticipantTile;
