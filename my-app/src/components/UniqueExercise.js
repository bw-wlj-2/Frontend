import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useHistory, useParams } from "react-router-dom";
import AxiosWithAuth from '../utils/AxiosWithAuth';

const useStyles = makeStyles(theme => ({
  buttonCon: {
    margin: "auto"
  },
  editBut: {
    margin: 10
  },
  deleteBut: {
    margin: 10,
    border: "1px solid red",

    "&:hover": {
      backgroundColor: "red"
    }
  },
  root: {
    maxWidth: 500,
    margin: "auto",
    marginTop: 200
  },
  linkBut: {
    textDecoration: "none"
  }
}));

export default function UniqueExercise(props) {
  const classes = useStyles();
  const [unique, setUnique] = useState({});
  const { id } = useParams();
  // console.log(id)
  const history = useHistory();

  useEffect(() => {
    AxiosWithAuth().get(`/api/exercises/${id}`)
      .then(res =>
        // console.log(res),
        setUnique(res.data)
      )
      .catch(err => console.log(err))
  }, [id]);

  const handleEdit = e => {
    e.preventDefault();
    // setTimeout(function () { history.push(`/editExercises/${id}`) }, 5000)
    history.push(`/editExercises/${id}`)
  }

  const handleDelete = e => {
    e.preventDefault();
    AxiosWithAuth().delete(`/api/exercises/${id}`)
      .then(() => {
        history.push(`/dashboard`)
      })
      .catch(err => console.log(err))
  }

  // console.log(unique)
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title={unique.name} />
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            Region: {unique.region}
          </Typography>

        </CardContent>
        <CardActions disableSpacing>
          <CardContent className={classes.buttonCon}>
            <Link to={`/editExercises/${id}`} className={classes.linkBut}>
              <Button
                onClick={handleEdit}
                className={classes.editBut}
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
            </Link>
            <Link to="/dashboard" className={classes.linkBut}>
              <Button
                onClick={handleDelete}
                className={classes.deleteBut}
                variant="contained"
                color="secondary"
              >
                Delete
              </Button>
            </Link>
          </CardContent>
        </CardActions>
      </Card>
    </div>
  );
}
