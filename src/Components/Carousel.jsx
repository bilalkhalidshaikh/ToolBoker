import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Grid, Container, Typography, Button } from "@material-ui/core";
import imgOne from "../Images/one.png";
import imgTwo from "../Images/two.png";
import imgThree from "../Images/three.png";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import { useEmblaCarousel } from "embla-carousel/react";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "white",
    marginTop: theme.spacing(8),
  },
  img: {
    width: "400px !important",
    height: "300px  !important",
  },
}));

const CarouselPage = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className={classes.root}>
      <CssBaseline />
      <Hidden only="xs">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Grid container spacing={2}>
              <Grid item>
                <Image
                  className="d-block fluid"
                  src={imgOne}
                  alt="First slide"
                  className={classes.img}
                  fluid
                />
              </Grid>
              <Grid item>
                <Typography variant="h5" style={{ fontWeight: "bolder" }}>
                  DOWNLOAD FREE FILE BLOGS HERE
                </Typography>
                <br />
                <hr />
                <Typography noWrap>
                  This is The Description of The Item or File. This is The
                  Description of The Item or File.
                  <br />
                  This is The Description of The Item or/and File .This is The
                  Description of The Item or File.
                  <br />
                  This is The Description of The Item or File.This is The
                  Description of The Item or File.
                  <hr />
                </Typography>
                <Typography>
                  <Button
                    style={{
                      background: "rgb(230, 54, 54)",
                      width: "150px",
                      height: "50px",
                      padding: "10px 20px",
                      color: "#ccc",
                      pointerEvents: "none",
                      cursor: "pointer",
                    }}
                  >
                    Detail
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Carousel.Item>
          <Carousel.Item>
            <Grid container spacing={2}>
              <Grid item>
                <Image
                  className="d-block fluid"
                  src={imgTwo}
                  alt="First slide"
                  className={classes.img}
                  fluid
                />
              </Grid>
              <Grid item>
                <Typography variant="h5" style={{ fontWeight: "bolder" }}>
                  DOWNLOAD FREE FILE BLOGS HERE
                </Typography>
                <br />
                <hr />
                <Typography noWrap>
                  This is The Description of The Item or File. This is The
                  Description of The Item or File.
                  <br />
                  This is The Description of The Item or/and File .This is The
                  Description of The Item or File.
                  <br />
                  This is The Description of The Item or File.This is The
                  Description of The Item or File.
                  <hr />
                </Typography>
                <Typography>
                  <Button
                    style={{
                      background: "rgb(230, 54, 54)",
                      width: "150px",
                      height: "50px",
                      padding: "10px 20px",
                      color: "#ccc",
                      pointerEvents: "none",
                      cursor: "pointer",
                    }}
                  >
                    Detail
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Carousel.Item>
          <Carousel.Item>
            <Grid container spacing={2}>
              <Grid item>
                <Image
                  className="d-block fluid"
                  src={imgThree}
                  alt="First slide"
                  className={classes.img}
                  fluid
                />
              </Grid>
              <Grid item sm>
                <Typography variant="h5" style={{ fontWeight: "bolder" }}>
                  DOWNLOAD FREE FILE BLOGS HERE
                </Typography>
                <br />
                <hr />
                <Typography noWrap>
                  This is The Description of The Item or File. This is The
                  Description of The Item or File.
                  <br />
                  This is The Description of The Item or/and File .This is The
                  Description of The Item or File.
                  <br />
                  This is The Description of The Item or File.This is The
                  Description of The Item or File.
                  <hr />
                </Typography>
                <Typography>
                  <Button
                    style={{
                      background: "rgb(230, 54, 54)",
                      width: "150px",
                      height: "50px",
                      padding: "10px 20px",
                      color: "#ccc",
                      pointerEvents: "none",
                      cursor: "pointer",
                    }}
                  >
                    Detail
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Carousel.Item>
        </Carousel>
      </Hidden>
    </Container>
  );
};

export default CarouselPage;
