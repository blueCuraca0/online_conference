import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    gap: "10px",
  },
  title: {
    color: accentPalette.text,
    fontSize: "17px !important",
  },
  count: {
    fontSize: "13px !important",
    color: accentPalette.text,
    opacity: 0.5,
  },
  openCalendar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    color: accentPalette.text,
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  },
  openCalendarText: {
    fontSize: "13px !important",
    color: accentPalette.text,
  },
  meetingList: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  meetingRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    backgroundColor: mainPalette.white,
    borderRadius: "14px",
    padding: "14px 20px",
  },
  timeCol: {
    minWidth: "80px",
  },
  meetingTime: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
    color: accentPalette.text,
  },
  meetingDay: {
    fontSize: "12px !important",
    color: accentPalette.text,
    opacity: 0.5,
  },
  metaCol: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  meetingTitle: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
    color: accentPalette.text,
  },
  metaRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",
    color: accentPalette.text,
    opacity: 0.55,
  },
  participantCount: {
    fontSize: "12px !important",
    color: "inherit",
  },
  joinButton: {
    padding: "4px 16px",
    borderRadius: "10px",
    minWidth: "unset",
  },
  statusCol: {
    minWidth: "80px",
    display: "flex",
    justifyContent: "flex-end",
  },
  badge: {
    padding: "4px 10px",
    borderRadius: "20px",
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  badgePrimary: {
    backgroundColor: "#EEF3E8",
  },
  badgeText: {
    fontSize: "12px !important",
    color: accentPalette.text,
    opacity: 0.7,
  },
  badgeTextPrimary: {
    color: mainPalette.primary,
    opacity: 1,
    fontWeight: "600 !important",
  },
  actionCol: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  },
  detailsButton: {
    padding: "4px 16px",
    borderRadius: "10px",
    minWidth: "unset",
  },
  moreButton: {
    width: 30,
    height: 30,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.05)",
    },
  },
  moreButtonText: {
    fontSize: "14px !important",
    color: accentPalette.text,
    opacity: 0.5,
    lineHeight: "0.5 !important",
    letterSpacing: "1px",
  },
};
