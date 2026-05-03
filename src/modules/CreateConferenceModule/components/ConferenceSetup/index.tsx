import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import { MicIcon } from "components/icons/MicIcon";
import { SpeakerIcon } from "components/icons/SpeakerIcon";
import { CameraIcon } from "components/icons/CameraIcon";
import { MoreIcon } from "components/icons/MoreIcon";
import { CopyIcon } from "components/icons/CopyIcon";
import { styles } from "./styles";

enum EDeviceLabelKey {
  MICROPHONE = "deviceMicrophone",
  SPEAKER = "deviceSpeaker",
  CAMERA = "deviceCamera",
}

interface Device {
  labelKey: EDeviceLabelKey;
  name: string;
  icon: FC;
}

const STUB_DEVICES: Device[] = [
  { labelKey: EDeviceLabelKey.MICROPHONE, name: "MacBook Air mic", icon: MicIcon },
  { labelKey: EDeviceLabelKey.SPEAKER, name: "AirPods Pro", icon: SpeakerIcon },
  { labelKey: EDeviceLabelKey.CAMERA, name: "FaceTime HD", icon: CameraIcon },
];

const STUB_LINK = "localhost:3000/conference/";
// const STUB_LINK = "https://confly.app/r/quiet-river-204";

const ConferenceSetup: FC = () => {
  const { t } = useTranslation();

  const generatedCode = "1F4DAKNO82" // TODO: generate it here or on the backend and fetch it on component mount

  const handleCopyLink = () => {
    // TODO: copy to clipboard
    void navigator.clipboard.writeText(`${STUB_LINK}${generatedCode}`);
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
