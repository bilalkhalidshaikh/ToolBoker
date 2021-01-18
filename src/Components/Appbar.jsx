import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "red",
    fontWeight: "bolder ",
    fontFamily: "Yusei Magic !important",
  },
  button: { fontWeight: "bold", color: "#333", fontFamily: "Montserrat" },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const path = window.location.pathname;

  return (
    <div className={classes.root}>
      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand>
          <Typography
            variant="h4"
            className={classes.title}
            component="a"
            href={path}
          >
            <b>ToolBoker</b>
          </Typography>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
          </Nav>
          <Nav>
            <Nav.Link>
              <Button color="inherit" className={classes.button}>
                Free Files
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Button color="inherit" className={classes.button}>
                App Selling
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={3}>
              <Button color="inherit" className={classes.button}>
                Contact
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
