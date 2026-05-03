import { FC, useState, KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import { styles } from "./styles";

interface Participant {
  initials: string;
  name: string;
  color: string;
}

const STUB_PARTICIPANTS: Participant[] = [
  { initials: "MG", name: "Mira Gupta", color: "#7B9C5A" },
  { initials: "SK", name: "Sasha Khan", color: "#5A9C7B" },
  { initials: "JR", name: "Jules Reyes", color: "#7B7B5A" },
  { initials: "NK", name: "Naomi K.", color: "#9C7B5A" },
];

const CalendarIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="2.5" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1 6h12M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SearchIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const LinkSmIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M6 8a3 3 0 004.243 0l1.414-1.414a3 3 0 00-4.243-4.243l-.707.707" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M8 6a3 3 0 00-4.243 0L2.343 7.414a3 3 0 004.243 4.243l.707-.707" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

interface FormValues {
  name: string;
  date: string;
  startTime: string;
  length: string;
  agenda: string;
}

const ConferenceForm: FC = () => {
  const { t } = useTranslation();
  const { register } = useForm<FormValues>({
    defaultValues: {
      name: "Q3 Roadmap — Studio Sync",
      date: "Mon, May 4 2026",
      startTime: "10:30 AM",
      length: "45 min",
      agenda:
        "1. Quick status from each pod (15 min)\n2. New pricing surface walkthrough — Mira\n3. Open questions + action items",
    },
  });

  const [participants, setParticipants] = useState<Participant[]>(STUB_PARTICIPANTS);
  const [inviteQuery, setInviteQuery] = useState("");

  const removeParticipant = (name: string) => {
    setParticipants((prev) => prev.filter((p) => p.name !== name));
  };

  const handleInviteKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // TODO: search users and add them
    if (e.key === "Enter" && inviteQuery.trim()) {
      setInviteQuery("");
    }
  };

  const handleCopyInviteLink = () => {
    // TODO: copy invite link to clipboard
  };

  const handleSaveAsDraft = () => {
    // TODO: save conference as draft
  };

  const handleSchedule = () => {
    // TODO: submit form and schedule conference
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.card}>
        <Box sx={styles.fieldGroup}>
          <Typography sx={styles.fieldLabel}>{t("conferenceName")}</Typography>
          <Box sx={styles.nameInputWrapper}>
            <input
              {...register("name")}
              style={inputStyle}
              placeholder={t("conferenceNamePlaceholder")}
            />
          </Box>
        </Box>

        <Box sx={styles.row}>
          <Box sx={styles.fieldGroup}>
            <Typography sx={styles.fieldLabel}>{t("conferenceDate")}</Typography>
            <Box sx={styles.dateInputWrapper}>
              <Box sx={styles.dateIcon}><CalendarIcon /></Box>
              <input
                {...register("date")}
                style={{ ...inputStyle, paddingLeft: 0 }}
              />
            </Box>
          </Box>
          <Box sx={styles.fieldGroup}>
            <Typography sx={styles.fieldLabel}>{t("conferenceStart")}</Typography>
            <Box sx={styles.smallInputWrapper}>
              <input {...register("startTime")} style={inputStyle} />
            </Box>
          </Box>
          <Box sx={styles.fieldGroup}>
            <Typography sx={styles.fieldLabel}>{t("conferenceLength")}</Typography>
            <Box sx={styles.smallInputWrapper}>
              <input {...register("length")} style={inputStyle} />
            </Box>
          </Box>
        </Box>

        <Box sx={styles.fieldGroup}>
          <Typography sx={styles.fieldLabel}>{t("conferenceAgenda")}</Typography>
          <Box sx={styles.agendaWrapper}>
            <textarea
              {...register("agenda")}
              rows={5}
              style={textareaStyle}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={styles.inviteCard}>
        <Box sx={styles.inviteHeader}>
          <Typography variant="h3" sx={styles.inviteTitle}>{t("invitePeople")}</Typography>
          <Button
            variantType={EButtonType.GHOST}
            buttonTitle={<Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}><LinkSmIcon /><Typography sx={{ fontSize: "13px !important", fontWeight: "500 !important", color: "inherit" }}>{t("copyInviteLink")}</Typography></Box>}
            onClick={handleCopyInviteLink}
            sx={styles.copyLinkBtn}
          />
        </Box>
        <Box sx={styles.inviteInputWrapper}>
          <Box sx={styles.searchIcon}><SearchIcon /></Box>
          <input
            value={inviteQuery}
            onChange={(e) => setInviteQuery(e.target.value)}
            onKeyDown={handleInviteKeyDown}
            placeholder={t("addByNameOrEmail")}
            style={{ ...inputStyle, paddingLeft: 0 }}
          />
        </Box>
        <Box sx={styles.chips}>
          {participants.map((p) => (
            <Box key={p.name} sx={styles.chip}>
              <Box sx={{ ...styles.chipAvatar, backgroundColor: p.color }}>
                <Typography sx={styles.chipInitials}>{p.initials}</Typography>
              </Box>
              <Typography sx={styles.chipName}>{p.name}</Typography>
              <Box sx={styles.chipRemove} onClick={() => removeParticipant(p.name)}>
                <Typography sx={styles.chipRemoveText}>×</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={styles.formActions}>
        <Button
          variantType={EButtonType.GHOST}
          buttonTitle={t("saveAsDraft")}
          onClick={handleSaveAsDraft}
          sx={styles.draftButton}
        />
        <Button
          variantType={EButtonType.PRIMARY}
          buttonTitle={`${t("scheduleConference")} →`}
          onClick={handleSchedule}
          sx={styles.scheduleButton}
        />
      </Box>
    </Box>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  fontFamily: "inherit",
  fontSize: "15px",
  color: "#4a4a3a",
  padding: "0",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  fontFamily: "inherit",
  fontSize: "14px",
  color: "#4a4a3a",
  resize: "none",
  padding: "0",
  lineHeight: "1.7",
};

export default ConferenceForm;
