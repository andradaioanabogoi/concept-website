import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  social: {
    transition: "250ms",
    display: "inline-block",
  },
  youtube: {
    color: "#eb3223",
  },
  facebook: {
    color: "#4968ad",
  },
  twitter: {
    color: "#49a1eb",
  },
  instagram: {
    color: "black",
    paddingRight: theme.spacing(4),
  },
  cardGrid: {
    paddingLeft: theme.spacing(16),
    paddingRight: theme.spacing(12),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
}));

export default useStyles;
