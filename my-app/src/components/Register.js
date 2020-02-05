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
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  formDiv: {
    width: "50%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  contButton: {
    marginTop: 25,

    "&:hover": {
      backgroundColor: "#BFECFF",
      color: "#007CB2"
    }
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
                className={classes.contButton}
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
              Already have an account? <Link to="/">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { register })(Register);
