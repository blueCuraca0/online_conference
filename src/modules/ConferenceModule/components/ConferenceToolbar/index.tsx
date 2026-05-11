import { FC, useState } from "react";
import { Popover, SxProps } from "@mui/material";
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
import { NotesIcon } from "components/icons/NotesIcon";
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
  onNotes: () => void;
  onMore: () => void;
  onLeave: () => void;
}

const INCLUDE_LABELS = false;

const ConferenceToolbar: FC<Props> = ({
  micOn, cameraOn, onMute, onCamera, onShare, onCaptions, onRaise, onChat, onPeople, onNotes, onMore, onLeave,
}) => {
  const { t } = useTranslation();
  const [moreAnchor, setMoreAnchor] = useState<HTMLElement | null>(null);

  const allTools = [
    { icon: micOn ? <MuteIcon /> : <MicOffToolbarIcon />, label: t("toolbarMute"), onClick: onMute, active: !micOn },
    { icon: cameraOn ? <CameraToolbarIcon /> : <CameraOffToolbarIcon />, label: t("toolbarCamera"), onClick: onCamera, active: !cameraOn },
    // { icon: <ShareIcon />, label: t("toolbarShare"), onClick: onShare },
    // { icon: <CaptionsIcon />, label: t("toolbarCaptions"), onClick: onCaptions },
    // { icon: <RaiseIcon />, label: t("toolbarRaise"), onClick: onRaise },
    { icon: <ChatIcon />, label: t("toolbarChat"), onClick: onChat },
    { icon: <PeopleToolbarIcon />, label: t("toolbarPeople"), onClick: onPeople },
    { icon: <NotesIcon />, label: t("toolbarNotes"), onClick: onNotes },
    // { icon: <MoreToolbarIcon />, label: t("toolbarMore"), onClick: onMore },
  ];

  const primaryTools = [allTools[0], allTools[1]]; // mic, camera
  const secondaryTools = [allTools[2], allTools[3], allTools[4]]; // chat, people, notes

  const toolBtnSx = (active?: boolean) =>
    ({ ...styles.toolButton, ...(active ? styles.toolButtonActive : {}) }) as SxProps;

  return (
    <>
      {/* Desktop toolbar — unchanged */}
      <Box sx={{ ...styles.root, display: { mobile: "none", tablet: "flex" } } as SxProps}>
        {allTools.map((tool) => (
          <Box
            key={tool.label}
            component="button"
            sx={toolBtnSx("active" in tool ? tool.active : false)}
            onClick={tool.onClick}
          >
            {tool.icon}
            {INCLUDE_LABELS && <Typography sx={"active" in tool && tool.active ? styles.toolLabelActive : styles.toolLabel}>{tool.label}</Typography>}
          </Box>
        ))}

        <Box sx={styles.divider} />

        <Box component="button" sx={styles.leaveButton as SxProps} onClick={onLeave}>
          <PhoneOffIcon />
          {INCLUDE_LABELS && <Typography sx={styles.leaveLabel}>{t("toolbarLeave")}</Typography>}
        </Box>
      </Box>

      {/* Mobile toolbar — primary + three-dots + leave */}
      <Box sx={{ ...styles.root, display: { mobile: "flex", tablet: "none" } } as SxProps}>
        {primaryTools.map((tool) => (
          <Box
            key={tool.label}
            component="button"
            sx={toolBtnSx("active" in tool ? tool.active : false)}
            onClick={tool.onClick}
          >
            {tool.icon}
          </Box>
        ))}

        <Box sx={styles.divider} />

        <Box
          component="button"
          sx={styles.toolButton as SxProps}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => setMoreAnchor(e.currentTarget)}
        >
          <MoreToolbarIcon />
        </Box>

        <Box sx={styles.divider} />

        <Box component="button" sx={styles.leaveButton as SxProps} onClick={onLeave}>
          <PhoneOffIcon />
        </Box>
      </Box>

      {/* Action popup for secondary tools on mobile */}
      <Popover
        open={Boolean(moreAnchor)}
        anchorEl={moreAnchor}
        onClose={() => setMoreAnchor(null)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
        PaperProps={{ sx: styles.popoverPaper as SxProps }}
      >
        {secondaryTools.map((tool) => (
          <Box
            key={tool.label}
            component="button"
            sx={styles.popoverItem as SxProps}
            onClick={() => { tool.onClick(); setMoreAnchor(null); }}
          >
            <Box sx={styles.popoverItemIcon}>{tool.icon}</Box>
            <Typography sx={styles.popoverItemLabel}>{tool.label}</Typography>
          </Box>
        ))}
      </Popover>
    </>
  );
};

export default ConferenceToolbar;
