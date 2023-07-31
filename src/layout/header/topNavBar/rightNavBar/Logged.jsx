import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import useUsers from "../../../../users/hooks/userUsers";

export default function Logged() {
  const { handleLogout } = useUsers();
  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}>
          <Avatar alt="Bird" src="/assets/images/avatar.png" />
        </IconButton>
      </Tooltip>
      <IconButton
        sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={handleLogout}
      >
        <LogoutIcon />
      </IconButton>
    </Box>
  );
}
