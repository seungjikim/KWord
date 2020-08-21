import React, { useState, useEffect } from "react";
import clsx from "clsx";
import LogoImage from "./images/mainlogo.png";
import { auth } from "./firebase.utils";
import { Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import { Button, Drawer, Grid, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Home,
  AccountBox,
  Sms,
  Bookmarks,
  EmojiPeople,
  DoubleArrow,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  logout: {
    marginRight: 10
  }
}));
const MainPage = () => {
  const [user, setUser] = useState(null);
  const [state, setState] = useState(false);

  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const listSwitch = (param) => {
    switch (param) {
      case "Home":
        return <Home />;
      case "Profile":
        return <AccountBox />;
      case "Chat":
        return <Sms />;
      case "Saved Contents":
        return <Bookmarks />;
      case "Help":
        return <EmojiPeople />;
    }
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Profile", "Chat", "Saved Contents", "Help"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{listSwitch(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //console.log(user);
        setUser(user);
      } else {
        setUser("undefined");
      }
    });
  });
  return (
    <div className={classes.root}>
      {user === "undefined" && <Redirect to="/" />}
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
      >
        {
          <React.Fragment>
            <div style={{ paddingTop: 5, paddingLeft: 5 }}>
              <Button>
                <DoubleArrow
                  onClick={toggleDrawer("left", true)}
                  color="secondary"
                  style={{ paddingTop: 0, paddingLeft: 0 }}
                ></DoubleArrow>
              </Button>
            </div>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </React.Fragment>
        }
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-end">
        <div className={classes.paper} style={{ marginTop: 0 }}>
          <div className="HeaderDropDown">KR</div>
        </div>
      </Grid>
      <Grid container spacing={3} direction="row" justify="center">
        <img src={LogoImage} width="300px" height="300px"></img>
      </Grid>
      <Grid container spacing={3} direction="row" justify="center">
        <div className={classes.paper} style={{ margin: 20 }}>
          <Input
            placeholder="Search kword"
            fullWidth
            inputProps={{ "aria-label": "description" }}
          />
          <Button
            className="SearchButton"
            fullWidth
            color="primary"
            onClick={(e) => {
              e.preventDefault();
            }}
            style={{ marginTop: 0, marginLeft: 0 }}
          >
            Search
          </Button>
        </div>
      </Grid>
      <Grid container spacing={3} direction="row" justify="flex-end">
        <div className={classes.paper} style={{ padding: 0 }}>
          <Button
            className="GoToUpload"
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            go to upload
          </Button>
        </div>
        <Button
          className={classes.logout}
          variant="outlined"
          color="secondary"
          onClick={() =>
            auth
              .signOut()
              .then(function () {
                //console.log("log out success");
              })
              .catch(function (error) {
                //console.log("log out failed");
              })
          }
        >
          logout
        </Button>
      </Grid>
    </div>
  );
};

export default MainPage;
