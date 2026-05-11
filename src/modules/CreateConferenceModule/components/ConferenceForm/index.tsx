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
import profileApi from "api/profileApi";
import { ProfileResponse } from "types/profile";

interface Participant {
  id?: string;
  initials: string;
  name: string;
  color: string;
}

// const STUB_PARTICIPANTS: Participant[] = [
//   { initials: "MG", name: "Mira Gupta", color: "#7B9C5A" },
//   { initials: "SK", name: "Sasha Khan", color: "#5A9C7B" },
//   { initials: "JR", name: "Jules Reyes", color: "#7B7B5A" },
//   { initials: "NK", name: "Naomi K.", color: "#9C7B5A" },
// ];

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

  const [participants, setParticipants] = useState<Participant[]>([]);
  const [inviteQuery, setInviteQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProfileResponse[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContinueDisabled, setContinueIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState<string | undefined>();

  const { handleCreateConference } = useConferenceController();

  const values = watch();

  useEffect(() => {
    setContinueIsDisabled(!values.name || !values.date || !values.startTime);
  }, [values]);

  useEffect(() => {
    if (!inviteQuery.trim()) {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      const result = await profileApi.searchUsers(inviteQuery.trim());
      if (result.success) {
        setSearchResults(result.data);
        setIsSearchOpen(result.data.length > 0);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [inviteQuery]);

  const removeParticipant = (name: string) => {
    setParticipants((prev) => prev.filter((p) => p.name !== name));
  };

  const addParticipantFromSearch = (user: ProfileResponse) => {
    const initials = user.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
    const colors = ["#7B9C5A", "#5A9C7B", "#7B7B5A", "#9C7B5A", "#5A7B9C"];
    const color = colors[user.name.length % colors.length];

    setParticipants((prev) => {
      if (prev.some((p) => p.name === user.name)) return prev;
      return [...prev, { id: user.id, initials, name: user.name, color }];
    });

    setInviteQuery("");
    setIsSearchOpen(false);
    setSearchResults([]);
  };

  const handleInviteKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
    }
  };

  // const handleCopyInviteLink = () => {
  //   navigator.clipboard.writeText(link);
  // };

  const handleSchedule = async () => {
    setIsLoading(true);

    const date = getValues("date");
    const startTime = getValues("startTime");
    const fullStartDate = date && startTime
      ? new Date(date.getFullYear(), date.getMonth(), date.getDate(), startTime.getHours(), startTime.getMinutes())
      : null;
    
    const participantIds = participants.filter((p) => p.id).map((p) => p.id as string);

    const code = await handleCreateConference({
      name: getValues("name"),
      agenda: getValues("agenda"),
      date: fullStartDate?.toISOString() || null,
      duration: getValues("lengthMinutes"),
      participantIds,
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
          
          {/* <Button
            variantType={EButtonType.GHOST}
            buttonTitle={<Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}><LinkSmIcon /><Typography sx={{ fontSize: "13px !important", fontWeight: "500 !important", color: "inherit" }}>{t("copyInviteCode")}</Typography></Box>}
            onClick={handleCopyInviteLink}
            sx={styles.copyLinkBtn}
          /> */}
        </Box>

        <Box sx={styles.searchWrapper}>
          <Input
            value={inviteQuery}
            onChange={(e) => setInviteQuery(e.target.value)}
            onKeyDown={handleInviteKeyDown}
            placeholder={t("addByNameOrEmail")}
            startAdornment={<SearchSmIcon />}
            sx={styles.searchInput}
          />
          {isSearchOpen && (
            <Box sx={styles.dropdown}>
              {searchResults
                .filter((user) => !participants.some((p) => p.name === user.name))
                .map((user) => (
                  <Box key={user.id} sx={styles.dropdownItem} onClick={() => addParticipantFromSearch(user)}>
                    <Typography sx={styles.dropdownName}>{user.name}</Typography>
                    <Typography sx={styles.dropdownEmail}>{user.email}</Typography>
                  </Box>
                ))}
            </Box>
          )}
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
