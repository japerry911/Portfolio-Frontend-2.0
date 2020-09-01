import React, { useState, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import LoadingOverlay from "react-loading-overlay";
import railsServer from "../../api/railsServer";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), 
      url(https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Contact/luca-bravo-XJXWbfSo2f0-unsplash.jpg)`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
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
    maxWith: "45rem",
    padding: "2rem",
    borderRadius: 12,
    backgroundColor: theme.palette.secondary.dark,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "5rem",
    [theme.breakpoints.down("md")]: {
      maxWidth: "40rem",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "35rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "15rem",
    },
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
    [theme.breakpoints.down("md")]: {
      width: "35rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "30rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
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
      borderWidth: "1px",
      outline: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: "34.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "29.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "14.5rem",
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
    transition: "background-color 300ms ease-in",
    "&:hover": {
      backgroundColor: theme.palette.common.green,
      color: theme.palette.common.black,
    },
    [theme.breakpoints.down("md")]: {
      width: "18rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "14rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "12rem",
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
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [sendError, setSendError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const data = {
      name,
      email,
      subject,
      message,
      date: new Date(),
    };

    railsServer.post("/contact-send-email", { email_options: data }).then(
      () => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setAlertType("success");
        setAlertOpen(true);
        setIsLoading(false);
      },
      (error) => {
        setSendError(error);
        setAlertType("error");
        setAlertOpen(true);
        setIsLoading(false);
      }
    );
  };

  return (
    <Fragment>
      <LoadingOverlay active={isLoading} spinner text="Sending Message...">
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
            <Grid item>
              <Paper className={classes.bodyPaper}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
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
                      onChange={(newSubject) =>
                        setSubject(newSubject.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid item className={classes.gridItem}>
                    <TextField
                      className={classes.textField}
                      color="primary"
                      variant="outlined"
                      label="Message"
                      required
                      multiline
                      rows={10}
                      onChange={(newMessage) =>
                        setMessage(newMessage.target.value)
                      }
                    />
                  </Grid>
                  <Grid item>
                    <Button className={classes.button}>Send Message</Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar open={alertOpen} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity={alertType}>
            {alertType === "success"
              ? "Email successfully sent"
              : `Email failed - ${sendError}`}
          </Alert>
        </Snackbar>
      </LoadingOverlay>
    </Fragment>
  );
};

export default Contact;
