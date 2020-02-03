import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
const Register = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Sign Up</h1>
      <div className={classes.formDiv}>
        <TextField label="Name" error helperText="Required" />
        <br />
        <TextField label="Username" required />
        <br />
        <TextField label="Email" type="email" required />
        <br />
        <TextField label="Password" type="password" required />
        <div>
          <Link className={classes.linkBut} to="/Dashboard">
            <Button
              className={classes.contButton}
              variant="outlined"
              color="primary"
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
