import React from "react";
import {
  makeStyles,
  createStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@material-ui/core";
import pageTransition from "../PageTransition";
import pageVariants from "../PageVariants";
import PortWorkImg from "../../assets/work-img/screenshot3.png";
import PortProjectImg from "../../assets/work-img/2021-07-04 (2).png";
import "./Portfolio.css";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) =>
  createStyles({
    media: {
      borderBottom: `1px solid ${theme.colors.quarternary}`,
      height: 140,
    },
    firstCard: {
      margin: "15px",
      maxWidth: 345,
      border: `solid 3px ${theme.colors.quarternary}`,
      boxShadow: "-8px 8px 0px -1px #00000050",
      cursor: "pointer",
      transition: "0.3s",
      transform: "translate(0px, 0px)",
      "&:hover": {
        boxShadow: `-13px 13px 2.5px 0px ${theme.colors.quinary}`,
        transition: "0.3s",
        transform: "translate(5px, -5px)",
      },
    },

    secondCard: {
      margin: "15px",
      maxWidth: 345,
      border: `solid 3px ${theme.colors.quarternary}`,
      boxShadow: "-8px 8px 0px -1px #00000050",
      cursor: "pointer",
      transition: "0.3s",
      transform: "translate(0px, 0px)",
      "&:hover": {
        boxShadow: `-13px 13px 2.5px 0px ${theme.colors.quinary}`,
        transition: "0.3s",
        transform: "translate(5px, -5px)",
      },
    },
    cardHeader: {
      color: theme.colors.secondary,
      ...theme.fonts.secondary,
      fontWeight: "bold",
      fontSize: "25px",
      marginBottom: "3px",
    },
    CardContent: {
      ...theme.fonts.tertiary,
      fontSize: "15px",
    },

    linkButton: {
      textDecoration: "none",
      backgroundColor: theme.colors.quinary,
      margin: "10px",
      color: theme.colors.quarternary,
      "&:hover": {
        color: theme.colors.primary,
        boxShadow: `-10px 13px 2.5px 0px ${theme.colors.quinary}`,
        transition: "0.3s",
        transform: "translate(5px, -5px)",
      },
    },

    gridContainer: {
      paddingBottom: "70px",
    },

    linkTag: {
      textDecoration: "none",
    },
  })
);

const Portfolio = () => {
  const classes = useStyles();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Card className={classes.firstCard}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={PortProjectImg}
              title="SecondProject"
            />
            <CardContent>
              <div className={classes.cardHeader}>Savannah's Sweets</div>
              <div className={classes.CardContent}>
                This project was my final project for my bootcamp, my team and I
                made our client a website for her bakery business. My role in
                this project was to handle user authenitcation using web tokens.
                Also use graphql to let users make an account.
              </div>
            </CardContent>
          </CardActionArea>
          <a
            href="https://dudley-doright-93373.herokuapp.com/"
            target="_blank"
            className={classes.linkTag}
          >
            <Button
              variant="contained"
              size="medium"
              className={classes.linkButton}
              disableElevation
            >
              Link
            </Button>
          </a>
        </Card>
        <Card className={classes.secondCard}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={PortWorkImg}
              title="FirstProject"
            />
            <CardContent>
              <div className={classes.cardHeader}>A Night In</div>
              <div className={classes.CardContent}>
                This was my very first project for my bootcamp, my team and I
                made a webpage where you can search for a certian movie to watch
                and also search for a resturant near you to get some food from.
              </div>
            </CardContent>
          </CardActionArea>
          <a
            href="https://github.com/alyssawinn/a-night-in"
            target="_blank"
            className={classes.linkTag}
          >
            <Button
              variant="contained"
              size="medium"
              className={classes.linkButton}
              disableElevation
            >
              Link
            </Button>
          </a>
        </Card>
      </Grid>
    </motion.div>
  );
};

export default Portfolio;
