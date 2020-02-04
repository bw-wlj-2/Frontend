import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";

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
const EditExercise = () => {
  const classes = useStyles();

  return (
    <div className="box">
      <AccountBoxIcon fontSize="large" />
      <Typography component="h2" variant="h5">
        Edit Exercise
      </Typography>
      <div className={classes.formDiv}>
        <TextField label="Exercise Name" />
        <br />
        <TextField label="Body Region Targeted" />
        <br />
        <TextField label="lbs Lifted" />
        <br />
        <TextField label="Date Completed" />
        <div>
          <Link className={classes.linkBut} to="/Dashboard">
            <Button
              className={classes.contButton}
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </Link>
          <p>
            Go to<Link to="/dashboard"> Dashboard</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default EditExercise;
