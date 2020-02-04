import React, { useState } from "react";
import { makeStyles, Box, TextField, Typography } from "@material-ui/core";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import './styles.css';
import Copyright from './Copyright';

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
    backgroundColor: "#007FFF",
    color: "#D8F4FF",

    "&:hover": {
      backgroundColor: "#D8F4FF",
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
  const history = useHistory();
  const [users, setUsers] = useState({ username: '', password: '' })

  const handleChange = e => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`https://chef-portfolio1-bw.herokuapp.com/api/auth/login`, users)
      .then(res =>
        //  console.log(res))
        localStorage.setItem('token', res.data.payload),
        // setTimeout(function () { history.push(`/dashboard`) }, 1500))
        history.push(`/dashboard`))
      .catch(err => console.log(err))
    setUsers({ username: '', password: '' })
  }

  return (
    <div className='box'>
      <AccountBoxIcon fontSize="large" />
      <Typography component="h2" variant="h5">
        Log In
        </Typography>

      <form onSubmit={handleSubmit}>
        <div className={classes.formDiv}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type='text'
            name='username'
            label="Username"
            onChange={handleChange}
            value={users.username}
          />
          <br />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            name='password'
            onChange={handleChange}
            value={users.password}
          // error
          // helperText="Required"
          />
        </div>

        <div>
          <Button
            className={classes.contButton}
            variant="outlined"
            color="primary"
            type='submit'
          >
            Login
            </Button>
          {/* </Link> */}
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </form>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}

export default Login
