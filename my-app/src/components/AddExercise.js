import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import { createExercise } from "../actions/UserActions/CreateExercise.js";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  contButton: {
    margin: 30,
    backgroundColor: "#007CB2",
    color: "#BFECFF",

    "&:hover": {
      backgroundColor: "#BFECFF",
      color: "#007CB2"
    }
  },
  formDiv: {
    marginTop: 20
  },
  linkBut: {
    textDecoration: "none"
  }
}));
const AddExercise = props => {
  const classes = useStyles();
  const history = useHistory();

  const [newExercise, setNewExercise] = useState({
    name: "",
    region: "",
    current_pounds: null,
    reps: null,
    date_completed: ""
  });

  console.log(newExercise);

  const handleChanges = event => {
    setNewExercise({ ...newExercise, [event.target.name]: event.target.value });
  };

  const submitExercise = event => {
    event.preventDefault();
    props.createExercise(newExercise);
    history.push("/dashboard");
    console.log(newExercise);
  };

  return (
    <div className="box">
      <AccountBoxIcon fontSize="large" />
      <Typography component="h2" variant="h5">
        Add New Exercise
      </Typography>
      <div className={classes.formDiv}>
        <form onSubmit={submitExercise} noValidate autoComplete="off">
          <TextField
            label="Exercise Name"
            name="name"
            value={newExercise.name}
            onChange={handleChanges}
          />
          <br />
          <TextField
            label="Body Region Targeted"
            name="region"
            value={newExercise.region}
            onChange={handleChanges}
          />
          <TextField
            label="Current Pounds"
            name="current_pounds"
            value={newExercise.current_pounds}
            onChange={handleChanges}
          />
          <br />
          <TextField
            label="Reps"
            name="reps"
            value={newExercise.reps}
            onChange={handleChanges}
          />
          <br />
          <TextField
            label="Date Complete"
            name="date_completed"
            value={newExercise.date_completed}
            onChange={handleChanges}
          />

          <div>
            <Button
              className={classes.contButton}
              variant="outlined"
              color="primary"
              type="submit"
            >
              Submit
            </Button>

            <p>
              Go to<Link to="/dashboard"> Dashboard</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { createExercise }
)(AddExercise);
