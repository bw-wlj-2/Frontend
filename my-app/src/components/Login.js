import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import "./styles.css";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import fitnessImage from "../images/fitness_journal.svg";

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
  container: {
    marginTop: 90,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#898E88"
  },
  logButton: {
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "#CCFFC4",
      color: "#007CB2"
    }
  },
  linkBut: {
    textDecoration: "none"
  },
  formDiv: {
    // marginTop: 20,
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  input: {
    color: "white"
  },
  linkText: {
    color: "#E2FFCE",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));
const Login = props => {
  const classes = useStyles();
  const history = useHistory();
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
    AxiosWithAuth()
      .post("/api/user/login", credentials)
      .then(res => {
        console.log(res.data)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("message", res.data.message);
        history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <div className={classes.container}>
        <div>
          <img height="200" width="200" src={fitnessImage} alt='img' />
        </div>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className={classes.form} onSubmit={loginForm}>
          <div className={classes.formDiv}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              value={credentials.username}
              onChange={handleChanges}
              name="username"
              autoFocus
            />

            <br />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={credentials.password}
              onChange={handleChanges}
              name="password"
            />
          </div>

          <div>
            <Button
              className={classes.logButton}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
            <p>
              Don't have an account?{" "}
              <Link className={classes.linkText} to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
