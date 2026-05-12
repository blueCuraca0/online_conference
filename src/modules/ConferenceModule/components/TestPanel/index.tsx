import { FC, useEffect, useState } from "react";
import { Drawer, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { ConferenceTest, ConferenceTestQuestion } from "types/conferenceTest";
import { useConferenceStore } from "stores/conferenceStore";
import { styles } from "./styles";

const CloseButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <Box component="button" sx={styles.closeButton as SxProps} onClick={onClick}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <line x1="18" y1="6" x2="6" y2="18" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="6" y1="6" x2="18" y2="18" stroke="#546B41" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  </Box>
);

// ---------- Host view ----------

interface HostViewProps {
  test: ConferenceTest;
  onStartNew: () => void;
}

const HostView: FC<HostViewProps> = ({ test, onStartNew }) => {
  const { t } = useTranslation();
  const { question, totalAnswers, totalCorrect } = test;

  return (
    <>
      <Box sx={styles.statsRow}>
        <Box sx={styles.statCard}>
          <Typography sx={styles.statValue}>{totalAnswers}</Typography>
          <Typography sx={styles.statLabel}>{t("testStatAnswers")}</Typography>
        </Box>
        <Box sx={styles.statCard}>
          <Typography sx={styles.statValue}>{totalCorrect}</Typography>
          <Typography sx={styles.statLabel}>{t("testStatCorrect")}</Typography>
        </Box>
      </Box>

      <Box sx={styles.divider} />

      <Typography sx={styles.question}>{question.title}</Typography>

      {question.options.map((option, idx) => (
        <Box
          key={idx}
          sx={{
            ...styles.optionReadonly,
            ...(idx === question.correctId ? styles.optionCorrectReadonly : {}),
          }}
        >
          {option}
        </Box>
      ))}

      <Box
        component="button"
        sx={styles.newTestButton as SxProps}
        onClick={onStartNew}
      >
        {t("testStartNew")}
      </Box>
    </>
  );
};

// ---------- Host create view ----------

const MIN_OPTIONS = 2;
const MAX_OPTIONS = 10;
const EMPTY_QUESTION: ConferenceTestQuestion = { title: "", options: ["", ""], correctId: 0 };

const inputSx = (highlighted: boolean): SxProps => ({
  flex: 1,
  padding: "11px 14px",
  borderRadius: "10px",
  border: `1.5px solid ${highlighted ? "#546B41" : "rgba(84,107,65,0.25)"}`,
  backgroundColor: highlighted ? "rgba(84,107,65,0.08)" : "transparent",
  fontSize: "14px",
  color: "inherit",
  fontFamily: "'Proba Pro', Arial, sans-serif",
  outline: "none",
  boxSizing: "border-box",
  "&:focus": { borderColor: "#546B41" },
});

const iconButtonSx: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 32,
  height: 32,
  borderRadius: "8px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  color: "#546B41",
  "&:hover": { backgroundColor: "rgba(84,107,65,0.08)" },
  "&:disabled": { opacity: 0.3, cursor: "default" },
};

interface HostCreateViewProps {
  onSave: (question: ConferenceTestQuestion) => void;
}

