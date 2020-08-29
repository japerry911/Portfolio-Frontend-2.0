import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const ExperienceCard = (props) => {
  const classes = useStyles();

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
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
