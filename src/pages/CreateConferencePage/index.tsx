import { FC } from "react";

import { PageWithHeader } from "components/PageWithHeader";
import { Typography } from "ui/Typography";

const CreateConferencePage: FC = () => {
  return (
    <PageWithHeader>
      <Typography variant="h2">Create Conference</Typography>
    </PageWithHeader>
  );
};

export default CreateConferencePage;
