import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Grid } from "@material-ui/core";

const FooterPage = () => {
  const path = window.location.pathname;
  const host = window.location.hostname;
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <Grid container>
            <Grid item>
              <h5 className="title">ToolBoker</h5>
              <p>
                Download Free Files and Upload Your own App and make money
                online.
              </p>
            </Grid>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Grid item>
              <h5 className="title">Quick Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">About</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">DMCA</a>
                </li>
              </ul>
            </Grid>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Grid item>
           
              <h5 className="title"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get In Touch</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Email: abc@gmail.com</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Skype: abc@hotmail.com</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href={path}> {host} </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
