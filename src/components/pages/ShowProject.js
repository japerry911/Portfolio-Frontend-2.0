import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ButtonArrow from "../ui/ButtonArrow";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
    minHeight: "20rem",
    backgroundColor: theme.palette.common.green,
    maxWidth: "30rem",
    borderRadius: 12,
    margin: "1rem",
  },
  image: {
    height: "auto",
    maxWidth: "30rem",
    borderRadius: 12,
    [theme.breakpoints.down("md")]: {
      maxWidth: "15rem",
    },
  },
  picturePaper: {
    maxWidth: "30rem",
    height: "auto",
    borderRadius: 12,
    backgroundColor: theme.palette.common.green,
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "15rem",
    },
  },
  button: {
    fontSize: "0.75rem",
    width: "18rem",
    color: theme.palette.common.black,
    border: `3pt solid ${theme.palette.common.green}`,
    borderRadius: 50,
    padding: "1rem",
    backgroundColor: theme.palette.common.blue,
    marginTop: "2rem",
    transition: "background-color 500ms ease-in",
    "&:hover": {
      backgroundColor: theme.palette.common.green,
      color: theme.palette.common.black,
      borderColor: theme.palette.common.blue,
    },
    [theme.breakpoints.down("md")]: {
      width: "16rem",
    },
  },
}));

const ShowProject = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
          direction={matchesSM ? "column-reverse" : "row"}
          style={{ marginTop: "5rem" }}
          alignItems="center"
        >
          <Grid item container direction="column" xs alignItems="center">
            <Paper className={classes.paper}>
              <Grid item>
                <List>
                  {project.features !== undefined
                    ? project.features.split("|||").map((feature, index) => (
                        <ListItem key={index}>
                          <ListItemText
                            primary={`- ${feature}`}
                            style={{ color: theme.palette.common.white }}
                          />
                        </ListItem>
                      ))
                    : null}
                </List>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            item
            xs
            style={{
              alignSelf: "center",
              marginBottom: matchesSM ? "3rem" : 0,
            }}
            align="center"
          >
            <Paper className={classes.picturePaper}>
              <img
                alt="Project Logo"
                src={project.background_image_url}
                className={classes.image}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          justify="space-evenly"
          align={matchesSM ? "center" : undefined}
          style={{ margin: "5rem 0" }}
        >
          {project.link1 ? (
            <Grid item>
              <Button
                className={classes.button}
                component={"a"}
                href={project.link1}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ marginRight: 5 }}>View GitHub Repo</span>
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.green}
                />
              </Button>
            </Grid>
          ) : null}
          {project.link3 ? (
            <Grid item>
              <Button
                className={classes.button}
                component={"a"}
                href={project.link3}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ marginRight: 5 }}>View Application</span>
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.green}
                />
              </Button>
            </Grid>
          ) : null}
          {project.link2 ? (
            <Grid item>
              <Button
                className={classes.button}
                component={"a"}
                href={project.link2}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ marginRight: 5 }}>View Walkthrough Video</span>
                <ButtonArrow
                  width={20}
                  height={20}
                  fill={theme.palette.common.green}
                />
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    </LoadingOverlay>
  );
};

export default ShowProject;
