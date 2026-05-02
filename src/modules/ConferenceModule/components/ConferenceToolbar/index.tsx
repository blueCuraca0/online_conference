import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";

const MuteIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="9" y="3" width="6" height="10" rx="3" stroke="#546B41" strokeWidth="1.8" />
    <path d="M5 10v2a7 7 0 0 0 14 0v-2" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="12" y1="19" x2="12" y2="23" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="8" y1="23" x2="16" y2="23" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const CameraIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M23 7l-7 5 7 5V7z" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="1" y="5" width="15" height="14" rx="2" stroke="#546B41" strokeWidth="1.8" />
  </svg>
);

const ShareIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#546B41" strokeWidth="1.8" />
    <path d="M8 21h8M12 17v4" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 10l3-3 3 3M12 7v6" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CaptionsIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="#546B41" strokeWidth="1.8" />
    <line x1="6" y1="10" x2="14" y2="10" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="6" y1="14" x2="18" y2="14" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const RaiseIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M18 11V6a2 2 0 0 0-4 0v5" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 10.5a2 2 0 0 0-4 0V6a2 2 0 0 0-4 0v8a6 6 0 0 0 12 0v-3.5a2 2 0 0 0-4 0V10.5z" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChatIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PeopleIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="7" r="4" stroke="#546B41" strokeWidth="1.8" />
    <path d="M2 21v-1a7 7 0 0 1 14 0v1" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="18" cy="7" r="3" stroke="#546B41" strokeWidth="1.8" />
    <path d="M22 21v-1a5 5 0 0 0-5-5" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const MoreIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="5" cy="12" r="1.5" fill="#546B41" />
    <circle cx="12" cy="12" r="1.5" fill="#546B41" />
    <circle cx="19" cy="12" r="1.5" fill="#546B41" />
  </svg>
);

const PhoneOffIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 2.82 5.18 2 2 0 0 1 4.79 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.77 10.9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="2" y1="2" x2="22" y2="22" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

interface Props {
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

const ConferenceToolbar: FC<Props> = ({
  onMute, onCamera, onShare, onCaptions, onRaise, onChat, onPeople, onMore, onLeave,
}) => {
  const { t } = useTranslation();

  const tools = [
    { icon: <MuteIcon />, label: t("toolbarMute"), onClick: onMute },
    { icon: <CameraIcon />, label: t("toolbarCamera"), onClick: onCamera },
    { icon: <ShareIcon />, label: t("toolbarShare"), onClick: onShare },
    { icon: <CaptionsIcon />, label: t("toolbarCaptions"), onClick: onCaptions },
    { icon: <RaiseIcon />, label: t("toolbarRaise"), onClick: onRaise },
    { icon: <ChatIcon />, label: t("toolbarChat"), onClick: onChat },
    { icon: <PeopleIcon />, label: t("toolbarPeople"), onClick: onPeople },
    { icon: <MoreIcon />, label: t("toolbarMore"), onClick: onMore },
  ];

  return (
    <Box sx={styles.root as SxProps}>
      {tools.map((tool) => (
        <Box
          key={tool.label}
          component="button"
          sx={styles.toolButton as SxProps}
          onClick={tool.onClick}
        >
          {tool.icon}
          <Typography sx={styles.toolLabel}>{tool.label}</Typography>
        </Box>
      ))}

      <Box sx={styles.divider} />

      <Box
        component="button"
        sx={styles.leaveButton as SxProps}
        onClick={onLeave}
      >
        <PhoneOffIcon />
        <Typography sx={styles.leaveLabel}>{t("toolbarLeave")}</Typography>
      </Box>
    </Box>
  );
};

export default ConferenceToolbar;
