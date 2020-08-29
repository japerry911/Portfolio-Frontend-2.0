import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#fff",
    height: "100px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img src={linkedin} style={{ height: "4rem", width: "4rem" }} />
      <img src={github} style={{ height: "4rem", width: "4rem" }} />
    </footer>
  );
};

export default Footer;
