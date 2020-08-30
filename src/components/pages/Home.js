import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../ui/ButtonArrow";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), 
      url(https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Home/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg)`,
    backgroundAttachment: "fixed",
    backgorundColor: theme.palette.common.black,
  },
  paper: {
    maxWidth: "40rem",
    padding: "2rem",
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 12,
  },
  altTextColor: {
    color: theme.palette.common.blue,
    fontWeight: "bold",
  },
  button: {
    color: theme.palette.common.green,
    border: `3pt solid ${theme.palette.common.blue}`,
    borderRadius: 50,
    padding: "1rem",
    backgroundColor: "transparent",
    marginTop: "2rem",
    transition: "background-color 300ms ease-in",
    "&:hover": {
      backgroundColor: theme.palette.common.green,
      color: theme.palette.common.black,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      justify="center"
    >
      <Grid item>
        <Grid
          container
          direction="column"
          align="center"
          style={{ marginBottom: "5rem" }}
        >
          <Grid item>
            <Paper className={classes.paper}>
              <Typography variant="h3">
                Greetings, I'm{" "}
                <span className={classes.altTextColor}>Jack Perry</span>.
              </Typography>
              <Typography variant="h4">
                I'm a Full Stack Software Engineer
                <span className={classes.altTextColor}>.</span>
              </Typography>
              <Button className={classes.button}>
                <span style={{ marginRight: 5 }}>View My Projects</span>
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.green}
                />
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
