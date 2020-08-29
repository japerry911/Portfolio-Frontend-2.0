import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), 
      url(https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Contact/luca-bravo-XJXWbfSo2f0-unsplash.jpg)`,
    backgroundAttachment: "fixed",
  },
  formControlStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    width: "40rem",
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
    "& .MuiOutlinedInput-input": {
      color: theme.palette.common.green,
    },
  },
  gridItem: {
    marginTop: "2rem",
  },
  textarea: {
    margin: "1.15rem 0",
    width: "40rem",
    backgroundColor: theme.palette.secondary.dark,
    borderColor: theme.palette.common.blue,
    borderRadius: "4px",
    color: theme.palette.common.green,
    "&:hover": {
      borderColor: theme.palette.common.green,
    },
    "&:focus": {
      borderColor: theme.palette.common.green,
      borderWidth: "2px",
      outline: "none",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [message, setMessage] = useState("");

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
              label="Name"
              required
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <TextField
              className={classes.textField}
              color="primary"
              variant="outlined"
              label="Email"
              required
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <TextField
              className={classes.textField}
              color="primary"
              variant="outlined"
              label="Subject"
              required
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <FormControl className={classes.formControlStyle}>
              <InputLabel
                shrink={message !== ""}
                style={{
                  position: "absolute",
                  color: theme.palette.common.green,
                }}
              >
                &nbsp;&nbsp;Message*
              </InputLabel>
              <TextareaAutosize
                className={classes.textarea}
                color="primary"
                variant="outlined"
                label="Message"
                rowsMin={10}
                rowsMax={10}
                value={message}
                onChange={(newMessage) => setMessage(newMessage.target.value)}
              />
            </FormControl>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
