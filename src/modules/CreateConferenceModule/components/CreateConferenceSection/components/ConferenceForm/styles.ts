import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    minWidth: 0,
  },
  card: {
    backgroundColor: mainPalette.white,
    borderRadius: "20px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flex: 1,
  },
  fieldLabel: {
    fontSize: "12px !important",
    color: accentPalette.text,
    opacity: 0.55,
    fontWeight: "500 !important",
  },
  nameInputWrapper: {
    borderRadius: "12px",
    border: `1.5px solid rgba(0,0,0,0.1)`,
    padding: "13px 16px",
    backgroundColor: "#FAFAFA",
    "&:focus-within": {
      borderColor: mainPalette.primary,
      backgroundColor: mainPalette.white,
    },
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: "14px",
    alignItems: "flex-start",
  },
  dateInputWrapper: {
    borderRadius: "12px",
    border: `1.5px solid rgba(0,0,0,0.1)`,
    padding: "12px 14px",
    backgroundColor: "#FAFAFA",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    "&:focus-within": {
      borderColor: mainPalette.primary,
    },
  },
  dateIcon: {
    color: accentPalette.text,
    opacity: 0.45,
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  smallInputWrapper: {
    borderRadius: "12px",
    border: `1.5px solid rgba(0,0,0,0.1)`,
    padding: "12px 14px",
    backgroundColor: "#FAFAFA",
    "&:focus-within": {
      borderColor: mainPalette.primary,
    },
  },
  agendaWrapper: {
    borderRadius: "12px",
    border: `1.5px solid rgba(0,0,0,0.1)`,
    padding: "14px 16px",
    backgroundColor: "#FAFAFA",
    "&:focus-within": {
      borderColor: mainPalette.primary,
      backgroundColor: mainPalette.white,
    },
  },
  inviteCard: {
    backgroundColor: mainPalette.white,
    borderRadius: "20px",
    padding: "22px 28px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  inviteHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inviteTitle: {
    fontSize: "16px !important",
    color: accentPalette.text,
  },
  copyLinkBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    color: mainPalette.primary,
    "&:hover": {
      opacity: 0.75,
    },
  },
  copyLinkText: {
    fontSize: "13px !important",
    color: mainPalette.primary,
    fontWeight: "500 !important",
  },
  inviteInputWrapper: {
    borderRadius: "12px",
    border: `1.5px solid rgba(0,0,0,0.1)`,
    padding: "11px 14px",
    backgroundColor: "#FAFAFA",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    "&:focus-within": {
      borderColor: mainPalette.primary,
    },
  },
  searchIcon: {
    color: accentPalette.text,
    opacity: 0.4,
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "8px",
  },
  chip: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "7px",
    backgroundColor: "#EEF3E8",
    borderRadius: "20px",
    padding: "5px 12px 5px 6px",
  },
  chipAvatar: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  chipInitials: {
    fontSize: "10px !important",
    fontWeight: "600 !important",
    color: mainPalette.white,
  },
  chipName: {
    fontSize: "13px !important",
    color: accentPalette.text,
    fontWeight: "500 !important",
  },
  chipRemove: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: accentPalette.text,
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
      backgroundColor: "rgba(0,0,0,0.08)",
    },
  },
  chipRemoveText: {
    fontSize: "16px !important",
    lineHeight: "1 !important",
    color: "inherit",
  },
  formActions: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    justifyContent: "flex-end",
  },
  draftButton: {
    padding: "13px 24px",
    borderRadius: "14px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.04)",
    },
  },
  draftButtonText: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
    color: mainPalette.primary,
  },
  scheduleButton: {
    padding: "13px 28px",
    borderRadius: "14px",
    backgroundColor: mainPalette.primary,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#4A5E38",
    },
  },
  scheduleButtonText: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
    color: mainPalette.white,
  },
};
