import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";

const PeopleIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8" />
    <path d="M2 21v-1a7 7 0 0 1 14 0v1" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="18" cy="7" r="3" stroke="white" strokeWidth="1.8" />
    <path d="M22 21v-1a5 5 0 0 0-5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const LockIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="1.8" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const LinkIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

interface Props {
  title: string;
  participantCount: number;
  passcode: string;
  link: string;
  recordingTime: string;
}

const ConferenceTopBar: FC<Props> = ({ title, participantCount, passcode, link, recordingTime }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root as SxProps}>
      <Box sx={styles.left as SxProps}>
        <Box sx={styles.recordingIndicator as SxProps}>
          <Box sx={styles.recordingDot} />
          <Typography sx={styles.recordingText}>
            {t("conferenceRecording")} · {recordingTime}
          </Typography>
        </Box>
        <Typography sx={styles.title}>{title}</Typography>
      </Box>

      <Box sx={styles.right as SxProps}>
        <Box sx={styles.badge as SxProps}>
          <PeopleIcon />
          <span>{participantCount}</span>
        </Box>
        <Box sx={styles.badge as SxProps}>
          <LockIcon />
          <span>{passcode}</span>
        </Box>
        <Box sx={styles.badge as SxProps}>
          <LinkIcon />
          <span>{link}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default ConferenceTopBar;
