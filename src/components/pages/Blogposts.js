import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BlogpostCard from "../ui/BlogpostCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), 
      url(https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Blogposts/pankaj-patel-u2Ru4QBXA5Q-unsplash.jpg)`,
    backgroundAttachment: "fixed",
  },
  headerText: {
    ...theme.typography.h3,
    fontWeight: "bold",
  },
  headerPaper: {
    maxWidth: "40rem",
    padding: "2rem",
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 12,
  },
  gridCardItem: {
    width: "20rem",
    height: "20rem",
  },
}));

const Blogposts = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      alignItems="center"
    >
      <Grid item style={{ marginTop: "3rem" }}>
        <Paper className={classes.headerPaper}>
          <Typography
            variant="h3"
            className={classes.headerText}
            align="center"
          >
            BLOGPOSTS
          </Typography>
        </Paper>
      </Grid>
      <Grid item container style={{ marginTop: "3rem" }} direction="row">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <BlogpostCard
            alt="Elixir Logo"
            imgUrl="https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/pluginIcon.png"
            title="My First Impressions of Elixir"
            maxWidth="17rem"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Blogposts;
