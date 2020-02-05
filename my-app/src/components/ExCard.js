import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #5B7648"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  linkBut: {
    textDecoration: "none",
  },
  cardBut: {
    color: '#79FF60',
    "&:hover": {
      color: "#E2FFCE"
    }
  },
  cardActs: {
    margin: "auto"
  },
  titleText:{
    color: "#E2FFCE",
    backgroundColor: "#5B7648",
  }
}));

const ExCard = ({ ex }) => {
  const classes = useStyles();
  console.log(ex);

  return (
    <Grid item key={ex.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.titleText} gutterBottom variant="h5" component="h2">
            {ex.name}
          </Typography>
          <Typography>Region: {ex.region}</Typography>
          <Typography> date: {ex.date_completed}</Typography>
          <Typography>Reps: {ex.reps}</Typography>
          <Typography> Current lbs: {ex.current_pounds}</Typography>
        </CardContent>
        <CardActions className={classes.cardActs}>
          <Link className={classes.linkBut} to={`/exercises/${ex.id}`}>
            <Button className={classes.cardBut} size="small">View details</Button>
          </Link>
          {/* <Link to="/editexercises" className={classes.linkBut}>
            <Button size="small" color="primary">
              Edit
            </Button>
          </Link> */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ExCard;
