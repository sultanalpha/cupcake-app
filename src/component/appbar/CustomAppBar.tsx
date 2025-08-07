"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Link, styled } from "@mui/material";
import "./style.css";

const IconsDiv = styled("div")(({}) => ({
  display: "flex",
  gap: 18,
}));

export default function CustomAppBar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#5E00A7" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          Cupcake
        </Typography>
        <IconsDiv>
          <Link
            href="#"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchIcon />
          </Link>
          <Link
            href="/login"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PersonIcon />
          </Link>
        </IconsDiv>
      </Toolbar>
    </AppBar>
  );
}
