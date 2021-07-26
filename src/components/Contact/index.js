import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  createStyles,
  TextField,
  Button,
} from "@material-ui/core";
import { motion } from "framer-motion";
import pageVariants from "../PageVariants";
import pageTransition from "../PageTransition";

const useStyles = makeStyles((theme) =>
  createStyles({
    gridContainer: {
      padding: "15px",
    },
    textInput: {
      marginTop: "25px",
    },
    buttonContainer: {
      margin: "0",
    },
    submitButton: {
      marginTop: "10px",
      color: theme.colors.secondary,
    },
  })
);

const ContactForm = () => {
  const classes = useStyles();

  const [emailInput, setEmailValue] = useState("");
  const [nameInput, setNameValue] = useState("");
  const [messageInput, setMessageValue] = useState("");

  const handleSubmit = () => {
    console.log("Submitted", emailInput);
    setEmailValue("");
  };

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
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        className={classes.gridContainer}
      >
        <Grid item xs={6} className={classes.textInput}>
          <TextField
            variant="outlined"
            value={nameInput}
            label="Name"
            onChange={(e) => setNameValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} className={classes.textInput}>
          <TextField
            variant="outlined"
            value={emailInput}
            label="Email"
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} className={classes.textInput}>
          <TextField
            variant="outlined"
            value={messageInput}
            label="Message"
            onChange={(e) => setMessageValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} className={classes.buttonContainer}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            size="large"
            classes={{
              root: classes.submitButton,
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default ContactForm;
