import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme, darkTheme } from "./styled";
import { PrimaryButton, SecondaryButton } from "./components/Button";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button onClick={() => setUseDarkTheme(true)}>Dark theme</button>
      <button onClick={() => setUseDarkTheme(false)}>Default theme</button>

      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "500px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <PrimaryButton>Primary Button</PrimaryButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

export default App;
