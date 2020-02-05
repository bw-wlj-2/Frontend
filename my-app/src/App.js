import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import "./App.css";
import React from "react";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EditProfilePage from "./components/EditProfilePage";
import UniqueExercise from "./components/UniqueExercise";
import AddExercise from "./components/AddExercise";
import EditExercise from "./components/EditExercise";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/core/styles";
function App() {

  //FOR DARK MODE
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark"
        }
      }),
    []
  );
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">

          <NavBar />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>

            <Route exact path="/editprofile">
              <EditProfilePage />
            </Route>

            <Route exact path="/exercises/:id">
              <UniqueExercise />
            </Route>

            <Route exact path="/addexercise">
              <AddExercise />
            </Route>

            <Route exact path="/editExercises/:id">
              <EditExercise />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>

  );
}

export default App;
