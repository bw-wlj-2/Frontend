import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  linkText: {
    color: "#E2FFCE"
  }
}));

const CopyRight = () => {
  const classes = useStyles();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        className={classes.linkText}
        color="primary"
        href="https://github.com/bw-wlj-2"
      >
        Weight-Lifting Journal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default CopyRight;
