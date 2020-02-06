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
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBarNoAuth from "./components/NavBarNoAuth";

function App() {
  //FOR DARK MODE
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
          primary: {
            main: "#99FF8A"
          },
          secondary: {
            main: "#6E8B3D"
          }
        },
        typography: {
          fontFamily: "Mallanna, sans-serif"
        }
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <NavBarNoAuth />
              <Login />
            </Route>

            <Route exact path="/register">
              <NavBarNoAuth />
              <Register />
            </Route>

            <PrivateRoute exact path="/dashboard">
              <NavBar />
              <Dashboard />
            </PrivateRoute>

            <Route exact path="/editprofile">
              <NavBar />
              <EditProfilePage />
            </Route>

            <Route exact path="/exercises/:id">
              <NavBar />
              <UniqueExercise />
            </Route>

            <Route exact path="/addexercise">
              <NavBar />
              <AddExercise />
            </Route>

            <Route exact path="/editExercises/:id">
              <NavBar />
              <EditExercise />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
