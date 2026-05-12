import { FC, useState } from "react";
import { Drawer, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { ConferenceTestQuestion } from "types/conferenceTest";
import { styles } from "./styles";

interface Props {
  open: boolean;
  question: ConferenceTestQuestion;
  onClose: () => void;
  onSubmit: (isCorrect: boolean) => void;
}

const TestPanel: FC<Props> = ({ open, question, onClose, onSubmit }) => {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedId === null) return;
    setSubmitted(true);
    onSubmit(selectedId === question.correctId);
  };

  const handleClose = () => {
    setSelectedId(null);
    setSubmitted(false);
    onClose();
  };

  const getOptionSx = (idx: number): SxProps => {
    if (!submitted) {
      return { ...styles.optionButton, ...(selectedId === idx ? styles.optionSelected : {}) } as SxProps;
    }
    if (idx === question.correctId) return { ...styles.optionButton, ...styles.optionCorrect } as SxProps;
    if (idx === selectedId) return { ...styles.optionButton, ...styles.optionWrong } as SxProps;
    return styles.optionButton as SxProps;
  };

  const isCorrect = submitted && selectedId === question.correctId;

  return (
    <Drawer anchor="right" open={open} onClose={handleClose} sx={styles.drawer as SxProps}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>{t("toolbarTest")}</Typography>
        <Box component="button" sx={styles.closeButton as SxProps} onClick={handleClose}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </Box>
      </Box>

      <Box sx={styles.content}>
        <Typography sx={styles.question}>{question.title}</Typography>

        {question.options.map((option, idx) => (
          <Box
            key={idx}
            component="button"
            sx={getOptionSx(idx)}
            onClick={() => { if (!submitted) setSelectedId(idx); }}
          >
            {option}
          </Box>
        ))}

        {!submitted && (
          <Box
            component="button"
            sx={styles.submitButton as SxProps}
            onClick={handleSubmit}
            disabled={selectedId === null}
          >
            {t("testSubmit")}
          </Box>
        )}

        {submitted && (
          <Typography sx={styles.resultText}>
            {isCorrect ? t("testCorrect") : t("testWrong")}
          </Typography>
        )}
      </Box>
    </Drawer>
  );
};

export default TestPanel;
