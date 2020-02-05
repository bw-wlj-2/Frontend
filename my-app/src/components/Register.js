import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions/EntryActions/RegisterAction";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#898E88",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  formDiv: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  regButton: {
    marginTop: 25,
    "&:hover": {
      backgroundColor: "#CCFFC4",
      color: "#007CB2"
    }
  },
  linkBut: {
    textDecoration: "none",
    color: "#E2FFCE",
    "&:hover":{
        textDecoration:"underline"
      }
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
    password: "",
    location: "",
    avatarUrl: ""
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
  console.log(props);

  const handleChanges = event => {
    event.preventDefault();
    // const { name, value } = event.target;
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div className="box">
      <div className={classes.container}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <div className={classes.formDiv}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Username"
                variant="outlined"
                required
                fullWidth
                value={user.username}
                onChange={handleChanges}
                name="username"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Password"
                type="password"
                required
                variant="outlined"
                fullWidth
                value={user.password}
                onChange={handleChanges}
                name="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Location"
                value={user.location}
                onChange={handleChanges}
                name="location"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Avatar"
                value={user.avatarUrl}
                onChange={handleChanges}
                name="avatarUrl"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>

          <div>
            <Link className={classes.linkBut} to="/Dashboard">
              <Button
                className={classes.regButton}
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
                fullWidth
              >
                Register
              </Button>
            </Link>
            <p>
              Already have an account? <Link className={classes.linkBut} to="/">Log in</Link>
            </p>
          </div>

          {/* <AccountBoxIcon fontSize="large" />
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
         <TextField
           label="location"
           required
           value={user.location}
           onChange={handleChanges}
           name="location"
         />
         <br />
         <TextField
           label="avatar"
           required
           value={user.avatarUrl}
           onChange={handleChanges}
           name="avatarUrl"
         />

         <br /> */}
          {/*
         <TextField label="Name" error helperText="Required" />
         <br />
         <TextField label="Email" type="email" required />
         <br />
         */}

          {/* <div>
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

        </div> */}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { register })(Register);
