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
  row: {
    display: "flex",
    flexDirection: "row",
    gap: "14px",
    alignItems: "flex-start",
  },
  smallInput: {
    "& .MuiOutlinedInput-input": {
      padding: "12px 14px",
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
    background: "pink",
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
    minWidth: "unset",
    py: "4px",
    px: "8px",
  },
  searchWrapper: {
    position: "relative",
  },
  searchInput: {
    "& .MuiOutlinedInput-input": {
      padding: "11px 14px",
    },
  },
  dropdown: {
    position: "absolute",
    top: "calc(100% + 4px)",
    left: 0,
    right: 0,
    backgroundColor: mainPalette.white,
    borderRadius: "12px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.12)",
    zIndex: 10,
    overflow: "hidden",
  },
  dropdownItem: {
    padding: "10px 14px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    "&:hover": {
      backgroundColor: "#F4F7F0",
    },
  },
  dropdownName: {
    fontSize: "13px !important",
    fontWeight: "600 !important",
    color: accentPalette.text,
  },
  dropdownEmail: {
    fontSize: "12px !important",
    color: accentPalette.text,
    opacity: 0.6,
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
    justifyContent: "flex-start",
  },
  draftButton: {
    py: "9px",
    px: "20px",
    borderRadius: "14px",
    minWidth: "unset",
  },
  scheduleButton: {
    py: "9px",
    px: "24px",
    borderRadius: "14px",
    minWidth: "unset",
  },
};
