import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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

export default function UniqueExercise() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader title="WorkoutNameHere" subheader="DateHere" />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            BodyRegionWorkedOut
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <CardContent className={classes.buttonCon}>
            <Link to="/editexercises" className={classes.linkBut}>
              <Button
                className={classes.editBut}
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
            </Link>
            <Link to="/dashboard" className={classes.linkBut}>
              <Button
                className={classes.deleteBut}
                variant="outined"
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
