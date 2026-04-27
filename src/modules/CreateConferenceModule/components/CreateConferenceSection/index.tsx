import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SxProps } from "@mui/material";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import ConferenceForm from "./components/ConferenceForm";
import ConferenceSetup from "./components/ConferenceSetup";
import { styles } from "./styles";

type ConferenceMode = "startNow" | "schedule" | "recurring";

const BackIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CreateConferenceSection: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mode, setMode] = useState<ConferenceMode>("schedule");

  const MODES: { key: ConferenceMode; label: string }[] = [
    { key: "startNow", label: t("modeStartNow") },
    { key: "schedule", label: t("modeSchedule") },
    { key: "recurring", label: t("modeRecurring") },
  ];

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Box sx={styles.headerLeft}>
          <Box sx={styles.backButton} onClick={() => navigate("/home")}>
            <BackIcon />
          </Box>
          <Box>
            <Typography sx={styles.newRoomLabel}>{t("newRoom")}</Typography>
            <Typography variant="h1" sx={styles.pageTitle}>{t("createConferenceTitle")}</Typography>
          </Box>
        </Box>
        <Box sx={styles.modeTabs}>
          {MODES.map(({ key, label }) => (
            <Box
              key={key}
              sx={{ ...styles.modeTab, ...(mode === key ? styles.modeTabActive : {}) } as SxProps}
              onClick={() => setMode(key)}
            >
              <Typography sx={{ ...styles.modeTabText, ...(mode === key ? styles.modeTabTextActive : {}) } as SxProps}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={styles.body}>
        <ConferenceForm />
        <ConferenceSetup />
      </Box>
    </Box>
  );
};

export default CreateConferenceSection;
