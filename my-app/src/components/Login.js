import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "red"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  contButton: {
    margin: 30,
    backgroundColor: "#007CB2",
    color: "#BFECFF",

    "&:hover": {
      backgroundColor: "#BFECFF",
      color: "#007CB2"
    }
  },
  linkBut: {
    textDecoration: "none"
  },
  formDiv: {
    marginTop: 20
  }
}));
const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Login</h1>

      <div className={classes.formDiv}>
        <TextField label="Username" />
        <br />
        <TextField
          label="Password"
          type="password"
          error
          helperText="Required"
        />

        <div>
          <Link className={classes.linkBut} to="/dashboard">
            <Button
              className={classes.contButton}
              variant="outlined"
              color="primary"
            >
              Login
            </Button>
          </Link>
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
