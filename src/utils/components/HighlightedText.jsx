import { Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const HighlightedText = ({
  variant = "h4",
  fullHighlight = true,
  children,
}) => {
  const { theme } = useTheme();
  const classes = {
    text: {
      position: "relative",
      display: "inline-block",
      color: theme.background.text,
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        height: fullHighlight ? "100%" : "50%",
        backgroundColor: theme.highlights.pink,
        opacity: 0.6,
        zIndex: -1,
      },
    },
  };
  return (
    <Typography variant={variant} sx={classes.text}>
      {children}
    </Typography>
  );
};

export default HighlightedText;
