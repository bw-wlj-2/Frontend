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

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Login />
          </Route>

          <Route exact path="/register">
            <NavBar />
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

          <Route path="/exercises">
            <NavBar />
            <UniqueExercise />
          </Route>

          <Route exact path="/addexercise">
            <NavBar />
            <AddExercise />
          </Route>

          <Route exact path="/editexercises">
            <NavBar />
            <EditExercise />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
