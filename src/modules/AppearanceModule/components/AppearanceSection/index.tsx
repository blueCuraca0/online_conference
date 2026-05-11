import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SxProps } from "@mui/material";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { setAppLanguage } from "i18n";
import { styles } from "./styles";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "uk", label: "Українська" },
];

const AppearanceSection: FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleLanguageSelect = (code: string) => {
    setAppLanguage(code);
  };

  return (
    <Box sx={styles.root as SxProps}>
      <Box sx={styles.heroBanner as SxProps}>
        <Box sx={styles.breadcrumb as SxProps}>
          <span>{t("navSettingsLabel")}</span>
          <span style={{ margin: "0 4px" }}>›</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>{t("navAppearance")}</span>
        </Box>
        <Typography sx={styles.heroTitle}>{t("appearanceTitle")}</Typography>
      </Box>

      <Box sx={styles.card as SxProps}>
        <Typography sx={styles.cardTitle}>{t("appearanceLanguageSection")}</Typography>
        <Box sx={styles.row as SxProps}>
          <Typography sx={styles.label}>{t("appearanceLanguage")}</Typography>
          <Box sx={styles.optionGroup as SxProps}>
            {LANGUAGES.map(({ code, label }) => (
              <Box
                key={code}
                sx={{
                  ...styles.option,
                  ...(currentLang === code ? styles.optionActive : {}),
                } as SxProps}
                onClick={() => handleLanguageSelect(code)}
              >
                {label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppearanceSection;
