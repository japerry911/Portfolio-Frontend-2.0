import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import GitHubIcon from "@material-ui/icons/GitHub";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundColor: theme.palette.common.black,
  },
  headerText: {
    ...theme.typography.h3,
    fontWeight: "bold",
  },
  paper: {
    height: "20rem",
    backgroundColor: theme.palette.common.green,
    width: "35rem",
    marginTop: "2rem",
    borderRadius: 12,
  },
  image: {
    height: "auto",
    width: "30rem",
    borderRadius: 12,
  },
}));

const ShowProject = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [project, setProject] = useState({});

  const params = useParams();

  useEffect(() => {
    setIsLoading(true);

    axios.get(`http://localhost:4000/projects/${params.id}`).then(
      (response) => {
        setProject(response.data.project);
        setIsLoading(false);
      },
      (error) => {
        console.error(error);
        setIsLoading(false);
      }
    );
  }, [params.id]);

  console.log(project);

  return (
    <LoadingOverlay active={isLoading} spinner text="Loading...">
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item style={{ marginTop: "3rem" }}>
          <Typography
            variant="h3"
            align="center"
            className={classes.headerText}
          >
            {project.name}
          </Typography>
        </Grid>
        <Grid
          item
          container
          direction="row"
          style={{ marginTop: "5rem" }}
          alignItems="center"
        >
          <Grid item container direction="column" xs alignItems="center">
            <Grid item>
              <Paper className={classes.paper}></Paper>
            </Grid>
          </Grid>
          <Grid item xs style={{ alignSelf: "center" }} align="center">
            <img
              alt="Dog-Cave Logo"
              src={project.background_image_url}
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Grid>
    </LoadingOverlay>
  );
};

export default ShowProject;
