import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: (isHome) => ({
    background: isHome ? "none" : "#610C04",
  }),
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#D5B998",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    color: "#ffff",
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default useStyles;
