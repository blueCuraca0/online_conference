import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import { PlusIcon } from "components/icons/PlusIcon";
import { CalendarSmIcon } from "components/icons/CalendarSmIcon";
import { styles } from "./styles";

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
        <Button
          variantType={EButtonType.WHITE}
          buttonTitle={t("startNowButton")}
          onClick={handleStartNow}
          sx={styles.startButton}
        />

        <Button
          variantType={EButtonType.OUTLINED_ON_DARK}
          buttonTitle={<Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}><CalendarSmIcon /><Typography sx={{ fontSize: "14px !important", fontWeight: "500 !important", color: "inherit" }}>{t("scheduleButton")}</Typography></Box>}
          onClick={handleSchedule}
          sx={styles.scheduleButton}
        />
      </Box>
    </Box>
  );
};

export default StartConferenceCard;
