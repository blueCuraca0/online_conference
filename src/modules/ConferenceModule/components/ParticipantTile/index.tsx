import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Participant } from "../ConferenceSection/types";
import { styles } from "./styles";

const MicOffIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <line x1="2" y1="2" x2="22" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M5 10v2a7 7 0 0 0 12 4.93" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 9v3a3 3 0 0 0 5.12 2.12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <rect x="9" y="3" width="6" height="10" rx="3" stroke="white" strokeWidth="2" />
    <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="8" y1="23" x2="16" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

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
