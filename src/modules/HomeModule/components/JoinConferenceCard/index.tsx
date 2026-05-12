import { FC, useState, KeyboardEvent, ChangeEvent, useRef } from "react";
import { SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import { LinkIcon } from "components/icons/LinkIcon";
import { styles, hiddenInputStyle } from "./styles";

const CODE_LENGTH = 10;

const JoinConferenceCard: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const codeChars = code.padEnd(CODE_LENGTH, " ").split("");

  return (
    <Box sx={styles.root}>
      <Box sx={styles.iconButton}>
        <LinkIcon />
      </Box>
      <Typography variant="h2" sx={styles.title}>{t("joinConference")}</Typography>
      <Typography sx={styles.desc}>{t("joinConferenceDesc")}</Typography>

      <Box sx={styles.codeRow} onClick={() => inputRef.current?.focus()}>
        {codeChars.map((char, i) => (
          <Box
            key={i}
            sx={{ ...styles.codeBox, ...(focused && i === code.length ? styles.codeBoxActive : {}) } as SxProps}
          >
            <Typography sx={styles.codeChar}>{char.trim() || ""}</Typography>
          </Box>
        ))}

        <input
          ref={inputRef}
          value={code}
          onChange={handleCodeChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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

      {/* <Box sx={styles.pasteLinkRow} onClick={handlePasteLink}>
        <Typography sx={styles.pasteLinkPrefix}>{t("or")}&nbsp;</Typography>
        <Typography sx={styles.pasteLinkText}>{t("pasteLinkInstead")}</Typography>
      </Box> */}
    </Box>
  );
};

export default JoinConferenceCard;
