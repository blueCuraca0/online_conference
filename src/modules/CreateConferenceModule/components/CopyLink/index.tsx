import { Button, EButtonType } from "components/Button";
import { CopyIcon } from "components/icons/CopyIcon";
import { t } from "i18next";
import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { styles } from "./styles";
import { CONFERENCE_LINK_BASE } from "utils";

interface CopyLinkProps {
  code?: string;
}

const CopyLink = ({ code }: CopyLinkProps) => {
  if (!code) {
    return null;
  }

  const link = `${CONFERENCE_LINK_BASE}${code}`;

  const handleCopyLink = () => {
    void navigator.clipboard.writeText(link);
  };

  return (
    <Box sx={styles.linkCard}>
      <Typography variant="h3" sx={styles.cardTitle}>{t("conferenceLink")}</Typography>
      
      <Box sx={styles.linkRow}>
        <Box sx={styles.linkIcon}><CopyIcon /></Box>
        <Typography sx={styles.linkText}>{link}</Typography>

        <Button
          variantType={EButtonType.GHOST}
          buttonTitle={t("copyButton")}
          onClick={handleCopyLink}
          sx={styles.copyButton}
        />
      </Box>
    </Box>
  )
}

export default CopyLink;