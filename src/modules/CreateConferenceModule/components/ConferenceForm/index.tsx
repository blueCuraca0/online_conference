import { FC, useState, KeyboardEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import { Box } from "ui/Box";
import { Typography } from "ui/Typography";
import { Button, EButtonType } from "components/Button";
import { Input, EInputType } from "components/Input";
import { DateInput, EDateInputType } from "components/DateInput";
import { SearchSmIcon } from "components/icons/SearchSmIcon";
import { LinkSmIcon } from "components/icons/LinkSmIcon";
import { styles } from "./styles";
import { useConferenceController } from "hooks/useConferenceController";
import CopyLink from "../CopyLink";

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

interface FormValues {
  name: string;
  date: Date | null;
  startTime: Date | null;
  lengthMinutes: number;
  agenda: string;
}

const ConferenceForm: FC = () => {
  const { t } = useTranslation();
  const { register, control, getValues, watch } = useForm<FormValues>({
    defaultValues: {
      name: "",
      date: new Date(Date.now()),
      startTime: new Date(Date.now()),
      lengthMinutes: 45,
      agenda: "",
    },
  });

  const [participants, setParticipants] = useState<Participant[]>(STUB_PARTICIPANTS);
  const [inviteQuery, setInviteQuery] = useState("");
  const [isContinueDisabled, setContinueIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState<string | undefined>();

  const { handleCreateConference } = useConferenceController();

  const values = watch();

  useEffect(() => {
    setContinueIsDisabled(!values.name || !values.date || !values.startTime);
  }, [values]);

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

  const handleSchedule = async () => {
    setIsLoading(true);
    const code = await handleCreateConference({
      name: getValues("name"),
      agenda: getValues("agenda"),
      date: getValues("date")?.toISOString() || null,
      duration: getValues("lengthMinutes"),
    });

    setIsLoading(false);
    
    setTimeout(() => {
      if (code) {
        setCode(code);
        alert(t("conferenceCreated"));
      } else {
        alert(t("conferenceCreationFailed"));
      }
    }, 500)
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.card}>
        <Input
          label={t("conferenceName")}
          {...register("name")}
          placeholder={t("conferenceNamePlaceholder")}
        />

        <Box sx={styles.row}>
          <DateInput
            label={t("conferenceDate")}
            name="date"
            control={control}
            variantType={EDateInputType.DATE}
          />
          <DateInput
            label={t("conferenceStart")}
            name="startTime"
            control={control}
            variantType={EDateInputType.TIME}
          />
          <Input
            label={t("conferenceLength")}
            {...register("lengthMinutes", { valueAsNumber: true })}
            type="number"
            inputProps={{ min: 1 }}
            sx={styles.smallInput}
          />
        </Box>

        <Input
          label={t("conferenceAgenda")}
          variantType={EInputType.MULTILINE}
          {...register("agenda")}
          rows={5}
        />
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

        <Input
          value={inviteQuery}
          onChange={(e) => setInviteQuery(e.target.value)}
          onKeyDown={handleInviteKeyDown}
          placeholder={t("addByNameOrEmail")}
          startAdornment={<SearchSmIcon />}
          sx={styles.searchInput}
        />

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

      <CopyLink code={code} />

      <Box sx={styles.formActions}>
        <Button
          variantType={EButtonType.PRIMARY}
          buttonTitle={t("scheduleConference")}
          onClick={handleSchedule}
          sx={styles.scheduleButton}
          disabled={isContinueDisabled}
          loading={isLoading}
        />
      </Box>
    </Box>
  );
};

export default ConferenceForm;
