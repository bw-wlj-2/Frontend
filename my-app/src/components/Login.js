import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AxiosWithAuth from "../utils/AxiosWithAuth";

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
const Login = props => {
  const classes = useStyles();

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    let name = e.target.name;
    setCredentials({ ...credentials, [name]: e.target.value });
  };

  const loginForm = e => {
    e.preventDefault();
    console.log(credentials.username);
    console.log(credentials.password);
    console.log(credentials);
    AxiosWithAuth()
      .post("/api/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userID", res.data.id);
        console.log(res.data);

        props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>

      <div className={classes.formDiv}>
        <TextField label="Username" value={credentials.username} />
        <br />
        <TextField
          label="Password"
          type="password"
          error
          helperText="Required"
          value={credentials.password}
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
