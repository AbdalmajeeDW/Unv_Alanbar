import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NormalButton } from "./Buttons";
import { useLogoutMutation } from "../features/api/authApi";
import { handleError } from "../utils/errorHandler";

export default function LayoutAppBar() {
  const [logout, { isLoading }] = useLogoutMutation();
  const [error, setError] = React.useState(null);

  const handleLogout = async () => {
    try {
      await logout().unwrap();
    } catch (err) {
      setError(handleError(err));
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <NormalButton
            text={"تسجيل الخروج"}
            type={"button"}
            variant={"contained"}
            size={"small"}
            color={"error"}
            disable={isLoading}
            isLoading={isLoading}
            onclick={handleLogout}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
