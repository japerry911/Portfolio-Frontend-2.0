import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";
import ProjectCard from "../ui/ProjectCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), 
    url(https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Projects/joshua-aragon-BMnhuwFYr7w-unsplash.jpg)`,
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
    height: "40rem",
  },
}));

const Projects = ({ setValue }) => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios.get("http://localhost:4000/projects").then(
      (response) => {
        setProjects(response.data.projects);
        setIsLoading(false);
      },
      (error) => {
        console.error(error);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <LoadingOverlay active={isLoading} spinner text="Loading...">
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item style={{ marginTop: "3rem" }}>
          <Paper className={classes.headerPaper}>
            <Typography
              variant="h3"
              className={classes.headerText}
              align="center"
            >
              PROJECTS
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
          {projects.map((project) => (
            <Grid
              key={project.id}
              item
              xs={10}
              sm={10}
              md={5}
              lg={5}
              xl={5}
              className={classes.gridCardItem}
              align="center"
            >
              <ProjectCard
                alt="project photo"
                imgUrl={project.image_url}
                title={project.name}
                maxWidth="17rem"
                id={project.id}
                setValue={setValue}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </LoadingOverlay>
  );
};

export default Projects;
