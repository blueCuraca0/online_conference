import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import StartConferenceCard from "../StartConferenceCard";
import JoinConferenceCard from "../JoinConferenceCard";
import UpNextSection from "../UpNextSection";
import { styles } from "./styles";
import { useConferenceController } from "hooks/useConferenceController";
import { useProfileStore } from "stores/profileStore";
import { getToday } from "helpers";
import ProfileAvatar from "components/ProfileAvatar";


const MainContent: FC = () => {
  const { t } = useTranslation();
  const { profile } = useProfileStore();
  useConferenceController(true);
  const today = getToday();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.headerBanner}>
        <Box sx={styles.headerLeft}>
          <Box sx={styles.dateLine}>
            <Box sx={styles.dot} />
            <Typography sx={styles.dateText}>{today} · {t("homeGreeting", { name: profile?.displayName })}</Typography>
          </Box>

          <Typography variant="h1" sx={styles.bannerTitle}>{t("homeTitle")}</Typography>
        </Box>

        <Box sx={styles.headerRight}>
          {/* <Box sx={styles.searchBox}>
            <SearchIcon />
            <Typography sx={styles.searchText}>{t("searchRoomsPlaceholder")}</Typography>
            <Box sx={styles.searchKbd}>
              <Typography sx={styles.searchKbdText}>⌘K</Typography>
            </Box>
          </Box> */}

          <ProfileAvatar size={40} name={profile?.displayName} />
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
