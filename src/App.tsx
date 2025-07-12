import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { styles } from "AppStyles";
import { theme } from "theme";

import Routing from "Routing";
import { Box } from "ui/Box";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const accessTokenStorage = localStorage.getItem("access_token");
  const refreshTokenStorage = localStorage.getItem("refresh_token");

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={styles.root}>
          <Routing />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default App;
