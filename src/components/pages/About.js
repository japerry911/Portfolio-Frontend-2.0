import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TabPanel from "../ui/TabPanel";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundColor: theme.palette.common.black,
  },
  jackImage: {
    height: "auto",
    width: "30rem",
  },
  paper: {
    height: "20rem",
    backgroundColor: theme.palette.common.green,
    width: "35rem",
    marginTop: "2rem",
    borderRadius: 12,
  },
  tabPanel: {
    marginLeft: "1rem",
    marginTop: "1rem",
    marginRight: "1rem",
  },
  headerText: {
    ...theme.typography.h3,
    fontWeight: "bold",
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item style={{ marginTop: "3rem" }}>
        <Typography variant="h3" align="center" className={classes.headerText}>
          ABOUT <span style={{ color: theme.palette.common.blue }}>JACK</span>
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
                  <Tab label="< 2017" />
                  <Tab label="2018 - 2020" />
                  <Tab label="2020 - Present" />
                </Tabs>
                <TabPanel value={value} index={0} className={classes.tabPanel}>
                  <Typography
                    variant="body1"
                    className={classes.bodyText}
                    paragraph
                  >
                    I’m a software engineer/web developer based in Denver, CO.
                    An avid downhill mountain bike racer turned coding
                    professional, I have a passion for creating interactive,
                    intuitive and dynamic web experiences.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.bodyText}
                    paragraph
                  >
                    After surviving a severe TBI and fractured back/neck injury,
                    I decided to translate my dreams to reality. I used my time
                    as a patient at Craig Hospital strategically - I spent my
                    days studying Python, JavaScript and SQL. Today, I’ve earned
                    a reputation for creating user driven, secure websites to
                    support business goals.
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabPanel}>
                  <Typography
                    variant="body1"
                    className={classes.bodyText}
                    paragraph
                  >
                    I previously served as Automation Analyst on the Analytics
                    Measurement & Product Team (AMP) at Metric Theory, an
                    award-winning digital marketing agency. In this role, I was
                    in charge of building tools for account managers while also
                    developing the company’s in-house reporting tool: Compass.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.bodyText}
                    paragraph
                  >
                    I was quickly promoted to Developer at Metric Theory, where
                    I created ETL tools for several APIs including Google
                    DoubleClick, Call Rail, Apple Search Ads and more. I was
                    also in charge of developing a LinkedIn Ads Experiments UI,
                    which utilized React JS and Nodejs Express.
                  </Typography>
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.tabPanel}>
                  <Typography
                    variant="body1"
                    className={classes.bodyText}
                    paragraph
                  >
                    In February 2020, I decided to pursue a certificate in
                    software engineering at Flatiron School to further build my
                    web development skills. This experience enhanced my
                    expertise in JavaScript, React JS, HTML, CSS, React Native
                    and Ruby on Rails. In May 2020, I graduated from the
                    Flatiron School.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.bodyText}
                    paragraph
                  >
                    In June 2020, I decided to enroll in the Computer Science
                    Masters Program at the University of Denver. I have an
                    anticipated graduation date of Summer 2022.
                  </Typography>
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
      <Grid item style={{ marginTop: "5rem" }}>
        <Typography align="center" variant="h4" className={classes.headerText}>
          EXPERIENCE
        </Typography>
      </Grid>
      <Grid item container direction="column">
        <Grid item container direction="row">
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
