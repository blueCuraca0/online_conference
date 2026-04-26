import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { PageWithHeader } from "components/PageWithHeader";
import { Button } from "components/Button";
import { Box } from "ui/Box";
import { Typography } from "ui/Typography";

const WelcomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <PageWithHeader>
      <Typography variant="h2">Welcome</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
        <Button buttonTitle="Sign In" onClick={() => navigate("/sign-in")} />
        <Button buttonTitle="Sign Up" onClick={() => navigate("/sign-up")} />
        <Button buttonTitle="Home" onClick={() => navigate("/home")} />
      </Box>
    </PageWithHeader>
  );
};

export default WelcomePage;
