import { Divider, Typography } from "@mui/material";
import { string } from "prop-types";
import React from "react";
import { useTheme } from "../providers/ThemeProvider";

export default function PageHeader({ title, subtitle }) {
  const { isDark } = useTheme();
  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        color={isDark ? "white" : "inherit"}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        color={isDark ? "white" : "inherit"}
      >
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
}

PageHeader.propTypes = {
  title: string,
  subtitle: string,
};
