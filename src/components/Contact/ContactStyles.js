import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "150px",
    background: "white",
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    padding: `${theme.spacing(1)}px`,
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    height: 300,
    width: 300,
  },
  cardGrid: {
    paddingTop: "200px",
  },
}));

export default useStyles;
