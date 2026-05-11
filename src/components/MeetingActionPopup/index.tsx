import { FC } from "react";
import { Popover, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Conference } from "types/conference";
import { styles } from "./styles";

interface MeetingActionPopupProps {
  conference: Conference | null;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onJoin: (conference: Conference) => void;
  onEdit: (conference: Conference) => void;
  onCopyLink: (conference: Conference) => void;
  onCancel: (conference: Conference) => void;
  onDecline: (conference: Conference) => void;
}

const MeetingActionPopup: FC<MeetingActionPopupProps> = ({
  conference,
  anchorEl,
  onClose,
  onJoin,
  onEdit,
  onCopyLink,
  onCancel,
  onDecline,
}) => {
  const { t } = useTranslation();

  const handleAction = (fn: (c: Conference) => void) => {
    if (!conference) return;
    fn(conference);
    onClose();
  };

  interface ActionItem {
    label: string;
    onClick: () => void;
    destructive?: boolean;
  }

  const actions: ActionItem[] = conference
    ? [
        { label: t("join"), onClick: () => handleAction(onJoin) },
        ...(conference.isHost
          ? [{ label: t("editConference"), onClick: () => handleAction(onEdit) }]
          : []),
        { label: t("copyInviteCode"), onClick: () => handleAction(onCopyLink) },
        conference.isHost
          ? { label: t("cancelConference"), onClick: () => handleAction(onCancel), destructive: true }
          : { label: t("declineConference"), onClick: () => handleAction(onDecline), destructive: true },
      ]
    : [];

  return (
    <Popover
      open={Boolean(anchorEl) && Boolean(conference)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      slotProps={{ paper: { sx: styles.paper } }}
    >
      <Box sx={styles.list}>
        {actions.map((action) => (
          <Box
            key={action.label}
            sx={{ ...styles.item, ...(action.destructive ? styles.itemDestructive : {}) } as SxProps}
            onClick={action.onClick}
          >
            <Typography sx={{ ...styles.itemText, ...(action.destructive ? styles.itemTextDestructive : {}) } as SxProps}>
              {action.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Popover>
  );
};

export default MeetingActionPopup;
