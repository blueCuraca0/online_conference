import { basicTheme } from "theme";
import { SxStyles } from "types/styles";

const { mainPalette, accentPalette } = basicTheme.palette;

export const styles: SxStyles = {
  root: {
    width: "380px",
    minWidth: "340px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  cameraPreview: {
    background: "pink",
    // backgroundColor: mainPalette.primary,
    borderRadius: "20px",
    height: "220px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at 60% 40%, rgba(180,210,140,0.35) 0%, transparent 65%)",
    },
  },

  liveBadge: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: "20px",
    padding: "5px 12px",
    alignSelf: "flex-end",
  },
  liveDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    backgroundColor: "#8DB870",
  },
  liveBadgeText: {
    fontSize: "12px !important",
    fontWeight: "600 !important",
    color: mainPalette.white,
  },

  cameraLabel: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  cameraLabelSmall: {
    fontSize: "11px !important",
    color: "rgba(255,255,255,0.6)",
  },
  cameraModel: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
    color: mainPalette.white,
  },
  
  copyButton: {
    flexShrink: 0,
    minWidth: "unset",
    py: "4px",
    px: "8px",
  },
  devicesCard: {
    backgroundColor: mainPalette.white,
    borderRadius: "20px",
    padding: "20px 22px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  deviceList: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  deviceRow: {
    background: "pink",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "12px",
    padding: "10px 0",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  deviceIconWrapper: {
    width: 36,
    height: 36,
    borderRadius: "10px",
    backgroundColor: "#F0F4EC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: mainPalette.primary,
    flexShrink: 0,
  },
  deviceInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  deviceLabel: {
    fontSize: "11px !important",
    color: accentPalette.text,
    opacity: 0.5,
  },
  deviceName: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
    color: accentPalette.text,
  },
  deviceMore: {
    width: 32,
    height: 32,
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: accentPalette.text,
    opacity: 0.4,
    "&:hover": {
      opacity: 0.8,
      backgroundColor: "rgba(0,0,0,0.04)",
    },
  },
};
