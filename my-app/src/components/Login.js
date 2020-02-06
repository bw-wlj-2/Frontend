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
    marginTop: 20,
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

// const useStyles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   },
//   linkBut: {
//     textDecoration: "none"
//   }
// }));

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
    <div>
      {/* <AccountBoxIcon fontSize="large" />
          <Typography component="h2" variant="h5">
            Log In
          </Typography> */}
      <div className={classes.container}>
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
              className={classes.logButton}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>

            {/* </Link> */}
            <p>
              Don't have an account?{" "}
              <Link className={classes.linkText} to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* </div> <div className="box">
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
       <form onSubmit={handleSubmit}>
         <div className={classes.formDiv}>
           <TextField
             type='text'
             label="Username"
            onChange={handleChange}
            value={users.username}
           />
           <br />
           <TextField
             label="Password"
             type="password"
            onChange={handleChange}
            value={users.password}
            error
            helperText="Required"
           />

        <div>
          <Button
            className={classes.contButton}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Login
          </Button>

          {/* </Link> */}
      {/* <p>
            Don't have an account? <Link to="/register">Sign up</Link>
          </p>
        </div> */}
      {/* </form> */}
    </div>
  );
};
export default Login;
