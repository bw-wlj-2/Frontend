import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions/UserActions/FetchUser";
import { fetchExercises } from "../actions/UserActions/FetchExercises";
import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import ExCard from './ExCard';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Weight-Lifting Journal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
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
    flexDirection: "column"
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
    textDecoration: "none"
  }
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Dashboard = props => {
  const userID = localStorage.getItem("userID");
  const history = useHistory();
  const classes = useStyles();

  const [exercises, setExercises] = useState([]);
  
  useEffect(() => {
    AxiosWithAuth()
      .get("/api/exercises")
      .then(res => {
        console.log("exercise list", res);
        setExercises(res.data);
      })
      .catch(err => {
        console.log("exercise list err", err);
      });
  }, []);

  const editProfile = event => {
    event.preventDefault();
    history.push("/editprofile");
  };

  return (
    <div>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome, {props.userInfo.username}!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Location: Insert Location Here!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link className={classes.linkBut} to="/addexercise">
                    <Button variant="contained">
                      Add Exercise
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link className={classes.linkBut} to="/editprofile">
                    <Button variant="outlined">
                      Edit Profile
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {exercises.map(ex => (
              <ExCard ex={ex} key={ex.id} />
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};


// export default connect(mapStateToProps, { fetchUser, fetchExercises })(
//   Dashboard
// );

export default connect(
  mapStateToProps,
  { fetchUser, fetchExercises }
)(Dashboard);