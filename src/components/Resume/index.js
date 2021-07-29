import { motion } from "framer-motion";
import pageTransition from "../PageTransition";
import pageVariants from "../PageVariants";
import React from "react";
import {
  Grid,
  makeStyles,
  createStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContainer: {
      paddingBottom: "70px",
    },
    root: {
      margin: "25px",
    },
    content: {
      justifyContent: "center",
    },
    accordian: {
      marginTop: "15px",
      border: `2px solid ${theme.colors.primary}`,
      overflow: "hidden",
    },
    accordianText: {
      fontSize: "25px",
      ...theme.fonts.secondary,
      color: theme.colors.quinary,
    },
    accordianContent: {
      fontSize: "15px",
      fontWeight: "bold",
      ...theme.fonts.tertiary,
    },
  })
);

const MyResume = () => {
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
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.pageContainer}
      >
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              classes={{ content: classes.content, root: classes.accordian }}
            >
              <div className={classes.accordianText}>Frontend knowledge</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.accordianContent}>
                HTML, Css, React, Material Ui, JavaScript, BootStrap,
                Handlebars, jQuery, Responsive Design.
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              classes={{ content: classes.content, root: classes.accordian }}
            >
              <div className={classes.accordianText}>Backend knowledge</div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.accordianContent}>
                API's, Express, Node, MongoDb, MongoAtlas, SQL, Mongoose,
                GraphQl, REST-API's.
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Grid>
    </motion.div>
  );
};

export default MyResume;
