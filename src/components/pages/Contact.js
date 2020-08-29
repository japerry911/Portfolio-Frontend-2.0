import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import axios from "axios";
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
    width: "39.5rem",
    backgroundColor: theme.palette.secondary.dark,
    borderColor: theme.palette.common.blue,
    borderRadius: "4px",
    color: theme.palette.common.green,
    fontFamily: "Roboto",
    "&:hover": {
      borderColor: theme.palette.common.green,
    },
    "&:focus": {
      borderColor: theme.palette.common.green,
      borderWidth: "2px",
      outline: "none",
    },
  },
  button: {
    width: "20rem",
    color: theme.palette.common.green,
    border: `3pt solid ${theme.palette.common.blue}`,
    borderRadius: 50,
    padding: "1rem",
    backgroundColor: "transparent",
    marginTop: "2rem",
    transition: "background-color 500ms ease-in",
    "&:hover": {
      backgroundColor: theme.palette.common.green,
      color: theme.palette.common.black,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      subject,
      message,
      date: new Date(),
    };

    axios
      .post("http://localhost:4000/contact-send-email", { email_options: data })
      .then(
        () => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

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
          <form
            onSubmit={onSubmit}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid item>
              <TextField
                className={classes.textField}
                color="primary"
                variant="outlined"
                label="Name"
                value={name}
                onChange={(newName) => setName(newName.target.value)}
                required
              />
            </Grid>
            <Grid item className={classes.gridItem}>
              <TextField
                className={classes.textField}
                color="primary"
                variant="outlined"
                label="Email"
                value={email}
                onChange={(newEmail) => setEmail(newEmail.target.value)}
                required
              />
            </Grid>
            <Grid item className={classes.gridItem}>
              <TextField
                className={classes.textField}
                color="primary"
                variant="outlined"
                label="Subject"
                value={subject}
                onChange={(newSubject) => setSubject(newSubject.target.value)}
                required
              />
            </Grid>
            <Grid item style={{ marginTop: "1rem" }}>
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
            <Grid item>
              <Button className={classes.button} type="submit">
                Send Message
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
