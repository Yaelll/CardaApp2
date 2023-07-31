import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

export default function NotLogged() {
  return (
    <>
      <Box>
        <NavItem to={ROUTES.LOGIN} label="login" />
        <NavItem to={ROUTES.SIGNUP} label="signup" />
      </Box>
    </>
  );
}
