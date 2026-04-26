import { FC } from "react";

import { useParams } from "react-router-dom";

import { PageWithHeader } from "components/PageWithHeader";
import { Typography } from "ui/Typography";

const ConferencePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageWithHeader>
      <Typography variant="h2">Conference {id}</Typography>
    </PageWithHeader>
  );
};

export default ConferencePage;
