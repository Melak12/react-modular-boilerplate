import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useAuthState } from "./modules/Auth";

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
  const [userAccount, loading, error] = useAuthState();
  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });
  useEffect(() => {
    if(error) {
      console.log("Auth Error >> ", error);
    }
    if(loading) {
      console.log("Please Wait ...");
      
    }else {
      console.log("Current User >> ", userAccount);
      
    }
}, [userAccount]);
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading && <><h5>Please Wait...</h5></>}
        {!loading && content}
    </ThemeProvider>
  );
}


export default App;
