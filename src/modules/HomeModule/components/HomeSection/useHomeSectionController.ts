import { useState } from "react";
import { ActiveSection } from "./types";

export const useHomeSectionController = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("conferences");

  return { activeSection, setActiveSection };
};
