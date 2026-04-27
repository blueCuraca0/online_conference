import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { ActiveSection } from "../../types";
import { styles } from "./styles";

interface StubContentProps {
  section: ActiveSection;
}

const SECTION_LABELS: Record<ActiveSection, string> = {
  conferences: "Conferences",
  createNew: "Create new",
  joinWithCode: "Join with code",
  scheduled: "Scheduled",
  profile: "Profile",
  audioVideo: "Audio & video",
  appearance: "Appearance",
  notifications: "Notifications",
  privacySecurity: "Privacy & security",
  shortcuts: "Shortcuts",
  planBilling: "Plan & billing",
};

const StubContent: FC<StubContentProps> = ({ section }) => {
  const { t } = useTranslation();
  const label = SECTION_LABELS[section];

  return (
    <Box sx={styles.root}>
      <Box sx={styles.card}>
        <Box sx={styles.iconPlaceholder}>
          <Box sx={styles.iconDot} />
        </Box>
        <Typography variant="h2" sx={styles.title}>{String(label)}</Typography>
        <Typography sx={styles.subtitle}>{t("stubComingSoon")}</Typography>
      </Box>
    </Box>
  );
};

export default StubContent;
