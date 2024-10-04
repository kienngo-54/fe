import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./routes";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily:
            '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        },
        components: {
          Typography: {
            titleMarginBottom: 0,
          },
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;
