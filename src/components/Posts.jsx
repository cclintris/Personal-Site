import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import "../style/posts.css";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import cpp from "../assets/icons/c.png";
import aws from "../assets/icons/aws.png";
import ts from "../assets/icons/ts.png";
import go from "../assets/icons/go.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import nodejs from "../assets/icons/nodejs.png";

import goPosts from "../posts/go";
import jsPosts from "../posts/javascript";

const Posts = () => {
  const [jsOpen, setJsOpen] = useState(false);
  const [tsOpen, setTsOpen] = useState(false);
  const [goOpen, setGoOpen] = useState(false);
  const [reactOpen, setReactOpen] = useState(false);
  const [cppOpen, setCppOpen] = useState(false);
  const [nodeOpen, setNodeOpen] = useState(false);
  const [awsOpen, setAwsOpen] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = (newShowAlert) => {
    setShowAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowAlert(false);
  };

  useEffect(() => {
    handleShowAlert();
  }, []);

  // list js blogs
  const listJs = (dir, update) => (
    <Box
      sx={{ width: dir === "top" || dir === "bottom" ? "auto" : 450 }}
      onClick={() => update(false)}
      onKeyDown={() => update(false)}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Golang Blogs
          </ListSubheader>
        }
        style={{ backgroundColor: "#fbf9f9" }}
      >
        {jsPosts.map(({ title, url, date }, key) => (
          <React.Fragment key={key}>
            <Link underline="hover" href={url} target="_blank">
              <ListItem>
                <ListItemText primary={title} secondary={date} />
              </ListItem>
            </Link>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  // list ts blogs
  const listTs = (dir, update) => (
    <Box
      sx={{ width: dir === "top" || dir === "bottom" ? "auto" : 450 }}
      onClick={() => update(false)}
      onKeyDown={() => update(false)}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            TypeScript Blogs
          </ListSubheader>
        }
        style={{ textAlign: "center" }}
      >
        To be updated ...
      </List>
    </Box>
  );

  // list Go blogs
  const listGo = (dir, update) => (
    <Box
      sx={{ width: dir === "top" || dir === "bottom" ? "auto" : 450 }}
      //   onClick={() => update(false)}
      onKeyDown={() => update(false)}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Golang Blogs
          </ListSubheader>
        }
        style={{ backgroundColor: "#fbf9f9" }}
      >
        {goPosts.map(({ title, url, date }, key) => (
          <React.Fragment key={key}>
            <Link underline="hover" href={url} target="_blank">
              <ListItem>
                <ListItemText primary={title} secondary={date} />
              </ListItem>
            </Link>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  // list react blogs
  const listReact = (dir, update) => (
    <Box
      sx={{ width: dir === "top" || dir === "bottom" ? "auto" : 450 }}
      onClick={() => update(false)}
      onKeyDown={() => update(false)}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            React Blogs
          </ListSubheader>
        }
        style={{ textAlign: "center" }}
      >
        To be updated ...
      </List>
    </Box>
  );

  // list c++ blogs
  const listCpp = (dir, update) => (
    <Box
      sx={{ width: dir === "top" || dir === "bottom" ? "auto" : 450 }}
      onClick={() => update(false)}
      onKeyDown={() => update(false)}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            C++ Blogs
          </ListSubheader>
        }
        style={{ textAlign: "center" }}
      >
        To be updated ...
      </List>
    </Box>
  );

  // list Node.js blogs
  const listNode = (dir, update) => (
    <Box
      sx={{ width: dir === "top" || dir === "bottom" ? "auto" : 450 }}
      onClick={() => update(false)}
      onKeyDown={() => update(false)}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Node.js Blogs
          </ListSubheader>
        }
        style={{ textAlign: "center" }}
      >
        To be updated ...
      </List>
    </Box>
  );

  // list aws blogs
  const listAws = (dir, update) => (
    <Box
      sx={{ width: dir === "top" || dir === "bottom" ? "auto" : 450 }}
      onClick={() => update(false)}
      onKeyDown={() => update(false)}
    >
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            AWS Blogs
          </ListSubheader>
        }
        style={{ textAlign: "center" }}
      >
        To be updated ...
      </List>
    </Box>
  );

  return (
    <>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="info"
          sx={{ width: "100%" }}
        >
          Some categories are currently empty, but keep an eye, blogs will be
          updated soon!
        </Alert>
      </Snackbar>
      <section id="posts">
        <div className="container">
          <div className="text__container">
            <h4>A place to exchange ideas and tech knowledge ...</h4>
            <h2>The more the merrier</h2>
          </div>
        </div>

        <div className="container container__posts">
          {/* js */}
          <a target="_blank" rel="noreferrer" onClick={() => setJsOpen(true)}>
            <img className="img__cardpost" src={js} alt="js"></img>
          </a>
          <Drawer anchor="right" open={jsOpen} onClose={() => setJsOpen(false)}>
            {listJs("right", setJsOpen)}
          </Drawer>

          {/* ts */}
          <a target="_blank" rel="noreferrer" onClick={() => setTsOpen(true)}>
            <img className="img__cardpost" src={ts} alt="ts"></img>
          </a>
          <Drawer anchor="right" open={tsOpen} onClose={() => setTsOpen(false)}>
            {listTs("right", setTsOpen)}
          </Drawer>

          {/* Go */}
          <a target="_blank" rel="noreferrer" onClick={() => setGoOpen(true)}>
            <img className="img__cardpost" src={go} alt="go"></img>
          </a>
          <Drawer anchor="right" open={goOpen} onClose={() => setGoOpen(false)}>
            {listGo("right", setGoOpen)}
          </Drawer>

          {/* react */}
          <a
            target="_blank"
            rel="noreferrer"
            onClick={() => setReactOpen(true)}
          >
            <img className="img__cardpost" src={react} alt="react"></img>
          </a>
          <Drawer
            anchor="left"
            open={reactOpen}
            onClose={() => setReactOpen(false)}
          >
            {listReact("left", setReactOpen)}
          </Drawer>

          {/* cpp */}
          <a target="_blank" rel="noreferrer" onClick={() => setCppOpen(true)}>
            <img className="img__cardpost" src={cpp} alt="cpp"></img>
          </a>
          <Drawer
            anchor="left"
            open={cppOpen}
            onClose={() => setCppOpen(false)}
          >
            {listCpp("left", setCppOpen)}
          </Drawer>

          {/* nodejs */}
          <a target="_blank" rel="noreferrer" onClick={() => setNodeOpen(true)}>
            <img className="img__cardpost" src={nodejs} alt="nodejs"></img>
          </a>
          <Drawer
            anchor="right"
            open={nodeOpen}
            onClose={() => setNodeOpen(false)}
          >
            {listNode("right", setNodeOpen)}
          </Drawer>

          {/* aws */}
          <a target="_blank" rel="noreferrer" onClick={() => setAwsOpen(true)}>
            <img className="img__cardpost" src={aws} alt="aws"></img>
          </a>
          <Drawer
            anchor="right"
            open={awsOpen}
            onClose={() => setAwsOpen(false)}
          >
            {listAws("right", setAwsOpen)}
          </Drawer>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Posts;
