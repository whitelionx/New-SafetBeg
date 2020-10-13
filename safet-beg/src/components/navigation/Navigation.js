import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  link: {
    color: "#000",
    textDecoration: "none",
  },
});

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };
  return (
    <nav>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div className={classes.list}>
          <List>
            {[
              { title: "Home", route: "/" },
              { title: "About", route: "/about" },
              { title: "Contact", route: "/contact" },
            ].map(({ title, route }) => (
              <Link to={route} className={classes.link}>
                <ListItem button key={title}>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navigation;
