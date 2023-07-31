import { Button, Typography } from "@mui/material";
import { object, string } from "prop-types";
import React from "react";
import { useTheme } from "../../providers/ThemeProvider";

import NavBarLink from "./NavBarLink";
export default function NavItem({ to, sx, label }) {
  const { isDark } = useTheme();
  return (
    <NavBarLink to={to} sx={sx}>
      <Button>
        <Typography color={isDark ? "white" : "black"}>{label}</Typography>
      </Button>
    </NavBarLink>
  );
}
NavItem.propTypes = {
  to: string.isRequired,
  label: string.isRequired,
  sx: object,
};
