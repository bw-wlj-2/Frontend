import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Button,
  Toolbar,
  AppBar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#007FFF",
    color: "#D8F4FF"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    marginLeft: "-8.5%",
    fontFamily: "Concert One, cursive"
  },
  icon: {
    position: "absolute",
    right: "2rem",
    color: "black"
  },
  linkBut: {
    textDecoration: "none"
  }
}));

const NavBar = () => {
  const classes = useStyles();
  //used to toggle our drop down menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();

  const recordButtonPosition = event => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };
  let closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <AppBar
        position="static"
        className={classes.appBar}
        title="Enter User Details"
      >
        <Toolbar>
          <Button onClick={recordButtonPosition}>
            <MenuIcon className={classes.icon} fontSize="medium" />
          </Button>
          <Menu anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
            <Link className={classes.linkBut} to="/dashboard">
              <MenuItem onClick={closeMenu}> Dashboard </MenuItem>
            </Link>
            <Link className={classes.linkBut} to="/exercises">
              <MenuItem onClick={closeMenu}> Exercises </MenuItem>
            </Link>
            <Link className={classes.linkBut} to="/editprofile">
              <MenuItem onClick={closeMenu}> Edit Profile </MenuItem>
            </Link>
          </Menu>
          <Typography variant="h4" className={classes.title}>
            SIMPLY FIT
          </Typography>
          <FitnessCenterIcon className={classes.icon} fontSize="small" />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
