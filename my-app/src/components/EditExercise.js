import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import AxiosWithAuth from '../utils/AxiosWithAuth'

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

const initialValue = {
  name: '',
  region: '',
}

const EditExercise = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  console.log(id)
  const [exer, setExer] = useState(initialValue)

  useEffect(() => {
    AxiosWithAuth().get(`/api/exercises/${id}`)
      .then(res =>
        // console.log(res),
        setExer(res.data)
      )
      .catch(err => console.log(err))
  }, [id])

  const handleChange = e => {
    setExer({
      ...exer,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth().put(`/api/exercises/${id}`, exer)
      .then(() => {
        setTimeout(function () { history.push(`/exercises/${id}`) }, 6000)
        // history.push(`/exercises/${id}`)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="box">
      <AccountBoxIcon fontSize="large" />
      <Typography component="h2" variant="h5">
        Update Exercise
      </Typography>
      <div className={classes.formDiv}>
        <TextField
          label="Exercise Name"
          name='name'
          onChange={handleChange}
          value={exer.name}
        />
        <br />
        <TextField
          label="Region Targeted"
          name='region'
          onChange={handleChange}
          value={exer.region}
        />
        <br />
        {/* <TextField
            type='number'
            label="Weight (lbs)"
            name='weight'
            onChange={handleChange}
            value={exer.weight}
          />
          <br />
          <TextField
            label="Date Completed"
            name='date'
            onChange={handleChange}
            value={exer.date}
          /> */}
        <div>
          <Link to={`/exercises/${id}`}>
            <Button
              onClick={handleSubmit}
              className={classes.contButton}
              variant="outlined"
              color="primary"
            >
              Update
            </Button>
          </Link>
          <p>
            Go to<Link to="/dashboard"> Dashboard</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default EditExercise;
