import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";

const CameraIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M18 10l4-2v8l-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const SettingsContent: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Typography variant="h1" sx={styles.title}>{t("navProfile")}</Typography>
        <Typography sx={styles.subtitle}>{t("settingsSubtitle")}</Typography>
      </Box>

      <Box sx={styles.body}>
        <Box sx={styles.section}>
          <Typography sx={styles.sectionTitle}>{t("settingsAvatar")}</Typography>
          <Box sx={styles.avatarRow}>
            <Box sx={styles.avatar}>
              <Typography sx={styles.avatarInitials}>AM</Typography>
            </Box>
            <Box sx={styles.avatarActions}>
              <Box sx={styles.uploadButton}>
                <CameraIcon />
                <Typography sx={styles.uploadButtonText}>{t("settingsUploadPhoto")}</Typography>
              </Box>
              <Typography sx={styles.avatarHint}>{t("settingsAvatarHint")}</Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.divider} />

        <Box sx={styles.section}>
          <Typography sx={styles.sectionTitle}>{t("settingsPersonalInfo")}</Typography>
          <Box sx={styles.fieldsGrid}>
            {[
              { label: t("firstNameLabel"), value: "Alex" },
              { label: t("lastNameLabel"), value: "Morrow" },
              { label: t("workEmailLabel"), value: "alex@confly.app" },
              { label: t("settingsRole"), value: "Product Designer" },
            ].map(({ label, value }) => (
              <Box key={label} sx={styles.fieldGroup}>
                <Typography sx={styles.fieldLabel}>{label}</Typography>
                <Box sx={styles.fieldInput}>
                  <Typography sx={styles.fieldValue}>{value}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={styles.divider} />

        <Box sx={styles.section}>
          <Typography sx={styles.sectionTitle}>{t("settingsDangerZone")}</Typography>
          <Box sx={styles.dangerButton}>
            <Typography sx={styles.dangerButtonText}>{t("settingsDeleteAccount")}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsContent;
