import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SxProps } from "@mui/material";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { ConferencesIcon } from "components/icons/ConferencesIcon";
import { PlusSmIcon } from "components/icons/PlusSmIcon";
import { ArrowIcon } from "components/icons/ArrowIcon";
import { CalendarIcon } from "components/icons/CalendarIcon";
import { ProfileIcon } from "components/icons/ProfileIcon";
import { AudioIcon } from "components/icons/AudioIcon";
import { AppearanceIcon } from "components/icons/AppearanceIcon";
import { BellIcon } from "components/icons/BellIcon";
import { LockIcon } from "components/icons/LockIcon";
import { ShortcutsIcon } from "components/icons/ShortcutsIcon";
import { BillingIcon } from "components/icons/BillingIcon";
import { LogOutIcon } from "components/icons/LogOutIcon";
import { styles } from "./styles";
import { ActiveSection } from "../HomeSection/types";
import { supabase } from "lib/supabase";

interface SidebarProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

const Sidebar: FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    supabase.auth.signOut();
    // TODO: clear auth state IN STORES and redirect
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
            <Box sx={styles.subNavIcon}><PlusSmIcon /></Box>
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
