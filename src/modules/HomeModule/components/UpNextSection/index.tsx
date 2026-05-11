import { FC, useState } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import ProfileAvatar from "components/ProfileAvatar";
import ParticipantAvatarStack from "components/ParticipantAvatarStack";
import { CalendarOpenIcon } from "components/icons/CalendarOpenIcon";
import { styles } from "./styles";
import { useConferenceStore } from "stores/conferenceStore";
import { useProfileStore } from "stores/profileStore";
import { useNavigate } from "react-router-dom";
import MeetingActionPopup from "components/MeetingActionPopup";
import { useConferenceController } from "hooks/useConferenceController";
import { Conference } from "types/conference";
import { CONFERENCE_LINK_BASE } from "utils";

// interface Meeting {
//   time: string;
//   day: string;
//   title: string;
//   hostInitials: string;
//   hostColor: string;
//   participantCount: number;
//   timeUntil: string;
//   isPrimary: boolean;
// }

// const STUB_MEETINGS: Meeting[] = [
//   {
//     time: "10:30 AM",
//     day: "Today",
//     title: "Q3 Roadmap — Studio Sync",
//     hostInitials: "MG",
//     hostColor: "#7B9C5A",
//     participantCount: 5,
//     timeUntil: "in 18m",
//     isPrimary: true,
//   },
//   {
//     time: "1:00 PM",
//     day: "Today",
//     title: "Pricing surface review",
//     hostInitials: "Y",
//     hostColor: "#5A7B9C",
//     participantCount: 4,
//     timeUntil: "in 3h 50m",
//     isPrimary: false,
//   },
//   {
//     time: "9:00 AM",
//     day: "Tomorrow",
//     title: "Quarterly client check-in — Knot & Vine",
//     hostInitials: "NK",
//     hostColor: "#9C7B5A",
//     participantCount: 9,
//     timeUntil: "in 23h",
//     isPrimary: false,
//   },
// ];

const UpNextSection: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { conferences } = useConferenceStore();
  const { users } = useProfileStore();
  const { handleDeleteConference, handleDeclineConference } = useConferenceController();

  const [popupAnchor, setPopupAnchor] = useState<HTMLElement | null>(null);
  const [activeConference, setActiveConference] = useState<Conference | null>(null);

  const handleJoin = (code: string | null) => {
    if (code) navigate(`/conference/${code}`);
  };

  const handleDetails = (conference: Conference, el: HTMLElement) => {
    setActiveConference(conference);
    setPopupAnchor(el);
  };

  const handlePopupClose = () => {
    setPopupAnchor(null);
    setActiveConference(null);
  };

  const handlePopupJoin = (conference: Conference) => {
    if (conference.code) handleJoin(conference.code);
  };

  const handlePopupEdit = (_conference: Conference) => {
    // TODO: open edit conference panel
  };

  const handlePopupCopyLink = (conference: Conference) => {
    if (conference.code) {
      navigator.clipboard.writeText(conference.code);
    }
  };

  const handlePopupCancel = async (conference: Conference) => {
    await handleDeleteConference(conference.id);
  };

  const handlePopupDecline = async (conference: Conference) => {
    await handleDeclineConference(conference.id);
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Box sx={styles.headerLeft}>
          <Typography variant="h3" sx={styles.title}>{t("upNext")}</Typography>
          <Typography sx={styles.count}>{t("upNextCount", { count: conferences.length })}</Typography>
        </Box>

        {/* <Button
          variantType={EButtonType.GHOST}
          buttonTitle={<Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}><CalendarOpenIcon /><Typography sx={styles.openCalendarText}>{t("openCalendar")}</Typography></Box>}
          onClick={handleOpenCalendar}
          sx={{ py: "6px", px: "10px", minWidth: "unset", opacity: 0.6, "&:hover": { opacity: 1 } }}
        /> */}
      </Box>

      <Box sx={styles.meetingList}>
        {conferences.map((conference, idx) => {
          const creatorName = users.find((u) => u.userId === conference.creatorId)?.displayName || "";
          const time = conference.date ? new Date(conference.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—";
          const day = conference.date ? new Date(conference.date).toLocaleDateString() : "—";

          return (
            <Box key={conference.id} sx={styles.meetingRow}>
              {/* Mobile: avatar + time in one row at top */}
              <Box sx={styles.meetingRowTop}>
                <ProfileAvatar name={creatorName} size={36} />
                <Box sx={styles.timeCol}>
                  <Typography sx={styles.meetingTime}>{time}</Typography>
                  <Typography sx={styles.meetingDay}>{day}</Typography>
                </Box>
              </Box>

              {/* Desktop: standalone avatar + time */}
              <Box sx={styles.avatarDesktop}>
                <ProfileAvatar name={creatorName} size={40} />
              </Box>

              <Box sx={styles.timeColDesktop}>
                <Typography sx={styles.meetingTime}>{time}</Typography>
                <Typography sx={styles.meetingDay}>{day}</Typography>
              </Box>

              <Box sx={styles.metaCol}>
                <Typography sx={styles.meetingTitle}>{conference.name ?? "—"}</Typography>
                <Box sx={styles.metaRow}>
                  <Typography sx={styles.meetingTitle}>{t("total", { count: conference.participantCount })}</Typography>
                  <ParticipantAvatarStack participants={conference.participants} />
                </Box>
              </Box>

              <Box sx={styles.actionCol}>
                {idx === 0 && (
                  <Button
                    variantType={EButtonType.PRIMARY}
                    buttonTitle={t("joinMeetingButton")}
                    onClick={() => handleJoin(conference.code)}
                    sx={styles.joinButton}
                  />
                )}
                <Button
                  variantType={EButtonType.OUTLINED}
                  buttonTitle={t("detailsButton")}
                  onClick={(e) => handleDetails(conference, e.currentTarget)}
                  sx={styles.detailsButton}
                />
              </Box>
            </Box>
          );
        })}
      </Box>

      <MeetingActionPopup
        conference={activeConference}
        anchorEl={popupAnchor}
        onClose={handlePopupClose}
        onJoin={handlePopupJoin}
        onEdit={handlePopupEdit}
        onCopyLink={handlePopupCopyLink}
        onCancel={handlePopupCancel}
        onDecline={handlePopupDecline}
      />
    </Box>
  );
};

export default UpNextSection;
