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
    backgroundColor: "#5B7648",
    color: "#E2FFCE",
    justifyContent: "space-around"
  },
  menuButton: {
    padding: 0,
    position: "absolute",
    "&:hover": {
      backgroundColor: "none"
    }
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    margin: "auto",
    marginRight: "1.5%",
    fontFamily: "Concert One, cursive"
  },
  menuIcon: {
    position: "absolute",
    color: "#E2FFCE"
  },
  icon: {
    position: "absolute",
    right: "3rem",
    color: "#E2FFCE"
  },
  linkBut: {
    textDecoration: "none"
  },
  menuItems: {
    color: "#E2FFCE"
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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Button className={classes.menuButton} onClick={recordButtonPosition}>
            <MenuIcon className={classes.menuIcon} fontSize="medium" />
          </Button>
          <Menu anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
            <Link className={classes.linkBut} to="/dashboard">
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                Dashboard{" "}
              </MenuItem>
            </Link>

            <Link className={classes.linkBut} to="/editprofile">
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                Edit Profile{" "}
              </MenuItem>
            </Link>
            <a className={classes.linkBut} href="https://github.com/bw-wlj-2">
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                GitHub{" "}
              </MenuItem>
            </a>
            <a
              className={classes.linkBut}
              href="https://simplyfitpromo.netlify.com/about.html"
            >
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                Our Story{" "}
              </MenuItem>
            </a>
            <a
              className={classes.linkBut}
              href="https://simplyfitmarketing.netlify.com/about.html"
            >
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                The Team{" "}
              </MenuItem>
            </a>
            <Link className={classes.linkBut} to="/">
              <MenuItem className={classes.menuItems} onClick={closeMenu}>
                {" "}
                Logout{" "}
              </MenuItem>
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
