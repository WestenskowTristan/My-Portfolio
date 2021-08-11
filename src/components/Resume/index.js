import React, { useState } from "react";
import { motion } from "framer-motion";
import pageTransition from "../PageTransition";
import pageVariants from "../PageVariants";
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
import { Document, Page, pdfjs } from "react-pdf";
import resumeImage from "../../assets/work-img/tristan.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

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
    hiddenScrollBars: {
      marginTop: "15px",
      overflow: "unset",
      border: `2px solid ${theme.colors.primary}`,
      "& .react-pdf__Page": {
        overflow: "unset",
        overflowX: "scroll",
      },
      "& .react-pdf__Page__textContent": {
        "& span": {
          overflow: "unset",
        },
      },
      "& .react-pdf__Page__annotations": {
        height: "0px",
      },
    },
  })
);

const MyResume = () => {
  const classes = useStyles();
  const [pageNumber, setPageNumber] = useState(1);

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
          <Document file={resumeImage} className={classes.hiddenScrollBars}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </Grid>
    </motion.div>
  );
};

export default MyResume;
