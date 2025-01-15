import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar style={{ backgroundColor: "green" }} position="sticky">
        <Toolbar>
          <img
            src="data:image/png;base64,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"
            height={50}
          ></img>
          <Typography
            color="yellow"
            fontFamily={"serif"}
            fontSize={42}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Demo App
          </Typography>
          <Link to="/state">
            <Button
              variant="contained"
              style={{ backgroundColor: "olivedrab" }}
            >
              State
            </Button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/log">
            <Button
              variant="contained"
              style={{ backgroundColor: "olivedrab" }}
            >
              login
            </Button>
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link to="/signup">
            <Button
              variant="contained"
              style={{ backgroundColor: "olivedrab" }}
            >
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
