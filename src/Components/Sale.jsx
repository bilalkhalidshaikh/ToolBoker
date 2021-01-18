import React from "react";
import { message } from "antd";
import { Divider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Text, Stack } from "@chakra-ui/react";

const useStylesOne = makeStyles((theme) => ({
  root: {
    width: "100%",
    background: "transparent",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  appSale: {
    background: "#ccc",
  },
}));

export default function SimpleContainer() {
  const detail = () => {
    message.info("This App is Comming Soon! We are Working on It.");
  };
  const classes = useStylesOne();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.root}>
        <Typography variant="h4" align="center">
          <b> Newest Apps for Sale</b>
        </Typography>
        <br />
        <Divider />
        <Box
          bg="white"
          w="100%"
          p={4}
          color="#333"
          boxShadow="10px 10px 10px #ccc"
        >
          <Text as="h4" unselectable textDecoration="underline">
            App Title Here
          </Text>
          <Text align="justify">
            App Description Here Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Explicabo quo error minus. Obcaecati illo nobis
            ipsum quam eveniet fuga hic aperiam esse expedita quae commodi, iure
            eaque, dolor odit officia?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Explicabo quo error minus. Obcaecati illo nobis
            ipsum quam eveniet fuga hic aperiam.Explicabo quo error minus.
            Obcaecati illo nobis ipsum quam eveniet fuga hic aperiam esse
            expedita quae commodi, iure eaque, dolor odit officia?Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Explicabo quo error
            minus. Obcaecati illo nobis ipsum quam eveniet fuga hic aperiam.
          </Text>
          <Button
            style={{
              background: "rgb(230, 54, 54)",
              width: "150px",
              height: "50px",
              padding: "10px 20px",
              color: "#ccc",
              cursor: "pointer",
            }}
            className="rounded"
            onClick={detail}
            borderTopRadius="20%"
          >
            Detail
          </Button>
          <br />
        </Box>
        <br />
        <Box
          bg="white"
          w="100%"
          p={4}
          color="#333"
          boxShadow="10px 10px 10px #ccc"
        >
          <Text as="h4" unselectable textDecoration="underline">
            App Title Here
          </Text>
          <Text align="justify">
            App Description Here Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Explicabo quo error minus. Obcaecati illo nobis
            ipsum quam eveniet fuga hic aperiam esse expedita quae commodi, iure
            eaque, dolor odit officia?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Explicabo quo error minus. Obcaecati illo nobis
            ipsum quam eveniet fuga hic aperiam.Explicabo quo error minus.
            Obcaecati illo nobis ipsum quam eveniet fuga hic aperiam esse
            expedita quae commodi, iure eaque, dolor odit officia?Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Explicabo quo error
            minus. Obcaecati illo nobis ipsum quam eveniet fuga hic aperiam.
          </Text>
          <Button
            style={{
              background: "rgb(230, 54, 54)",
              width: "150px",
              height: "50px",
              padding: "10px 20px",
              color: "#ccc",
              cursor: "pointer",
            }}
            onClick={detail}
            className="rounded"
          >
            Detail
          </Button>
          <br />

        </Box>
        <br />

        <Box
          bg="white"
          w="100%"
          p={4}
          color="#333"
          boxShadow="10px 10px 10px #ccc"
        >
          <Text as="h4" unselectable textDecoration="underline">
            App Title Here
          </Text>
          <Text align="justify">
            App Description Here Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Explicabo quo error minus. Obcaecati illo nobis
            ipsum quam eveniet fuga hic aperiam esse expedita quae commodi, iure
            eaque, dolor odit officia?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Explicabo quo error minus. Obcaecati illo nobis
            ipsum quam eveniet fuga hic aperiam.Explicabo quo error minus.
            Obcaecati illo nobis ipsum quam eveniet fuga hic aperiam esse
            expedita quae commodi, iure eaque, dolor odit officia?Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Explicabo quo error
            minus. Obcaecati illo nobis ipsum quam eveniet fuga hic aperiam.
          </Text>
          <Button
            style={{
              background: "rgb(230, 54, 54)",
              width: "150px",
              height: "50px",
              padding: "10px 20px",
              color: "#ccc",
              cursor: "pointer",
            }}
            onClick={detail}
          >
            Detail
          </Button>
          <br />

        </Box>
        <br />
        <Divider />
        <Stack align="center" justifyContent="center" alignItems="center">
          <Button
            style={{
              background: "rgb(230, 54, 54)",
              width: "150px",
              height: "50px",
              padding: "10px 20px",
              color: "#ccc",
              cursor: "pointer",
              borderRadius: "35%",
            }}
          >
            View More
          </Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
