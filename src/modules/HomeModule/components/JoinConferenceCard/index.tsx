import { FC, useState, KeyboardEvent, ChangeEvent } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import { styles } from "./styles";

const CODE_LENGTH = 10;

const LinkIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M8.5 11.5a4.5 4.5 0 006.364 0l2-2a4.5 4.5 0 00-6.364-6.364l-1 1"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    />
    <path
      d="M11.5 8.5a4.5 4.5 0 00-6.364 0l-2 2a4.5 4.5 0 006.364 6.364l1-1"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    />
  </svg>
);

const JoinConferenceCard: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [code, setCode] = useState("QUIETRIVER");

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (value.length <= CODE_LENGTH) {
      setCode(value);
    }
  };

  const handleJoin = () => {
    if (code.length > 0) {
      // TODO: validate code and navigate to conference
      navigate(`/conference/${code}`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleJoin();
  };

  const handlePasteLink = () => {
    // TODO: open paste-link dialog
  };

  const codeChars = code.padEnd(CODE_LENGTH, " ").split("");

  return (
    <Box sx={styles.root}>
      <Box sx={styles.iconButton}>
        <LinkIcon />
      </Box>
      <Typography variant="h2" sx={styles.title}>{t("joinConference")}</Typography>
      <Typography sx={styles.desc}>{t("joinConferenceDesc")}</Typography>

      <Box sx={styles.codeRow}>
        {codeChars.map((char, i) => (
          <Box key={i} sx={{ ...styles.codeBox, ...(i === code.length - 1 ? styles.codeBoxActive : {}) } as SxProps}>
            <Typography sx={styles.codeChar}>{char.trim() || ""}</Typography>
          </Box>
        ))}
        <input
          value={code}
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          style={hiddenInputStyle}
          autoComplete="off"
          aria-label="Conference code"
        />
      </Box>

      <Button
        variantType={EButtonType.PRIMARY}
        buttonTitle={t("joinTheCall")}
        onClick={handleJoin}
        sx={styles.joinButton}
      />

      <Box sx={styles.pasteLinkRow} onClick={handlePasteLink}>
        <Typography sx={styles.pasteLinkPrefix}>or&nbsp;</Typography>
        <Typography sx={styles.pasteLinkText}>{t("pasteLinkInstead").replace("or ", "")}</Typography>
      </Box>
    </Box>
  );
};

const hiddenInputStyle: React.CSSProperties = {
  position: "absolute",
  opacity: 0,
  width: 0,
  height: 0,
  pointerEvents: "none",
};

export default JoinConferenceCard;
