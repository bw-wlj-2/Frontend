import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/UserActions/FetchUser";
import { fetchExercises } from "../actions/UserActions/FetchExercises";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import ExCard from "./ExCard";
import CopyRight from "./CopyRight";
import workoutImage from "../images/workingOut.svg";
import './styles.css'
import cn from 'classnames';


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
    padding: theme.spacing(0.5),
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
  linkBut: {
    textDecoration: "none"
  },
  addBut: {
    "&:hover": {
      backgroundColor: "#CCFFC4",
      color: "#007CB2"
    }
  },
  editBut: {
    "&:hover": {
      backgroundColor: "#f4ffdb",
      color: "#007CB2"
    }
  },
  searchContainer: {
    width: "46%",
    margin: "auto"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginTop: 30,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

//MAIN DASHBOARD COMPONENT
const Dashboard = () => {
  const classes = useStyles();
  const [exercises, setExercises] = useState([]);
  //set state for search bar
  const [query, setQuery] = useState("");

  const message = localStorage.getItem(`message`);

  useEffect(() => {
    AxiosWithAuth()
      .get("/api/exercises")
      .then(res => {
        // console.log("unique exercise list", res);
        setExercises(res.data);
        //for search bar to filter exercises
        const results = res.data.filter(
          ex =>
            ex.name.toLowerCase().includes(query.toLowerCase()) ||
            ex.region.toLowerCase().includes(query.toLowerCase())
        );
        setExercises(results);
      })
      .catch(err => {
        console.log("exercise list err", err);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const [darkMode, setDarkMode] = useState(false);
  const toggle = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    var x = document.getElementById('change-text');
    if (x.innerHTML === message) {
      x.innerHTML = `What are you working on today?`;
    } else {
      x.innerHTML = message;
    }
  }

  return (
    <div>
      <CssBaseline />
      <main className={cn({ [`dark-mode`]: darkMode })}>
        {/* Hero unit */}
        <div className={cn(classes.heroContent, { [`dark-mode`]: darkMode })} >
          <button id='magic'
            onClick={toggle} className={cn(`toggle`, { [`toggled`]: darkMode })}>Magic</button>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              id='change-text'
            >
              {message}
            </Typography>
            <div>
              <img width="250" height="220" src={workoutImage} alt='img' />
            </div>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              {/* Location: Insert Location Here! */}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link className={classes.linkBut} to="/addexercise">
                    <Button
                      className={classes.addBut}
                      variant="contained"
                      color="primary"
                    >
                      Add Exercise
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link className={classes.linkBut} to="/editprofile">
                    <Button
                      className={classes.editBut}
                      variant="contained"
                      color="secondary"
                    >
                      Edit Profile
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
            <div className={classes.searchContainer}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  onChange={handleInputChange}
                  value={query}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
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
        <CopyRight />
      </footer>
      {/* End footer */}
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchUser, fetchExercises })(
  Dashboard
);
