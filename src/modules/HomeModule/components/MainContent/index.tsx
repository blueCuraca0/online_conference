import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import StartConferenceCard from "../StartConferenceCard";
import JoinConferenceCard from "../JoinConferenceCard";
import UpNextSection from "../UpNextSection";
import { styles } from "./styles";
import { useConferenceController } from "hooks/useConferenceController";

const SearchIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MainContent: FC = () => {
  const { t } = useTranslation();
  useConferenceController(true);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.headerBanner}>
        <Box sx={styles.headerLeft}>
          <Box sx={styles.dateLine}>
            <Box sx={styles.dot} />
            <Typography sx={styles.dateText}>{t("homeDate")} · {t("homeGreeting")}</Typography>
          </Box>
          <Typography variant="h1" sx={styles.bannerTitle}>{t("homeTitle")}</Typography>
        </Box>
        <Box sx={styles.headerRight}>
          <Box sx={styles.searchBox}>
            <SearchIcon />
            <Typography sx={styles.searchText}>{t("searchRoomsPlaceholder")}</Typography>
            <Box sx={styles.searchKbd}>
              <Typography sx={styles.searchKbdText}>⌘K</Typography>
            </Box>
          </Box>
          <Box sx={styles.avatar}>
            <Typography sx={styles.avatarText}>AM</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.cardsRow}>
        <StartConferenceCard />
        <JoinConferenceCard />
      </Box>

      <UpNextSection />
    </Box>
  );
};

export default MainContent;
