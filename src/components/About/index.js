import React from "react";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import AboutImage from "../../assets/IMG_0554.JPG";

const useStyles = makeStyles((theme) =>
  createStyles({
    aboutMeInfoContainer: {
      padding: "15px",
      fontFamily: theme.fonts.primary,
    },
    header: {
      ...theme.fonts.secondary,
      color: theme.colors.primary,
      fontSize: "60px",
    },
    header2: {
      ...theme.fonts.primary,
      marginTop: "3px",
      fontSize: "35px",
    },
    aboutInfo: {
      marginTop: "5px",
      ...theme.fonts.tertiary,
      fontSize: "20px",
      paddingBottom: "70px",
    },
    imageColumnContainer: {
      padding: "15px",
    },
    imageContainer: {
      height: "600px",
      width: "100%",
      overflow: "hidden",
      position: "relative",
      border: `2px solid #000`,
      borderRadius: "5px",
      backgroundImage: `url(${AboutImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
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
    image: {
      minHeight: "600px",
      width: "100%",
    },
    "@media (max-width: 1500px)": {
      imageContainer: {
        height: "400px",
      },
      image: {
        minHeight: "400px",
      },
    },
  })
);

const About = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        lg={4}
        className={classes.imageColumnContainer}
      >
        <div className={classes.imageContainer}>
          {/* <img src={AboutImage} className={classes.image} /> */}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={7}
        lg={8}
        className={classes.aboutMeInfoContainer}
      >
        <h1 className={classes.header}>About Me</h1>
        <h2 className={classes.header2}>My name is Tristan Westenskow.</h2>
        <p className={classes.aboutInfo}>
          Welcome, I am honored to have you come take a gander at my portfolio!
          I am very eager in learning everything I can possibly know about
          full-stack web development, because that is what I like to do!
          Building websites isn't only a career choice for me, it's what I am
          passionate about. Everyday I strive to expande my knowledge about both
          front-end and back-end. I have graduated from the University of Utah
          coding bootcamp and have made a lot of projects both during and after
          the program. Take a look around my webpage to see everything.
        </p>
      </Grid>
    </Grid>
  );
};

export default About;
