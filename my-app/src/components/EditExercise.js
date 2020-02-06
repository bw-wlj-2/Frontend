import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 100,
    color: "#898E88"
  },
  editIcon: {
    color: "#99FF8A"
  },
  contButton: {
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "#CCFFC4",
      color: "#007CB2"
    }
  },
  formDiv: {
    marginTop: 20
  },
  linkBut: {
    textDecoration: "none"
  },
  linkText: {
    color: "#E2FFCE",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

const initialValue = {
  name: "",
  region: ""
};

const EditExercise = () => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  console.log(id);
  const [exer, setExer] = useState(initialValue);

  useEffect(() => {
    AxiosWithAuth()
      .get(`/api/exercises/${id}`)
      .then(res =>
        // console.log(res),
        setExer(res.data)
      )
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = e => {
    setExer({
      ...exer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .put(`/api/exercises/${id}`, exer)
      .then(() => {
        setTimeout(function() {
          history.push(`/exercises/${id}`);
        }, 1000);
        // history.push(`/exercises/${id}`)
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={classes.container}>
      <EditIcon className={classes.editIcon} fontSize="large" />
      <Typography component="h2" variant="h5">
        Update Exercise
      </Typography>
      <div className={classes.formDiv}>
        <TextField
          label="Exercise Name"
          name="name"
          onChange={handleChange}
          value={exer.name || ""}
        />
        <br />
        <TextField
          label="Region Targeted"
          name="region"
          onChange={handleChange}
          value={exer.region || ""}
        />
        <br />
        <TextField
          type="number"
          label="Weight (lbs)"
          name="current_pounds"
          onChange={handleChange}
          value={exer.current_pounds || ""}
        />
        <br />
        <TextField
          label="Reps"
          name="reps"
          onChange={handleChange}
          value={exer.reps || ""}
        />
        <br />
        <TextField
          label="Date Completed"
          name="date_completed"
          onChange={handleChange}
          value={exer.date_completed || ""}
        />
        <div>
          <Link className={classes.linkBut} to={`/exercises/${id}`}>
            <Button
              onClick={handleSubmit}
              className={classes.contButton}
              variant="contained"
              color="primary"
            >
              Update
            </Button>
          </Link>
          <p>
            Go to{" "}
            <Link className={classes.linkText} to="/dashboard">
              {" "}
              Dashboard
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default EditExercise;
