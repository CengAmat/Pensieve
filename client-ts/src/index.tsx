import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
