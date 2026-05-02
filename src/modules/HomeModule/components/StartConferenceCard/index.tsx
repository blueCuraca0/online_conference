import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";

const PlusIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CalendarSmIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="3" width="13" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1.5 7h13M5 1.5v3M11 1.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const StartConferenceCard: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleStartNow = () => {
    // TODO: create conference and navigate to room
    navigate("/conference/create");
  };

  const handleSchedule = () => {
    // TODO: open schedule dialog
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.iconButton}>
        <PlusIcon />
      </Box>
      <Box sx={styles.content}>
        <Typography variant="h1" sx={styles.title}>{t("startNewConference")}</Typography>
        <Typography sx={styles.desc}>{t("startConferenceDesc")}</Typography>
      </Box>
      <Box sx={styles.actions}>
        <Box sx={styles.startButton} onClick={handleStartNow}>
          <Typography sx={styles.startButtonText}>{t("startNowButton")}</Typography>
        </Box>
        <Box sx={styles.scheduleButton} onClick={handleSchedule}>
          <CalendarSmIcon />
          <Typography sx={styles.scheduleButtonText}>{t("scheduleButton")}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StartConferenceCard;
