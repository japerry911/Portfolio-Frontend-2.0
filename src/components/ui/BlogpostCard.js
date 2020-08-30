import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  experienceCard: {
    backgroundColor: theme.palette.common.green,
    width: "90%",
    height: "90%",
    padding: "1rem",
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardHeaderText: {
    ...theme.typography.h5,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  image: {
    marginTop: "auto",
    maxWidth: "15rem",
  },
  button: {
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

const ExperienceCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.experienceCard}>
      <CardMedia
        component="img"
        alt={props.alt}
        image={props.imgUrl}
        title={props.alt}
        className={classes.image}
        style={{ maxWidth: props.maxWidth }}
      />
      <CardContent style={{ marginTop: "auto" }}>
        <Typography
          variant="h5"
          align="center"
          className={classes.cardHeaderText}
        >
          {props.title}
        </Typography>
        <Button className={classes.button}>
          <span style={{ marginRight: 5 }}>Read Blogpost</span>
          <ButtonArrow
            width={20}
            height={20}
            fill={theme.palette.common.green}
          />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
