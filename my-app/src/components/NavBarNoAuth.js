import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#5B7648",
    color: "#E2FFCE",
    justifyContent: "space-around"
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    margin: "auto",
    marginRight: "1.5%",
    fontFamily: "Concert One, cursive"
  }
}));

const NavBarNoAuth = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            SIMPLY FIT
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBarNoAuth;
