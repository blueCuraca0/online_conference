import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { MuteIcon } from "components/icons/MuteIcon";
import { MicOffToolbarIcon } from "components/icons/MicOffToolbarIcon";
import { CameraToolbarIcon } from "components/icons/CameraToolbarIcon";
import { CameraOffToolbarIcon } from "components/icons/CameraOffToolbarIcon";
import { ShareIcon } from "components/icons/ShareIcon";
import { CaptionsIcon } from "components/icons/CaptionsIcon";
import { RaiseIcon } from "components/icons/RaiseIcon";
import { ChatIcon } from "components/icons/ChatIcon";
import { PeopleToolbarIcon } from "components/icons/PeopleToolbarIcon";
import { MoreToolbarIcon } from "components/icons/MoreToolbarIcon";
import { PhoneOffIcon } from "components/icons/PhoneOffIcon";
import { styles } from "./styles";

interface Props {
  micOn: boolean;
  cameraOn: boolean;
  onMute: () => void;
  onCamera: () => void;
  onShare: () => void;
  onCaptions: () => void;
  onRaise: () => void;
  onChat: () => void;
  onPeople: () => void;
  onMore: () => void;
  onLeave: () => void;
}

const INCLUDE_LABELS = false;

const ConferenceToolbar: FC<Props> = ({
  micOn, cameraOn, onMute, onCamera, onShare, onCaptions, onRaise, onChat, onPeople, onMore, onLeave,
}) => {
  const { t } = useTranslation();

  const tools = [
    { icon: micOn ? <MuteIcon /> : <MicOffToolbarIcon />, label: t("toolbarMute"), onClick: onMute, active: !micOn },
    { icon: cameraOn ? <CameraToolbarIcon /> : <CameraOffToolbarIcon />, label: t("toolbarCamera"), onClick: onCamera, active: !cameraOn },
    { icon: <ShareIcon />, label: t("toolbarShare"), onClick: onShare },
    { icon: <CaptionsIcon />, label: t("toolbarCaptions"), onClick: onCaptions },
    { icon: <RaiseIcon />, label: t("toolbarRaise"), onClick: onRaise },
    { icon: <ChatIcon />, label: t("toolbarChat"), onClick: onChat },
    { icon: <PeopleToolbarIcon />, label: t("toolbarPeople"), onClick: onPeople },
    { icon: <MoreToolbarIcon />, label: t("toolbarMore"), onClick: onMore },
  ];

  return (
    <Box sx={styles.root as SxProps}>
      {tools.map((tool) => (
        <Box
          key={tool.label}
          component="button"
          sx={{ ...styles.toolButton, ...("active" in tool && tool.active ? styles.toolButtonActive : {}) } as SxProps}
          onClick={tool.onClick}
        >
          {tool.icon}
          {INCLUDE_LABELS && <Typography sx={"active" in tool && tool.active ? styles.toolLabelActive : styles.toolLabel}>{tool.label}</Typography>}
        </Box>
      ))}

      <Box sx={styles.divider} />

      <Box
        component="button"
        sx={styles.leaveButton as SxProps}
        onClick={onLeave}
      >
        <PhoneOffIcon />
        {INCLUDE_LABELS && <Typography sx={styles.leaveLabel}>{t("toolbarLeave")}</Typography>}
      </Box>
    </Box>
  );
};

export default ConferenceToolbar;
