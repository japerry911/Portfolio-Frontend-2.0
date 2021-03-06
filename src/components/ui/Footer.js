import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import medium from "../../assets/medium.svg";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.green,
    height: "8rem",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    height: "3em",
    width: "3em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  link: {
    color: "#fff",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
    fontFamily: "Roboto",
  },
}));

const Footer = ({ setValue }) => {
  const classes = useStyles();

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "About", link: "/about", activeIndex: 1 },
    { name: "Projects", link: "/projects", activeIndex: 2 },
    { name: "Blogposts", link: "/blogposts", activeIndex: 3 },
    { name: "Contact", link: "/contact", activeIndex: 4 },
  ];

  return (
    <footer className={classes.footer}>
      <Grid container alignItems="center" justify="space-around">
        <Hidden mdDown>
          {routes.map((routeObject) => (
            <Grid
              key={`${routeObject}-${routeObject.activeIndex}`}
              item
              component={Link}
              to={routeObject.link}
              onClick={() => setValue(routeObject.activeIndex)}
              className={classes.link}
            >
              {routeObject.name}
            </Grid>
          ))}
        </Hidden>
        <Grid item>
          <Grid container direction="row" justify="space-between">
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jack-e-perry/"
            >
              <img
                alt="LinkedIn Logo"
                src={linkedin}
                className={classes.icon}
                style={{ marginRight: "5rem" }}
              />
            </Grid>
            <Grid
              item
              style={{
                display: "flex",
                alignItems: "flex-end",
              }}
              component={"a"}
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@jackperry_57377"
            >
              <img
                alt="Medium Logo"
                src={medium}
                className={classes.icon}
                style={{
                  marginRight: "5rem",
                }}
              />
            </Grid>
            <Grid
              item
              component={"a"}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/japerry911"
            >
              <img alt="GitHub Logo" src={github} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
