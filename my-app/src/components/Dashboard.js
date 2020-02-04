import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions/UserActions/FetchUser";
import { fetchExercises } from "../actions/UserActions/FetchExercises";

const Dashboard = props => {
  const userID = localStorage.getItem("userID");
  const history = useHistory();

  const [exercises, setExercises] = useState();

  console.log("checking for exercise", exercises);

  useEffect(() => {
    props.fetchUser(userID);
  }, []);
  console.log("this is props", props);

  useEffect(() => {
    props.fetchExercises(userID);
    setExercises(props.userExercises);
  }, [exercises]);
  console.log("this is props", props);

  const editProfile = event => {
    event.preventDefault();
    history.push("/editprofile");
  };

  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { fetchUser, fetchExercises }
)(Dashboard);
