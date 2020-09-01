import React, { useState, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import railsServer from "../../api/railsServer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CircularProgress from "@material-ui/core/CircularProgress";

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
      width: "25rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
  },
  gridItem: {
    marginTop: "2rem",
  },
  button: {
    width: "15rem",
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
      width: "13rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "9rem",
      fontSize: "0.7rem",
    },
    "&.MuiButton-root.Mui-disabled": {
      color: "red",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [sendError, setSendError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

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
        setDialogOpen(false);
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
                    value={message}
                  />
                </Grid>
                <Grid item>
                  <Button
                    disabled={!name || !email || !subject || !message}
                    className={classes.button}
                    onClick={() => setDialogOpen(true)}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        PaperProps={{
          style: {
            padding: "1rem",
            height: "80%",
            maxWidth: matchesSM ? "100%" : matchesMD ? "60rem" : "90rem",
            backgroundColor: theme.palette.common.black,
          },
        }}
        fullScreen={matchesSM}
      >
        <DialogContent>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              <Typography variant="h3">Confirm Message</Typography>
            </Grid>
            <Grid item className={classes.gridItem}>
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
            <Grid item className={classes.gridItem}>
              <TextField
                className={classes.textField}
                color="primary"
                variant="outlined"
                label="Message"
                required
                multiline
                rows={10}
                onChange={(newMessage) => setMessage(newMessage.target.value)}
                value={message}
              />
            </Grid>
            <Grid
              item
              container
              direction={matchesSM ? "column" : "row"}
              justify="space-around"
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item>
                <Button
                  className={classes.button}
                  onClick={() => setDialogOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  onClick={onSubmit}
                  disabled={
                    isLoading || !name || !email || !subject || !message
                  }
                >
                  {isLoading ? <CircularProgress size={30} /> : "Send Message"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar open={alertOpen} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity={alertType}>
          {alertType === "success"
            ? "Email successfully sent"
            : `Email failed - ${sendError}`}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default Contact;
