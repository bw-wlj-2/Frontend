import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import { createExercise } from "../actions/UserActions/CreateExercise.js";
import { connect } from "react-redux";
import PostAddIcon from "@material-ui/icons/PostAdd";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 100,
    color: "#898E88"
  },
  addIcon: {
    color: "#99FF8A"
  },
  contButton: {
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "#CCFFC4",
      color: "#007CB2"
    }
  },
  formDiv: {
    marginTop: 20
  },
  linkBut: {
    textDecoration: "none"
  },

  linkText: {
    color: "#E2FFCE",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));
const AddExercise = props => {
  const classes = useStyles();
  const history = useHistory();

  const [newExercise, setNewExercise] = useState({
    name: "",
    region: ""
  });

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
    <div className={classes.container}>
      <PostAddIcon className={classes.addIcon} fontSize="large" />
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
          <br />
          <TextField label="lbs Lifted" />
          <br />
          <TextField label="Date Completed" />
          <div>
            <Button
              className={classes.contButton}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>

            <p>
              Go to<Link className={classes.linkText} to="/dashboard"> Dashboard</Link>
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

export default connect(mapStateToProps, { createExercise })(AddExercise);
