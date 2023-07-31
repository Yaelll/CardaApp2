import { Box, IconButton } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../providers/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotLogged from "./NotLogged";
import { useUser } from "../../../../users/providers/UserProvider";
import Logged from "./Logged";
import SearchBar from "./SearchBar";

export default function RightNavigation() {
  const { isDark, toggleDark } = useTheme();
  const { user } = useUser();
  return (
    <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
      <SearchBar />
      <IconButton sx={{ marginLeft: 1 }} onClick={toggleDark}>
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>

      {user ? <Logged /> : <NotLogged />}
    </Box>
  );
}
