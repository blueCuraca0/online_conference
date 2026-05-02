import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type ConferenceMode = "startNow" | "schedule" | "recurring";

export const useCreateConferenceSectionController = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mode, setMode] = useState<ConferenceMode>("schedule");

  const MODES: { key: ConferenceMode; label: string }[] = [
    { key: "startNow", label: t("modeStartNow") },
    { key: "schedule", label: t("modeSchedule") },
    { key: "recurring", label: t("modeRecurring") },
  ];

  const handleBack = () => navigate("/home");

  return { t, mode, setMode, MODES, handleBack };
};