const HostCreateView: FC<HostCreateViewProps> = ({ onSave }) => {
  const { t } = useTranslation();
  const [draft, setDraft] = useState<ConferenceTestQuestion>(EMPTY_QUESTION);

  const setOption = (idx: number, value: string) =>
    setDraft((prev) => {
      const options = [...prev.options];
      options[idx] = value;
      return { ...prev, options };
    });

  const addOption = () =>
    setDraft((prev) => ({ ...prev, options: [...prev.options, ""] }));

  const removeOption = (idx: number) =>
    setDraft((prev) => {
      const options = prev.options.filter((_, i) => i !== idx);
      const correctId = prev.correctId >= options.length ? options.length - 1 : prev.correctId === idx ? 0 : prev.correctId > idx ? prev.correctId - 1 : prev.correctId;
      return { ...prev, options, correctId };
    });

  const isValid = draft.title.trim() !== "" && draft.options.every((o) => o.trim() !== "");

  return (
    <>
      <Box
        component="input"
        placeholder={t("testQuestionPlaceholder")}
        value={draft.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDraft((prev) => ({ ...prev, title: e.target.value }))}
        sx={{
          width: "100%",
          padding: "11px 14px",
          borderRadius: "10px",
          border: "1.5px solid rgba(84,107,65,0.25)",
          backgroundColor: "transparent",
          fontSize: "14px",
          color: "inherit",
          fontFamily: "'Proba Pro', Arial, sans-serif",
          outline: "none",
          boxSizing: "border-box",
          "&:focus": { borderColor: "#546B41" },
        } as SxProps}
      />

      {draft.options.map((opt, idx) => (
        <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Box
            component="input"
            placeholder={`${t("testOptionPlaceholder")} ${idx + 1}`}
            value={opt}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOption(idx, e.target.value)}
            onClick={() => setDraft((prev) => ({ ...prev, correctId: idx }))}
            sx={inputSx(draft.correctId === idx)}
          />
          <Box
            component="button"
            sx={iconButtonSx}
            onClick={() => removeOption(idx)}
            disabled={draft.options.length <= MIN_OPTIONS}
            title={t("testRemoveOption")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Box>
        </Box>
      ))}

      <Box
        component="button"
        sx={{ ...iconButtonSx, width: "100%", gap: "6px", fontSize: "13px", fontFamily: "'Proba Pro', Arial, sans-serif", color: "rgba(84,107,65,0.7)", border: "1.5px dashed rgba(84,107,65,0.25)", borderRadius: "10px", height: "auto", padding: "9px" } as SxProps}
        onClick={addOption}
        disabled={draft.options.length >= MAX_OPTIONS}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        {t("testAddOption")}
      </Box>

      <Typography sx={{ fontSize: "11px !important", color: "rgba(84,107,65,0.55)" }}>
        {t("testCorrectHint")}
      </Typography>

      <Box
        component="button"
        sx={{ ...styles.submitButton, marginTop: 0 } as SxProps}
        onClick={() => onSave(draft)}
        disabled={!isValid}
      >
        {t("testPublish")}
      </Box>
    </>
  );
};

// ---------- Participant view ----------

interface ParticipantViewProps {
  question: ConferenceTestQuestion;
  onSubmit: (isCorrect: boolean) => void;
}

const ParticipantView: FC<ParticipantViewProps> = ({ question, onSubmit }) => {
  const { t } = useTranslation();
  const { testAnswer, setTestAnswer } = useConferenceStore();

  const selectedId = testAnswer?.selectedId ?? null;
  const submitted = testAnswer?.submitted ?? false;

  const handleSubmit = () => {
    if (selectedId === null) return;
    const isCorrect = selectedId === question.correctId;
    setTestAnswer({ selectedId, submitted: true });
    onSubmit(isCorrect);
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
    <>
      <Typography sx={styles.question}>{question.title}</Typography>

      {question.options.map((option, idx) => (
        <Box
          key={idx}
          component="button"
          sx={getOptionSx(idx)}
          onClick={() => { if (!submitted) setTestAnswer({ selectedId: idx, submitted: false }); }}
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
    </>
  );
};

// ---------- Root ----------

interface Props {
  open: boolean;
  isHost: boolean;
  currentTest: ConferenceTest | null;
  onClose: () => void;
  onRefetch: () => Promise<void>;
  onCreateTest: (question: ConferenceTestQuestion) => Promise<void>;
  onSubmit: (isCorrect: boolean) => void;
}

const TestPanel: FC<Props> = ({ open, isHost, currentTest, onClose, onRefetch, onCreateTest, onSubmit }) => {
  const { t } = useTranslation();
  const [creatingNew, setCreatingNew] = useState(false);

  useEffect(() => {
    if (open && isHost) {
      setCreatingNew(false);
      onRefetch();
    }
  }, [open]);

  const handleSave = async (question: ConferenceTestQuestion) => {
    await onCreateTest(question);
    setCreatingNew(false);
  };

  const showCreateForm = isHost && (creatingNew || currentTest === null);

  return (
    <Drawer anchor="right" open={open} onClose={onClose} sx={styles.drawer as SxProps}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>{t("toolbarTest")}</Typography>
        <CloseButton onClick={onClose} />
      </Box>

      <Box sx={styles.content}>
        {isHost ? (
          showCreateForm ? (
            <HostCreateView onSave={handleSave} />
          ) : (
            <HostView test={currentTest!} onStartNew={() => setCreatingNew(true)} />
          )
        ) : currentTest ? (
          <ParticipantView question={currentTest.question} onSubmit={onSubmit} />
        ) : null}
      </Box>
    </Drawer>
  );
};

export default TestPanel;
