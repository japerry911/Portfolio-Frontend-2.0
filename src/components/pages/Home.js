import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), 
      url(https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Home/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg)`,
  },
  paper: {
    width: "30%",
    padding: "2rem",
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      justify="center"
    >
      <Grid
        item
        container
        direction="column"
        align="center"
        style={{ marginBottom: "3rem" }}
      >
        <Grid item>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Greetings, I'm <span>Jack Perry</span>.
            </Typography>
            <Typography variant="h4">
              I'm a Full Stack Software Engineer<span>.</span>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
