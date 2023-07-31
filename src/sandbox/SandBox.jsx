import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../routes/components/NavItem";
export default function SandBox() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="first" label="firstComp" sx={{ color: "black" }} />
          <NavItem to="second" label="secondComp" sx={{ color: "black" }} />
          <NavItem to="lifecycle" label="lifecycle" sx={{ color: "black" }} />
          <NavItem to="country" label="country" sx={{ color: "black" }} />
          <NavItem to="memo" label="Memoization" sx={{ color: "black" }} />
          <NavItem to="counter" label="MyCounter" sx={{ color: "black" }} />
          <NavItem to="countries" label="Countries" sx={{ color: "black" }} />
          <NavItem to="grand" label="Context" sx={{ color: "black" }} />
          <NavItem to="form" label="My form" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
