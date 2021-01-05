import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  root: {
    maxWidth: 304,
    margin: "auto",
    borderRadius: 0,
    position: "relative",
  },
  content: {
    padding: 24,
  },
  cta: {
    display: "block",
    textAlign: "center",
    color: "#fff",
    letterSpacing: "3px",
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: "#fff",
    letterSpacing: "2px",
  },
}));

export default useStyles;
