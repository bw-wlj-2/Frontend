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
    marginLeft: "-3.2%"
  },
  icon: {
    position: "absolute",
    right: "2rem",
    color: "black"
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
            <MenuIcon className={classes.icon} fontSize="small" />
          </Button>
          <Menu anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
            <Link to="/dashboard">
              <MenuItem onClick={closeMenu}> Dashboard </MenuItem>
            </Link>
            <MenuItem onClick={closeMenu}> Exercises </MenuItem>
            <Link to="/editprofile">
              <MenuItem onClick={closeMenu}> Edit Profile </MenuItem>
            </Link>
          </Menu>
          <Typography variant="h6" className={classes.title}>
            Weight-Lifting Journal
          </Typography>
          <FitnessCenterIcon className={classes.icon} fontSize="small" />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
