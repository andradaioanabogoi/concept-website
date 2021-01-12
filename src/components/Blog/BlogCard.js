import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CallMade from "@material-ui/icons/CallMade";
import { Link as RouterLink } from "react-router-dom";
import { Row, Column, Item } from "@mui-treasury/components/flex";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import Image from "material-ui-image";

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: "0.2rem",
    backgroundColor: "rgba(0,0,0,0.72)",
    color: "#fff",
  },
})(Tooltip);

const useBasicProfileStyles = makeStyles(({ palette }) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: "#D5B998",
  },
  overline: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "#8D9CAD",
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: "#495869",
  },
}));

const BasicProfile = (props) => {
  const classes = useBasicProfileStyles();
  return (
    <Row {...props}>
      <Item>
        <Avatar className={classes.avatar}>C</Avatar>
      </Item>
      <Item position={"middle"} pl={{ sm: 0.5, lg: 0.5 }}>
        <Typography className={classes.overline}>CREATOR</Typography>
        <Typography className={classes.name}>corina.op</Typography>
      </Item>
    </Row>
  );
};

const useCardHeaderStyles = makeStyles(() => ({
  root: { paddingBottom: 0 },
  title: {
    fontSize: "1.25rem",
    color: "#122740",
  },
  subheader: {
    fontSize: "0.875rem",
    color: "#495869",
  },
}));

const CardHeader = (props) => {
  const classes = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  return (
    <Row {...props}>
      <Item position={"middle"}>
        <Typography className={classes.title}>
          <b>Romanian Weddings</b>
        </Typography>
        <Typography className={classes.subheader}>
          Weddings in Romania usually take place on Sundays or Saturdays
        </Typography>
      </Item>
      <Item position={"right"} mr={-0.5}>
        <StyledTooltip title={"Read more"}>
          <IconButton
            {...{
              component: RouterLink,
              to: props.to,
              style: { textDecoration: "none" },
              key: "label",
              classes: { iconBtnStyles },
            }}
          >
            <CallMade />
          </IconButton>
        </StyledTooltip>
      </Item>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    border: "2px solid",
    borderColor: "#E7EDF3",
    borderRadius: 16,
    transition: "0.4s",
    "&:hover": {
      borderColor: "#5B9FED",
    },
  },
  gridContainer: {
    paddingTop: "70px",
  },
}));

export const BlogCard = React.memo(function ShowcaseCard(props) {
  const classes = useStyles();
  const { blogPost } = props;
  const gap = { xs: 1, sm: 1.5, lg: 2 };
  return (
    <Grid
      container
      spacing={4}
      justify={"center"}
      className={classes.gridContainer}
    >
      <Grid item xs={12} sm={8} lg={7}>
        <Row
          className={classes.card}
          p={{ xs: 0.5, sm: 0.75, lg: 1 }}
          gap={gap}
        >
          <Item grow>
            <Image src={blogPost.image} cover="true" aspectRatio="1/2" />
          </Item>
          <Column>
            <CardHeader to={blogPost.to} />
            <BasicProfile position={"bottom"} />
          </Column>
        </Row>
      </Grid>
    </Grid>
  );
});
export default BlogCard;
