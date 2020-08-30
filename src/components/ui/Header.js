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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25rem",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    marginLeft: "2.5rem",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "2.5rem",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.green,
    color: "#fff",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: theme.palette.common.white,
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.green,
    width: "12rem",
  },
  drawerItemText: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: 0.7,
    fontFamily: "Roboto",
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerItemEstimateText: {
    backgroundColor: theme.palette.common.black,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

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
          break;
        default:
          if (/\/projects\/*/.test(window.location.pathname)) {
            setValue(2);
          }
          break;
      }
    });
  }, [value, setValue, routes]);

  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleTabChange}
        className={classes.tabContainer}
      >
        {routes.map((routeObject) => (
          <Tab
            key={`${routeObject}-${routeObject.activeIndex}`}
            component={Link}
            to={routeObject.link}
            label={routeObject.name}
            className={classes.tab}
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
        classes={{ paper: classes.drawer }}
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
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText
                disableTypography
                className={classes.drawerItemText}
              >
                {routeObject.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon />
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              className={classes.logoContainer}
            >
              <img
                alt="Jack Logo"
                className={classes.logo}
                src="https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Logos/white_logo_transparent_background.png"
              />
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
