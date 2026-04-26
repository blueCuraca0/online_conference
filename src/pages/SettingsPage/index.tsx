import { FC } from "react";

import { PageWithHeader } from "components/PageWithHeader";
import { Typography } from "ui/Typography";

const SettingsPage: FC = () => {
  return (
    <PageWithHeader>
      <Typography variant="h2">Settings</Typography>
    </PageWithHeader>
  );
};

export default SettingsPage;
