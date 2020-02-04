import { makeStyles, Box } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useHistory} from 'react-router-dom';

import { connect } from "react-redux";
import { register } from "../actions/EntryActions/RegisterAction";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import Copyright from './Copyright';


const useStyles = makeStyles(theme => ({
  contButton: {
    margin: 30,
    backgroundColor: "#007FFF",
    color: "#D8F4FF",

    "&:hover": {
      backgroundColor: "#D8F4FF",
      color: "#007FFF"
    }
  },
  formDiv: {
    marginTop: 20
  },
  linkBut: {
    textDecoration: "none"
  },
  warning: {
    color: "#c62828",
    fontSize: "0.8rem",
    marginTop: -15,
    marginBottom: 10
  }
}));
const Register = props => {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const passwordLength = () => {
    return user.password.length === 0 || user.password.length > 5 ? (
      ""
    ) : (
      <Typography className={classes.warning}>
        Password must be at least 6 characters
      </Typography>
    );
  };

  console.log("checking for user", user);

  const handleSubmit = event => {
    event.preventDefault();
    props.register(user);
    history.push("/");
  };

  const handleChanges = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className='box'>
      <AccountBoxIcon fontSize="large" />
      <Typography component="h2" variant="h5">
        Register
        </Typography>
      <div className={classes.formDiv}>

        <TextField
          label="Username"
          required
          value={user.username}
          onChange={handleChanges}
          name="username"

        />
        <br />
        <TextField
          label="Password"
          type="password"
          required
          value={user.password}
          onChange={handleChanges}
          name="password"
        />
        <br />
        <div>
          <Link className={classes.linkBut} to="/Dashboard">
            <Button
              className={classes.contButton}
              variant="outlined"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </Button>

          </Link>
          <p>
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
