import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export enum EConferenceMode {
  START_NOW = "startNow",
  SCHEDULE = "schedule",
  RECURRING = "recurring",
}

export const useCreateConferenceSectionController = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mode, setMode] = useState<EConferenceMode>(EConferenceMode.SCHEDULE);

  const MODES: { key: EConferenceMode; label: string }[] = [
    { key: EConferenceMode.START_NOW, label: t("modeStartNow") },
    { key: EConferenceMode.SCHEDULE, label: t("modeSchedule") },
    { key: EConferenceMode.RECURRING, label: t("modeRecurring") },
  ];

  const handleBack = () => navigate("/home");

  return { t, mode, setMode, MODES, handleBack };
};
