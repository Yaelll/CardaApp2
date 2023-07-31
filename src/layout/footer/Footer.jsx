import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          onClick={() => navigate(ROUTES.ABOUT)}
        />
        <BottomNavigationAction
          label="Cards"
          icon={<Favorite />}
          onClick={() => navigate(ROUTES.CARDS)}
        />
      </BottomNavigation>
    </Paper>
  );
}
