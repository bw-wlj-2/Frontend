import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

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
  const history = useHistory();
  //   const [users, setUsers] = useState({ username: '', password: '' })

  // const handleChange = e => {
  //   setUsers({
  //     ...users,
  //     [e.target.name]: e.target.value
  //   })
  // }
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     axios.post(`https://weight-lifting-backend.herokuapp.com/api/login`, users)
  //       .then(res =>
  //         localStorage.setItem('token', res.data.payload),
  //         // setTimeout(function () { history.push(`/dashboard`) }, 1500))
  //         history.push(`/dashboard`))
  //       .catch(err => console.log(err))
  //     setUsers({ username: '', password: '' })
  //   }

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
      .post("/api/user/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userID", res.data.id);
        console.log(res.data);

        history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="box">
      <AccountBoxIcon fontSize="large" />
      <Typography component="h2" variant="h5">
        Log In
      </Typography>
      <form className={classes.form} onSubmit={loginForm}>
        <div className={classes.formDiv}>
          <TextField
            label="Username"
            value={credentials.username}
            onChange={handleChanges}
            name="username"
          />
          <br />
          <TextField
            label="Password"
            type="password"
            error
            helperText="Required"
            value={credentials.password}
            onChange={handleChanges}
            name="password"
          />
        </div>
        {/*
//       <form onSubmit={handleSubmit}>
//         <div className={classes.formDiv}>
//           <TextField
//             type='text'
//             label="Username"
//           // onChange={handleChange}
//           // value={users.username}
//           />
//           <br />
//           <TextField
//             label="Password"
//             type="password"
//           // onChange={handleChange}
//           // value={users.password}
//           // error
//           // helperText="Required"
//           />
*/}

        <div>
          {/* <Link className={classes.linkBut} to="/dashboard"> */}
          <Button
            className={classes.contButton}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Login
          </Button>

          {/* </Link> */}
          <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
