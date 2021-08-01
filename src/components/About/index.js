import React from "react";
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import AboutImage from "../../assets/IMG_0554.JPG";
import pageTransition from "../PageTransition";
import pageVariants from "../PageVariants";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) =>
  createStyles({
    aboutMeInfoContainer: {
      padding: "15px",
      fontFamily: theme.fonts.primary,
    },
    header: {
      ...theme.fonts.secondary,
      color: theme.colors.secondary,
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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
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
            Welcome, I am honored to have you come take a gander at my
            portfolio!, I have graduated from the University of Utah coding
            bootcamp and now I am looking for my first full-time job. I have and
            am currently doing projects for clients so I can learn as much as I
            can. Everyday I strive to expande my knowledge about both front-end
            and back-end, I am always open to challenges and constructive
            feedback. I am a team player who can dedicate all my skills and
            talents to develop high-quality and unique products. Thanks for
            taking a look at my webpage!
          </p>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default About;
