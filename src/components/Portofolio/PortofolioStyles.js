import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingTop: "200px",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 10, 6),
  },
}));

export default useStyles;
