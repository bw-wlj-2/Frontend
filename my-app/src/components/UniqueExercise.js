import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useHistory, useParams } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme => ({
  title:{
    marginRight:40,
    marginLeft: 40,
    marginTop: 20,
    MarginBottom: 10,
    color:"#E2FFCE",
    border: "1px solid #E2FFCE",
    backgroundColor: "#5B7648",
  },
  middle:{
    paddingBottom: 0,
  },
  buttonCon: {
    margin: "auto"
  },
  editBut: {
    marginRight: 10,
    "&:hover": {
      backgroundColor: "#CCFFC4",
      color: "#007CB2"
    }
  },
  deleteBut: {
    marginLeft: 10,
    border: "1px solid red",
    color: 'red',
    "&:hover": {
      backgroundColor: "red",
      color:"white"
    }
  },
  root: {
    maxWidth: 500,
    margin: "auto",
    marginTop: 90,
    border: "1px dotted #99FF8A"
  },
  linkBut: {
    textDecoration: "none"
  },
  linkText: {
    marginTop: 4,
    color: "#E2FFCE",
    textDecoration:"none",
    "&:hover":{
      textDecoration:"underline"
    }
  },
}));

export default function UniqueExercise(props) {
  const classes = useStyles();
  const [unique, setUnique] = useState({});
  const { id } = useParams();
  // console.log(id)
  const history = useHistory();
  console.log(unique);

  useEffect(() => {
    AxiosWithAuth()
      .get(`/api/exercises/${id}`)
      .then(res =>
        // console.log(res),
        setUnique(res.data)
      )
      .catch(err => console.log(err));
  }, [id]);

  const handleEdit = e => {
    e.preventDefault();
    history.push(`/editExercises/${id}`);
  };

  const handleDelete = e => {
    e.preventDefault();
    AxiosWithAuth()
      .delete(`/api/exercises/${id}`)
      .then(() => {
        history.push(`/dashboard`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Zoom in={true } style={{ transitionDelay: '100ms' }}>
      <Card className={classes.root}>
        <CardHeader overflow="visible" className={classes.title} title={unique.name} titleTypographyProps={{variant:"h3"}}/>
        <CardContent className={classes.middle}>
          <Typography variant="h6" color="textPrimary" component="p">
            Region: {unique.region}
          </Typography>
          <Typography variant="h6" color="textPrimary" component="p">
            Reps: {unique.reps}
          </Typography>
          <Typography variant="h6" color="textPrimary" component="p">
            Current Lbs: {unique.current_pounds}
          </Typography>
          <Typography variant="h6" color="textPrimary" component="p">
            Date: {unique.date_completed}
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
              >
                Delete
              </Button>
            </Link>
          </CardContent>
        </CardActions>
      <p>
            Go to <Link className={classes.linkText} to="/dashboard"> Dashboard</Link>
          </p>
      </Card>
      </Zoom>
    </div>
    
  );
}
