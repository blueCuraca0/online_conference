import { FC } from "react";

import { useTranslation } from "react-i18next";
import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { basicTheme } from "theme";
import { styles } from "./styles";

const STAT_VALUES = ["12k+", "37 ms", "0"];
const STAT_LABEL_KEYS = ["statActiveTeams", "statLatency", "statDataBrokers"] as const;

const TestimonialPanel: FC = () => {
  const { t } = useTranslation();

  const stats = STAT_VALUES.map((value, i) => ({ value, label: t(STAT_LABEL_KEYS[i]) }));

  return (
    <Box sx={styles.root}>
      {/* Quote */}
      <Box sx={styles.quoteBlock}>
        <Typography
          variant="h6"
          sx={{ ...styles.quoteText, color: basicTheme.palette.accentPalette.text }}
        >
          {t("testimonialQuote")}{" "}
          <Box
            component="em"
            sx={{ color: basicTheme.palette.mainPalette.primary, fontStyle: "italic" }}
          >
            {t("testimonialEmphasis")}
          </Box>
          {t("testimonialEnd")}
        </Typography>

        {/* Author */}
        <Box sx={styles.authorRow}>
          <Box sx={styles.authorAvatar}>
            <Typography
              variant="caption"
              sx={{ color: basicTheme.palette.mainPalette.white, fontWeight: 700 }}
            >
              NK
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="bodyText"
              sx={{ fontWeight: 700, color: basicTheme.palette.accentPalette.text }}
            >
              {t("authorName")}
            </Typography>
            <Typography variant="caption" sx={{ color: "#9E9880" }}>
              {t("authorRole")}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Stats */}
      <Box sx={styles.statsRow}>
        {stats.map((stat) => (
          <Box key={stat.label} sx={styles.statCard}>
            <Typography variant="h2" color={basicTheme.palette.accentPalette.text}>
              {stat.value}
            </Typography>
            <Typography variant="caption" sx={{ color: "#9E9880" }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialPanel;
