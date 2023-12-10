import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home/";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { SigIn } from "./pages/SigIn/";
import { SigUp } from "./pages/SigUp/";
import { Profile } from "./pages/Profile/";
import { New } from "./pages/New";

import { AuthProvider } from "./hooks/auth";

import { AppRoute } from "./routes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
