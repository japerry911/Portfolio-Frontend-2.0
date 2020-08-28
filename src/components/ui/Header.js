import React, { useState, useEffect, Fragment, cloneElement } from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link } from "react-router-dom";

const ElevationScroll = (props) => {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const useStyles = makeStyles((theme) => ({}));

const Header = ({ value, setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    { name: "About", link: "/about", activeIndex: 1 },
    { name: "Projects", link: "/projects", activeIndex: 2 },
    { name: "Blogposts", link: "/blogposts", activeIndex: 3 },
    { name: "Contact", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    routes.forEach((routeObject) => {
      switch (window.location.pathname) {
        case routeObject.link:
          if (value !== routeObject.activeIndex) {
            setValue(routeObject.activeIndex);
          }
      }
    });
  }, [value, setValue, routes]);

  const tabs = (
    <Fragment>
      <Tabs value={value} onChange={handleTabChange}>
        {routes.map((routeObject) => (
          <Tab
            key={`${routeObject}-${routeObject.activeIndex}`}
            component={Link}
            to={routeObject.link}
            label={routeObject.name}
          />
        ))}
      </Tabs>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((routeObject) => (
            <ListItem
              key={`${routeObject}-${routeObject.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(routeObject.activeIndex);
              }}
              divider
              button
              component={Link}
              to={routeObject.link}
              selected={value === routeObject.activeIndex}
            >
              <ListItemText disableTypography>{routeObject.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableripple>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" disableRipple>
              insert image here
            </Button>
            {matchesMD ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
