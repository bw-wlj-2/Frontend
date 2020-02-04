import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Login from "./components/Login";
import "./App.css";
import React from "react";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfilePage";
import ExercisePage from "./components/ExercisePage";
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

          <Route exact path='/register'>
            <NavBar />
            <Register />
          </Route>

          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          
          <Route exact path="/editprofile" >
            <EditProfile />
          </Route>

          <Route exact path="/exercises">
            <ExercisePage />
          </Route>

          <Route exact path="/addexercise" >
            <AddExercise />
          </Route>

          <Route exact path="/editexercises">
            <EditExercise />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
