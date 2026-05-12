import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: 280,
    minWidth: 280,
    height: "100vh",
    flexShrink: 0,
    overflow: "hidden",
    backgroundColor: mainPalette.white,
    borderRight: `1px solid rgba(0,0,0,0.06)`,
    padding: "24px 16px",
    gap: "4px",
  },
  logoRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    mb: "24px",
  },
  logoIcon: {
    width: 36,
    height: 36,
    borderRadius: "10px",
    backgroundColor: mainPalette.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoLetter: {
    color: mainPalette.white,
    fontSize: "16px !important",
  },
  logoText: {
    color: accentPalette.text,
    fontSize: "18px !important",
  },
  navSection: {
    mb: "8px",
  },
  navItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    padding: "8px 12px",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#EEF3E8",
    "&:hover": {
      backgroundColor: "#E5EDD8",
    },
  },
  navItemIcon: {
    color: mainPalette.primary,
    display: "flex",
    alignItems: "center",
  },
  navItemText: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
    color: mainPalette.primary,
  },
  subNav: {
    display: "flex",
    flexDirection: "column",
    mt: "2px",
    pl: "12px",
  },
  // subNavItem: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   gap: "10px",
  //   padding: "7px 12px",
  //   borderRadius: "8px",
  //   cursor: "pointer",
  //   "&:hover": {
  //     backgroundColor: "#F3F5F0",
  //   },
  // },
  subNavIcon: {
    color: accentPalette.text,
    opacity: 0.6,
    display: "flex",
    alignItems: "center",
  },
  subNavText: {
    fontSize: "13px !important",
    color: accentPalette.text,
  },
  settingsSection: {
    flex: 1,
    mt: "16px",
  },
  sectionLabel: {
    fontSize: "11px !important",
    fontWeight: "600 !important",
    color: accentPalette.text,
    opacity: 0.45,
    letterSpacing: "0.08em",
    px: "12px",
    mb: "6px",
  },
  settingsItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    padding: "7px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#F3F5F0",
    },
  },
  nonActiveSettingsItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    padding: "7px 12px",
    borderRadius: "8px",
  },
  settingsIcon: {
    color: accentPalette.text,
    opacity: 0.55,
    display: "flex",
    alignItems: "center",
  },
  settingsText: {
    fontSize: "13px !important",
    color: accentPalette.text,
  },
  navItemActive: {
    backgroundColor: "#E0EBD0",
    "&:hover": {
      backgroundColor: "#E0EBD0",
    },
  },
  subNavItemActive: {
    backgroundColor: "#EEF3E8",
  },
  navItemTextActive: {
    color: "#3A5028",
  },
  subNavTextActive: {
    color: "#3A5028",
    fontWeight: "600 !important",
  },
  settingsItemActive: {
    backgroundColor: "#EEF3E8",
  },
  settingsTextActive: {
    color: "#3A5028",
    fontWeight: "600 !important",
  },
  logoutRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    padding: "7px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    mt: "8px",
    "&:hover": {
      backgroundColor: "#FEF0F0",
    },
  },
  logoutText: {
    fontSize: "13px !important",
    color: accentPalette.text,
  },
};
