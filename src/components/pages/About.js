import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TabPanel from "../ui/TabPanel";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    backgroundColor: theme.palette.common.black,
  },
  jackImage: {
    height: "auto",
    width: "30rem",
  },
  paper: {
    minHeight: "40rem",
    backgroundColor: theme.palette.common.green,
    width: "35rem",
    marginTop: "2rem",
    borderRadius: 12,
  },
  tabPanel: {
    marginLeft: "1rem",
    marginTop: "1rem",
  },
  headerText: {
    ...theme.typography.h3,
    fontWeight: "bold",
  },
}));

const About = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row" style={{ marginTop: "5rem" }}>
        <Grid item container direction="column" xs alignItems="center">
          <Grid item>
            <Typography
              variant="h3"
              align="center"
              className={classes.headerText}
            >
              ABOUT
            </Typography>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar
                position="static"
                style={{ borderRadius: 12 }}
                elevation={0}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="about-me-tabs"
                  variant="fullWidth"
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
                <TabPanel value={value} index={0} className={classes.tabPanel}>
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabPanel}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanel}>
                  Item Three
                </TabPanel>
              </AppBar>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs style={{ alignSelf: "center" }} align="center">
          <img
            alt="Jack and Sky"
            src="https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/jack_perry_2+(1).png"
            className={classes.jackImage}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
