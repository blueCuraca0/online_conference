import { useState } from "react";
import { ActiveSection } from "./types";
import { useFetchProfile } from "hooks/useFetchProfile";

export const useHomeSectionController = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("conferences");
  const profile = useFetchProfile();

  return { activeSection, setActiveSection, profile };
};
