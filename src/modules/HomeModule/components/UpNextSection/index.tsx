import { FC } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import { CalendarOpenIcon } from "components/icons/CalendarOpenIcon";
import { styles } from "./styles";
import { useConferenceStore } from "stores/conferenceStore";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()
  const { conferences } = useConferenceStore();

  const handleOpenCalendar = () => {
    // TODO: navigate to calendar view
  };

  const handleJoin = (_conferenceId: string) => {
    navigate(`/conference/${_conferenceId}`);
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

        <Button
          variantType={EButtonType.GHOST}
          buttonTitle={<Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}><CalendarOpenIcon /><Typography sx={styles.openCalendarText}>{t("openCalendar")}</Typography></Box>}
          onClick={handleOpenCalendar}
          sx={{ py: "6px", px: "10px", minWidth: "unset", opacity: 0.6, "&:hover": { opacity: 1 } }}
        />
      </Box>

      <Box sx={styles.meetingList}>
        {conferences.map((conference) => (
          <Box key={conference.id} sx={styles.meetingRow}>
            <Box sx={styles.timeCol}>
              <Typography sx={styles.meetingTime}>{conference.date ? new Date(conference.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "—"}</Typography>
              <Typography sx={styles.meetingDay}>{conference.date ? new Date(conference.date).toLocaleDateString() : "—"}</Typography>
            </Box>

            <Box sx={styles.metaCol}>
              <Typography sx={styles.meetingTitle}>{conference.name ?? "—"}</Typography>
              <Box sx={styles.metaRow}>
                {/* hostAvatar — not available on Conference type */}
                {/* <Box sx={{ ...styles.hostAvatar, backgroundColor: conference.hostColor } as SxProps}>
                  <Typography sx={styles.hostInitials}>{conference.hostInitials}</Typography>
                </Box> */}
                {/* <PeopleSmIcon /> */}
                {/* <Typography sx={styles.participantCount}>{conference.participantCount}</Typography> */}
              </Box>
            </Box>

            <Box sx={styles.statusCol}>
              {/* timeUntil / isPrimary badge — not available on Conference type */}
              <Box sx={{ ...styles.badge, ...(true ? styles.badgePrimary : {}) } as SxProps}>
                <Typography sx={{ ...styles.badgeText, ...(true ? styles.badgeTextPrimary : {}) } as SxProps}>
                  {conference.createdAt} {/* TODO: timeUntil or duration */}
                </Typography>
              </Box>
            </Box>

            <Box sx={styles.actionCol}>
              {/* isPrimary join/details split — not available on Conference type; show details for all */}
              <Button
                variantType={EButtonType.OUTLINED}
                buttonTitle={t("detailsButton")}
                onClick={() => handleDetails(conference.id)}
                sx={styles.detailsButton}
              />
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
