import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Button
        variant="contained"
        onClick={toggleTheme}
        sx={{ mt: 2, backgroundColor: theme.pink.background, color: "#000" }}
      >
        Toggle Theme
      </Button>
    </>
  );
}

export default App;
