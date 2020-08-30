import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TabPanel from "../ui/TabPanel";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ExperienceCard from "../ui/ExperienceCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundColor: theme.palette.common.black,
  },
  jackImage: {
    height: "auto",
    width: "30rem",
    [theme.breakpoints.down("xs")]: {
      width: "10rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
  },
  paper: {
    height: "20rem",
    backgroundColor: theme.palette.common.green,
    maxWidth: "35rem",
    marginTop: "2rem",
    borderRadius: 12,
    [theme.breakpoints.down("xs")]: {
      maxWidth: "85%",
      height: "30rem",
    },
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
  bodyText: {
    color: theme.palette.common.white,
  },
  gridCardItem: {
    width: "20rem",
    height: "20rem",
    margin: "1rem",
  },
  experienceContainer: {
    marginTop: "3rem",
  },
  tab: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.60rem",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const experienceArray = [
    {
      title: "JavaScript",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/logo-javascript-png-transparent-logo-javascriptpng-images-pluspng-javascript-png-587_330.png",
      maxWidth: "17rem",
    },
    {
      title: "React JS",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/800px-React-icon.svg.png",
    },
    {
      title: "React Native JS",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/React-native-logo-transparent%402x.png",
      maxWidth: "11rem",
    },
    {
      title: "Vue JS",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/Vue-logo-1.png",
      maxWidth: "10rem",
    },
    {
      title: "GoLang",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/Go-Logo_Blue+(1).png",
      maxWidth: "10rem",
    },
    {
      title: "Ruby on Rails",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/Ruby_On_Rails_Logo.svg.png",
    },
    {
      title: "SASS",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/1024px-Sass_Logo_Color.svg.png",
    },
    {
      title: "Google Material-UI",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/logo.png",
      maxWidth: "10rem",
    },
    {
      title: "PostgreSQL",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/PostgreSQL-Logo.wine.png",
      maxWidth: "19rem",
    },
    {
      title: "C++",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/c-logo+(1).png",
    },
    {
      title: "Python",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/unnamed.png",
      maxWidth: "10rem",
    },
    {
      title: "Haskell",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/tuFExZl.png",
    },
    {
      title: "Elixir",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/pluginIcon+(1).png",
      maxWidth: "10rem",
    },
    {
      title: "Phoenix Framework",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/QLkrP5nrS6jIL99GMbV3+(1).png",
      maxWidth: "10rem",
    },
    {
      title: "Google Apps Scripts",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/logo-apps-script.png",
      maxWidth: "10rem",
    },
    {
      title: "Google Cloud Platform",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/icon_cloud_192pt_clr.png",
      maxWidth: "10rem",
    },
    {
      title: "Heroku",
      imgUrl:
        "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/873120.png",
      maxWidth: "10rem",
    },
  ];

  return (
    <Grid
      container
      direction="column"
      className={classes.mainContainer}
      justify="space-evenly"
    >
      <Grid item style={{ marginTop: "3rem" }}>
        <Typography variant="h3" align="center" className={classes.headerText}>
          ABOUT JACK
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column-reverse" : "row"}
        style={{
          marginTop: "5rem",
          marginBottom: matchesXS ? "10rem" : "5rem",
          minHeight: "50rem",
        }}
        alignItems="center"
      >
        <Grid item container direction="column" xs alignItems="center">
          <Grid item align={matchesXS ? "center" : undefined}>
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
                  <Tab className={classes.tab} label="< 2017" />
                  <Tab className={classes.tab} label="2018 - 2020" />
                  <Tab className={classes.tab} label="2020 - Present" />
                </Tabs>
                <TabPanel value={value} index={0} className={classes.tabPanel}>
                  <Typography
                    variant="body2"
                    className={classes.bodyText}
                    paragraph
                  >
                    I’m a software engineer/web developer based in Denver, CO.
                    An avid downhill mountain bike racer turned coding
                    professional, I have a passion for creating interactive,
                    intuitive and dynamic web experiences.
                  </Typography>
                  <Typography
                    variant="body2"
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
                    variant="body2"
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
                    variant="body2"
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
                    variant="body2"
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
                    variant="body2"
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
      <Grid item container direction="column" style={{ margin: "3rem 0" }}>
        <Grid item container direction="row" justify="space-evenly">
          {experienceArray.map((experienceObject, index) => (
            <Grid
              item
              className={classes.gridCardItem}
              key={`${experienceObject}-${index}`}
              xs={11}
              sm={11}
              md={4}
              lg={4}
              xl={4}
              align="center"
            >
              <ExperienceCard
                alt={`${experienceObject.title} Logo`}
                imgUrl={experienceObject.imgUrl}
                title={experienceObject.title}
                maxWidth={experienceObject.maxWidth}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
