import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { PageWithHeader } from "components/PageWithHeader";
import { Button } from "components/Button";
import { Box } from "ui/Box";
import { Typography } from "ui/Typography";

const SignInPage: FC = () => {
  const navigate = useNavigate();

  return (
    <PageWithHeader>
      <Typography variant="h2">Sign In</Typography>
      <Box sx={{ mt: 3 }}>
        <Button buttonTitle="Go to Home" onClick={() => navigate("/home")} />
      </Box>
    </PageWithHeader>
  );
};

export default SignInPage;
