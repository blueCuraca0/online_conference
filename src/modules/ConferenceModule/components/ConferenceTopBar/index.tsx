import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { PeopleIcon } from "components/icons/PeopleIcon";
import { LockTopBarIcon } from "components/icons/LockTopBarIcon";
import { LinkTopBarIcon } from "components/icons/LinkTopBarIcon";
import { styles } from "./styles";

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
          <LockTopBarIcon />
          <span>{passcode}</span>
        </Box>
        <Box sx={styles.badge as SxProps}>
          <LinkTopBarIcon />
          <span>{link}</span>
        </Box>
      </Box>
    </Box>
  );
};

export default ConferenceTopBar;
