import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
  }
}));
const Register = () => {
  const classes = useStyles();

  return (
    <div className='box'>
      <AccountBoxIcon fontSize="large" />
      <Typography component="h2" variant="h5">
        Register
        </Typography>
      <div className={classes.formDiv}>
        <TextField label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        // error 
        // helperText="Required" 
        />
        <br />
        <TextField label="Username" required 
        variant="outlined"
        margin="normal"
        fullWidth/>
        <br />
        <TextField label="Email" type="email" required 
        variant="outlined"
        margin="normal"
        fullWidth/>
        <br />
        <TextField label="Password" type="password" required 
        variant="outlined"
        margin="normal"
        fullWidth/>
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
export default Register;
