import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BlogpostCard from "../ui/BlogpostCard";
import LoadingOverlay from "react-loading-overlay";
import railsServer from "../../api/railsServer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), 
      url(https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Blogposts/pankaj-patel-u2Ru4QBXA5Q-unsplash.jpg)`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
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
    height: "40rem",
  },
}));

const Blogposts = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [blogposts, setBlogposts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    railsServer.get("/blogposts").then(
      (response) => {
        setBlogposts(response.data.blogposts);
        setIsLoading(false);
      },
      (error) => {
        console.error(error);
        setIsLoading(error);
      }
    );
  }, []);

  return (
    <LoadingOverlay active={isLoading} spinner text="Loading...">
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
        <Grid
          item
          container
          style={{ marginTop: "3rem" }}
          direction="row"
          justify="space-evenly"
        >
          {blogposts.map((blogpost) => (
            <Grid
              key={blogpost.id}
              item
              xs={10}
              sm={10}
              md={5}
              lg={5}
              xl={5}
              className={classes.gridCardItem}
              align="center"
            >
              <BlogpostCard
                alt="blogpost photo"
                imgUrl={blogpost.image_url}
                title={blogpost.name}
                maxWidth="17rem"
                blogUrl={blogpost.blog_link}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </LoadingOverlay>
  );
};

export default Blogposts;
