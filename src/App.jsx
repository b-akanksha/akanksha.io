import React from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "./context/ThemeContext";
import HighlightedText from "./utils/components/HighlightedText";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HighlightedText variant="h1" fullHighlight={false}>
        Hello World!
      </HighlightedText>
      <Button
        variant="contained"
        onClick={toggleTheme}
        sx={{ mt: 2, backgroundColor: theme.pink.background, color: "#000" }}
      >
        Toggle Theme
      </Button>
    </Box>
  );
}

export default App;
