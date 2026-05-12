import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Divider, SxProps } from "@mui/material";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";

const TERMS_SECTIONS = [
  {
    titleKey: "privacyTermsUseTitle",
    bodyKey: "privacyTermsUseBody",
  },
  {
    titleKey: "privacyTermsAccountTitle",
    bodyKey: "privacyTermsAccountBody",
  },
  {
    titleKey: "privacyTermsContentTitle",
    bodyKey: "privacyTermsContentBody",
  },
  {
    titleKey: "privacyTermsLiabilityTitle",
    bodyKey: "privacyTermsLiabilityBody",
  },
] as const;

const PRIVACY_SECTIONS = [
  {
    titleKey: "privacyPolicyDataTitle",
    bodyKey: "privacyPolicyDataBody",
  },
  {
    titleKey: "privacyPolicyCookiesTitle",
    bodyKey: "privacyPolicyCookiesBody",
  },
  {
    titleKey: "privacyPolicyRetentionTitle",
    bodyKey: "privacyPolicyRetentionBody",
  },
  {
    titleKey: "privacyPolicyRightsTitle",
    bodyKey: "privacyPolicyRightsBody",
  },
] as const;

const PrivacySection: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root as SxProps}>
      <Box sx={styles.heroBanner as SxProps}>
        <Box sx={styles.breadcrumb as SxProps}>
          <span>{t("navSettingsLabel")}</span>
          <span style={{ margin: "0 4px" }}>›</span>
          <span style={{ color: "rgba(255,255,255,0.9)" }}>{t("navPrivacySecurity")}</span>
        </Box>
        <Typography sx={styles.heroTitle}>{t("privacyHeroTitle")}</Typography>
        <Typography sx={styles.heroSubtitle}>{t("privacyHeroSubtitle")}</Typography>
      </Box>

      <Box sx={styles.card as SxProps}>
        <Box sx={styles.acceptedBadge as SxProps}>✓ {t("privacyAcceptedBadge")}</Box>
        <Typography sx={styles.cardTitle}>{t("privacyTermsCardTitle")}</Typography>

        {TERMS_SECTIONS.map(({ titleKey, bodyKey }, i) => (
          <Box key={titleKey}>
            {i > 0 && <Divider sx={styles.divider} />}
            <Box sx={styles.section as SxProps}>
              <Typography sx={styles.sectionTitle}>{t(titleKey)}</Typography>
              <Typography sx={styles.body}>{t(bodyKey)}</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={styles.card as SxProps}>
        <Box sx={styles.acceptedBadge as SxProps}>✓ {t("privacyAcceptedBadge")}</Box>
        <Typography sx={styles.cardTitle}>{t("privacyPolicyCardTitle")}</Typography>

        {PRIVACY_SECTIONS.map(({ titleKey, bodyKey }, i) => (
          <Box key={titleKey}>
            {i > 0 && <Divider sx={styles.divider} />}
            <Box sx={styles.section as SxProps}>
              <Typography sx={styles.sectionTitle}>{t(titleKey)}</Typography>
              <Typography sx={styles.body}>{t(bodyKey)}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PrivacySection;
