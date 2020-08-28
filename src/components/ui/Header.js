import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
