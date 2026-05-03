import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import { styles } from "./styles";

interface Device {
  labelKey: "deviceMicrophone" | "deviceSpeaker" | "deviceCamera";
  name: string;
  icon: FC;
}

const MicIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1a3 3 0 013 3v4a3 3 0 01-6 0V4a3 3 0 013-3z" stroke="currentColor" strokeWidth="1.4" />
    <path d="M3 8a5 5 0 0010 0M8 13v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const SpeakerIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 6h3l4-3v10l-4-3H2V6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M12 5.5a4 4 0 010 5M13.5 3.5a7 7 0 010 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const CameraIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="4" width="11" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M12 6.5l3-1.5v6l-3-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const MoreIcon: FC = () => (
  <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
    <circle cx="2" cy="2" r="1.5" fill="currentColor" />
    <circle cx="8" cy="2" r="1.5" fill="currentColor" />
    <circle cx="14" cy="2" r="1.5" fill="currentColor" />
  </svg>
);

const CopyIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M2 10V2h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const STUB_DEVICES: Device[] = [
  { labelKey: "deviceMicrophone", name: "MacBook Air mic", icon: MicIcon },
  { labelKey: "deviceSpeaker", name: "AirPods Pro", icon: SpeakerIcon },
  { labelKey: "deviceCamera", name: "FaceTime HD", icon: CameraIcon },
];

const STUB_LINK = "confly.app/r/quiet-river-204";

const ConferenceSetup: FC = () => {
  const { t } = useTranslation();

  const handleCopyLink = () => {
    // TODO: copy to clipboard
    void navigator.clipboard.writeText(`https://${STUB_LINK}`);
  };

  const handleDeviceMenu = (_deviceName: string) => {
    // TODO: open device settings menu
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.cameraPreview}>
        <Box sx={styles.liveBadge}>
          <Box sx={styles.liveDot} />
          <Typography sx={styles.liveBadgeText}>{t("liveBadge")}</Typography>
        </Box>
        <Box sx={styles.cameraLabel}>
          <Typography sx={styles.cameraLabelSmall}>{t("cameraPreview")}</Typography>
          <Typography sx={styles.cameraModel}>{t("cameraModel")}</Typography>
        </Box>
      </Box>

      <Box sx={styles.linkCard}>
        <Typography variant="h3" sx={styles.cardTitle}>{t("conferenceLink")}</Typography>
        <Box sx={styles.linkRow}>
          <Box sx={styles.linkIcon}><CopyIcon /></Box>
          <Typography sx={styles.linkText}>{STUB_LINK}</Typography>
          <Button
            variantType={EButtonType.GHOST}
            buttonTitle={t("copyButton")}
            onClick={handleCopyLink}
            sx={styles.copyButton}
          />
        </Box>
      </Box>

      <Box sx={styles.devicesCard}>
        <Typography variant="h3" sx={styles.cardTitle}>{t("devicesTitle")}</Typography>
        <Box sx={styles.deviceList}>
          {STUB_DEVICES.map(({ labelKey, name, icon: Icon }) => (
            <Box key={name} sx={styles.deviceRow}>
              <Box sx={styles.deviceIconWrapper}>
                <Icon />
              </Box>
              <Box sx={styles.deviceInfo}>
                <Typography sx={styles.deviceLabel}>{t(labelKey)}</Typography>
                <Typography sx={styles.deviceName}>{name}</Typography>
              </Box>
              <Box sx={styles.deviceMore} onClick={() => handleDeviceMenu(name)}>
                <MoreIcon />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ConferenceSetup;
