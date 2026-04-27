import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SxProps } from "@mui/material";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { ActiveSection } from "../../types";
import { styles } from "./styles";

interface SidebarProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

const ConferencesIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="2" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="2" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="1" y="9" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9" y="9" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const PlusIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ArrowIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalendarIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="2.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 6h12M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ProfileIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 13c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AudioIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M5 1h4a2 2 0 012 2v3a2 2 0 01-4 0V3a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 7a5 5 0 0010 0M7 12v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const AppearanceIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 1v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const BellIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1a4 4 0 014 4v3l1.5 2h-11L3 8V5a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 11a1.5 1.5 0 003 0" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const LockIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const ShortcutsIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="1" width="4" height="3" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <rect x="9" y="1" width="4" height="3" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <rect x="1" y="10" width="4" height="3" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <rect x="9" y="10" width="4" height="3" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <path d="M5 2.5h4M3 4v6M11 4v6M5 11.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const BillingIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 6h12" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3" y="8" width="3" height="1.5" rx="0.5" fill="currentColor" />
  </svg>
);

const LogOutIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M5 13H2a1 1 0 01-1-1V2a1 1 0 011-1h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9.5 10l3-3-3-3M12.5 7H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Sidebar: FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    // TODO: clear auth state and redirect
    navigate("/welcome");
  };

  const isActive = (section: ActiveSection) => activeSection === section;

  const navItemSx = (section: ActiveSection) =>
    ({ ...styles.navItem, ...(isActive(section) ? styles.navItemActive : {}) }) as SxProps;

  const subNavItemSx = (section: ActiveSection) =>
    ({ ...styles.subNavItem, ...(isActive(section) ? styles.subNavItemActive : {}) }) as SxProps;

  const settingsItemSx = (section: ActiveSection) =>
    ({ ...styles.settingsItem, ...(isActive(section) ? styles.settingsItemActive : {}) }) as SxProps;

  const navTextSx = (section: ActiveSection) =>
    ({ ...styles.navItemText, ...(isActive(section) ? styles.navItemTextActive : {}) }) as SxProps;

  const subNavTextSx = (section: ActiveSection) =>
    ({ ...styles.subNavText, ...(isActive(section) ? styles.subNavTextActive : {}) }) as SxProps;

  const settingsTextSx = (section: ActiveSection) =>
    ({ ...styles.settingsText, ...(isActive(section) ? styles.settingsTextActive : {}) }) as SxProps;

  return (
    <Box sx={styles.root}>
      <Box sx={styles.logoRow} onClick={() => onSectionChange("conferences")}>
        <Box sx={styles.logoIcon}>
          <Typography variant="h3" sx={styles.logoLetter}>C</Typography>
        </Box>
        <Typography variant="h3" sx={styles.logoText}>{t("appName")}</Typography>
      </Box>

      <Box sx={styles.navSection}>
        <Box sx={navItemSx("conferences")} onClick={() => onSectionChange("conferences")}>
          <Box sx={styles.navItemIcon}><ConferencesIcon /></Box>
          <Typography sx={navTextSx("conferences")}>{t("navConferences")}</Typography>
        </Box>
        <Box sx={styles.subNav}>
          <Box sx={subNavItemSx("createNew")} onClick={() => onSectionChange("createNew")}>
            <Box sx={styles.subNavIcon}><PlusIcon /></Box>
            <Typography sx={subNavTextSx("createNew")}>{t("navCreateNew")}</Typography>
          </Box>
          <Box sx={subNavItemSx("joinWithCode")} onClick={() => onSectionChange("joinWithCode")}>
            <Box sx={styles.subNavIcon}><ArrowIcon /></Box>
            <Typography sx={subNavTextSx("joinWithCode")}>{t("navJoinWithCode")}</Typography>
          </Box>
          <Box sx={subNavItemSx("scheduled")} onClick={() => onSectionChange("scheduled")}>
            <Box sx={styles.subNavIcon}><CalendarIcon /></Box>
            <Typography sx={subNavTextSx("scheduled")}>{t("navScheduled")}</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.settingsSection}>
        <Typography sx={styles.sectionLabel}>{t("navSettingsLabel").toUpperCase()}</Typography>
        {(
          [
            { section: "profile" as ActiveSection, icon: <ProfileIcon />, label: t("navProfile") },
            { section: "audioVideo" as ActiveSection, icon: <AudioIcon />, label: t("navAudioVideo") },
            { section: "appearance" as ActiveSection, icon: <AppearanceIcon />, label: t("navAppearance") },
            { section: "notifications" as ActiveSection, icon: <BellIcon />, label: t("navNotifications") },
            { section: "privacySecurity" as ActiveSection, icon: <LockIcon />, label: t("navPrivacySecurity") },
            { section: "shortcuts" as ActiveSection, icon: <ShortcutsIcon />, label: t("navShortcuts") },
            { section: "planBilling" as ActiveSection, icon: <BillingIcon />, label: t("navPlanBilling") },
          ] as const
        ).map(({ section, icon, label }) => (
          <Box key={section} sx={settingsItemSx(section)} onClick={() => onSectionChange(section)}>
            <Box sx={styles.settingsIcon}>{icon}</Box>
            <Typography sx={settingsTextSx(section)}>{label}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={styles.logoutRow} onClick={handleLogOut}>
        <Box sx={styles.settingsIcon}><LogOutIcon /></Box>
        <Typography sx={styles.logoutText}>{t("logOut")}</Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
