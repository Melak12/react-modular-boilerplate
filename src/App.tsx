import React from "react";
import { DefaultWrapper } from "./components";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}


const App = () => {
  const content = useRoutes(routes);
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {content}
    </ThemeProvider>
  );
}


export default App;
