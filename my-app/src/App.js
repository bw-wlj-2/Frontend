import Login from "./components/Login";
import "./App.css";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Link, Route } from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfilePage";
import ExercisePage from "./components/ExercisePage";
import AddExercise from "./components/AddExercise";
import EditExercise from "./components/EditExercise";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#007FFF",
    color: "#D8F4FF"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
function App() {
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
    <div className="App">
      <div>
        <AppBar
          position="sticky"
          className={classes.appBar}
          title="Enter User Details"
        >
          <Toolbar>
            <Button onClick={recordButtonPosition}>OPEN MENU</Button>
            <Menu anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
              <Link to="/dashboard">
                <MenuItem onClick={closeMenu}> Dashboard </MenuItem>
              </Link>
              <MenuItem onClick={closeMenu}> Exercises </MenuItem>
              <MenuItem onClick={closeMenu}> Profile </MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
              Weight-Lifting Journal
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/dashboard" component={Dashboard}></Route>
      <Route exact path="/editprofile" component={EditProfile}></Route>
      <Route exact path="/exercises" component={ExercisePage}></Route>
      <Route exact path="/addexercise" component={AddExercise}></Route>
      <Route exact path="/editexercises" component={EditExercise}></Route>
    </div>
  );
}

export default App;
