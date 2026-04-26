import { FC } from "react";

import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { basicTheme } from "theme";
import { styles } from "./styles";

const DecorativePanel: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      {/* Video tiles */}
      <Box sx={styles.tilesRow}>
        {/* Left tile — participant with label */}
        <Box sx={{ ...styles.tile, ...styles.tileLeft } as SxProps}>
          <Box sx={styles.participantBadge}>
            <Box sx={styles.activeDot} />
            <Typography variant="caption" color={basicTheme.palette.mainPalette.white}>
              {t("participantName")}
            </Typography>
          </Box>

          {/* Floating notification card */}
          <Box sx={styles.notificationCard}>
            <Box sx={styles.notificationHeader}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={styles.notificationAvatar}>
                  <Typography variant="caption" sx={{ color: basicTheme.palette.mainPalette.primary, fontWeight: 700 }}>
                    SK
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ fontWeight: 700, color: basicTheme.palette.accentPalette.text }}>
                  {t("notificationAuthor")}
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: "#9E9880" }}>
                {t("notificationTime")}
              </Typography>
            </Box>
            <Typography variant="caption" color={basicTheme.palette.accentPalette.text}>
              {t("notificationMessage")}
            </Typography>
          </Box>
        </Box>

        {/* Right tile — empty camera */}
        <Box sx={styles.tile} />
      </Box>

      {/* Bottom tagline */}
      <Box sx={styles.tagline}>
        <Typography variant="h6" color={basicTheme.palette.mainPalette.white} sx={{ whiteSpace: "pre-line" }}>
          {t("tagline")}
        </Typography>
      </Box>
    </Box>
  );
};

export default DecorativePanel;
