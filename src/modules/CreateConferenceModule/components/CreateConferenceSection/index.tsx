import { FC } from "react";
import { SxProps } from "@mui/material";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import { BackIcon } from "components/icons/BackIcon";
import ConferenceForm from "../ConferenceForm";
import ConferenceSetup from "../ConferenceSetup";
import { styles } from "./styles";
import { useCreateConferenceSectionController } from "./useCreateConferenceSectionController";

const CreateConferenceSection: FC = () => {
  const { t, mode, setMode, MODES, handleBack } = useCreateConferenceSectionController();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Box sx={styles.headerLeft}>
          <Button
            variantType={EButtonType.OUTLINED_ON_DARK}
            buttonTitle={<BackIcon />}
            onClick={handleBack}
            sx={styles.backButton}
          />
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
      </Box>
    </Box>
  );
};

export default CreateConferenceSection;
