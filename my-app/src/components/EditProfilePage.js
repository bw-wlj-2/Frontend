import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import AxiosWithAuth from '../utils/AxiosWithAuth'
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  contButton: {
    margin: 30,
    backgroundColor: "#007CB2",
    color: "#BFECFF",

    "&:hover": {
      backgroundColor: "#BFECFF",
      color: "#007CB2"
    }
  },
  formDiv: {
    marginTop: 20
  },
  linkBut: {
    textDecoration: "none"
  }
}));
const EditProfilePage = () => {
  const classes = useStyles();
  const { id } = useParams();
  console.log(id)
  const [user, setUser] = useState();

  useEffect(() => {
    AxiosWithAuth().get(`/api/user/login`)
      .then(res => 
        console.log(res)
        // setUser(res.data)
      )
      .catch(err => console.log(err))
  })


  return (
    <div className="box">
      <AccountBoxIcon fontSize="large" />
      <Typography component="h2" variant="h5">
        Edit Profile
      </Typography>
      <div className={classes.formDiv}>
        <TextField label="Name" />
        <br />
        <TextField label="Edit Username" required />
        <br />
        <TextField label="Edit Email" type="email" />
        <br />
        <TextField label="Password" type="password" required />
        <br />
        <TextField label="New Password" type="password" required />

        <div>
          <Link className={classes.linkBut} to="/Dashboard">
            <Button
              className={classes.contButton}
              variant="outlined"
              color="primary"
            >
              Submit
            </Button>
          </Link>
          <p>
            Go Back <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default EditProfilePage;
