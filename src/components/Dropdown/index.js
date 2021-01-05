import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const menuItems = [
  { label: "photography", href: "/portofolio/photography" },
  { label: "video", href: "/portofolio/video" },
  { label: "collage", href: "/portofolio/photography" },
];
const Dropdown = (props) => {
  const { open, setOpen, anchorRef, handleClose } = props;

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onKeyDown={handleListKeyDown}
              >
                {menuItems.map((item) => {
                  return (
                    <MenuItem
                      component={RouterLink}
                      to={item.href}
                      onClick={handleClose}
                    >
                      {item.label}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default Dropdown;
