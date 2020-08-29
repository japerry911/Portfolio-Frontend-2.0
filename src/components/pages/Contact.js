import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), 
      url(https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Contact/luca-bravo-XJXWbfSo2f0-unsplash.jpg)`,
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
  bodyPaper: {
    minWidth: "45rem",
    padding: "2rem",
    borderRadius: 12,
    backgroundColor: theme.palette.secondary.dark,
  },
  textField: {
    "& .MuiFormLabel-root": {
      color: theme.palette.common.green,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.common.blue,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.common.green,
      },
    },
  },
}));

const Contact = () => {
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
            CONTACT JACK
          </Typography>
        </Paper>
      </Grid>
      <Grid
        item
        style={{ marginTop: "3rem" }}
        container
        direction="column"
        alignItems="center"
      >
        <Paper className={classes.bodyPaper}>
          <Grid item>
            <TextField
              className={classes.textField}
              color="primary"
              variant="outlined"
              label="Email"
            />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
