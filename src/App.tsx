import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Box sx={styles.root}>
            <Routing />
          </Box>
        </LocalizationProvider>
      </ThemeProvider>
    </Box>
  );
};

export default App;
