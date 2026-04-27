import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";

interface Meeting {
  time: string;
  day: string;
  title: string;
  hostInitials: string;
  hostColor: string;
  participantCount: number;
  timeUntil: string;
  isPrimary: boolean;
}

const STUB_MEETINGS: Meeting[] = [
  {
    time: "10:30 AM",
    day: "Today",
    title: "Q3 Roadmap — Studio Sync",
    hostInitials: "MG",
    hostColor: "#7B9C5A",
    participantCount: 5,
    timeUntil: "in 18m",
    isPrimary: true,
  },
  {
    time: "1:00 PM",
    day: "Today",
    title: "Pricing surface review",
    hostInitials: "Y",
    hostColor: "#5A7B9C",
    participantCount: 4,
    timeUntil: "in 3h 50m",
    isPrimary: false,
  },
  {
    time: "9:00 AM",
    day: "Tomorrow",
    title: "Quarterly client check-in — Knot & Vine",
    hostInitials: "NK",
    hostColor: "#9C7B5A",
    participantCount: 9,
    timeUntil: "in 23h",
    isPrimary: false,
  },
];

const CalendarOpenIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="2.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 6h12M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PeopleIcon: FC = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="4.5" cy="4" r="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M0.5 11c0-2.21 1.79-3.5 4-3.5s4 1.29 4 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="9" cy="3.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M11.5 10.5c0-1.66-1.12-2.8-2.5-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const UpNextSection: FC = () => {
  const { t } = useTranslation();

  const handleOpenCalendar = () => {
    // TODO: navigate to calendar view
  };

  const handleJoin = (_meetingTitle: string) => {
    // TODO: join conference by title/id
  };

  const handleDetails = (_meetingTitle: string) => {
    // TODO: open meeting details panel
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Box sx={styles.headerLeft}>
          <Typography variant="h3" sx={styles.title}>{t("upNext")}</Typography>
          <Typography sx={styles.count}>{t("upNextCount")}</Typography>
        </Box>
        <Box sx={styles.openCalendar} onClick={handleOpenCalendar}>
          <CalendarOpenIcon />
          <Typography sx={styles.openCalendarText}>{t("openCalendar")}</Typography>
        </Box>
      </Box>

      <Box sx={styles.meetingList}>
        {STUB_MEETINGS.map((meeting) => (
          <Box key={meeting.title} sx={styles.meetingRow}>
            <Box sx={styles.timeCol}>
              <Typography sx={styles.meetingTime}>{meeting.time}</Typography>
              <Typography sx={styles.meetingDay}>{meeting.day}</Typography>
            </Box>
            <Box sx={styles.metaCol}>
              <Typography sx={styles.meetingTitle}>{meeting.title}</Typography>
              <Box sx={styles.metaRow}>
                <Box sx={{ ...styles.hostAvatar, backgroundColor: meeting.hostColor } as SxProps}>
                  <Typography sx={styles.hostInitials}>{meeting.hostInitials}</Typography>
                </Box>
                <PeopleIcon />
                <Typography sx={styles.participantCount}>{meeting.participantCount}</Typography>
              </Box>
            </Box>
            <Box sx={styles.statusCol}>
              <Box sx={{ ...styles.badge, ...(meeting.isPrimary ? styles.badgePrimary : {}) } as SxProps}>
                <Typography sx={{ ...styles.badgeText, ...(meeting.isPrimary ? styles.badgeTextPrimary : {}) } as SxProps}>
                  {meeting.timeUntil}
                </Typography>
              </Box>
            </Box>
            <Box sx={styles.actionCol}>
              {meeting.isPrimary ? (
                <Box sx={styles.joinButton} onClick={() => handleJoin(meeting.title)}>
                  <Typography sx={styles.joinButtonText}>{t("joinMeetingButton")}</Typography>
                </Box>
              ) : (
                <Box sx={styles.detailsButton} onClick={() => handleDetails(meeting.title)}>
                  <Typography sx={styles.detailsButtonText}>{t("detailsButton")}</Typography>
                </Box>
              )}
              <Box sx={styles.moreButton}>
                <Typography sx={styles.moreButtonText}>···</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UpNextSection;
