import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#D9ED92",
    },
    secondary: {
      main: "#B5E48C",
    },
    ternary: {
      main: "#99D98C",
    },
    quad: {
      main: "#76C893",
    },
    cinco: {
      main: "#52B69A",
    },
    six: {
      main: "#34A0A4",
    },
    seven: {
      main: "#168AAD",
    },
    eight: {
      main: "#1A759F",
    },
    nine: {
      main: "#1E6091",
    },
    ten: {
      main: "#184E77",
    },
    black: {
      main: "#000000",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
