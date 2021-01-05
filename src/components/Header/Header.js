import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { withRouter } from "react-router";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import ElevationScroll from "../ElevationScroll";
import Dropdown from "../Dropdown";

import useStyles from "./HeaderStyles";
import headersData from "./headerData";

const Header = (props) => {
  const { location } = props;
  const isHome = location.pathname === "/";
  const classes = useStyles(isHome);
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const { mobileView, drawerOpen } = state;
  console.log("open", open);
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {logo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{logo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const logo = (
    <Link
      {...{
        component: RouterLink,
        to: "/",
        style: { textDecoration: "none" },
        key: "label",
      }}
    >
      <Typography variant="h6" component="h1" className={classes.logo}>
        Corina Oprea
      </Typography>
    </Link>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      if (label === "portofolio") {
        return (
          <React.Fragment>
            <Button
              key={label}
              color="#fff"
              to={href}
              className={classes.menuButton}
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              {label}
            </Button>
            <Dropdown
              open={open}
              setOpen={setOpen}
              anchorRef={anchorRef}
              handleClose={handleClose}
            />
          </React.Fragment>
        );
      }
      return (
        <Button
          {...{
            key: label,
            color: "#fff",
            to: href,
            component: RouterLink,
            className: classes.menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };
  return (
    <ElevationScroll>
      <AppBar elevation={0} className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </ElevationScroll>
  );
};
const AdaptiveHeader = withRouter(Header);

export default AdaptiveHeader;
