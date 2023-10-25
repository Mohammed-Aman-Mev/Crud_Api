import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const Appbar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ background: "#713ABE" }}>
        <Toolbar>
          <Typography
            variant="h1"
            align="center"
            sx={{ fontSize: "30px", alignItems: "center" }}
          >
            TODO App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
