import React, { useState } from "react";
import { Grid, makeStyles, createStyles, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import pageVariants from "../PageVariants";
import pageTransition from "../PageTransition";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      borderRadius: "5px",
      backgroundColor: "#f2f2f2",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
    },
    sendButton: {
      width: "100%",
      height: "40px",
      border: `2px solid ${theme.colors.quinary}`,
      color: theme.colors.quinary,
      padding: "14px 20px",
      margin: "8px 0",
      marginTop: "35px",
      borderRadius: "4px",
    },

    textField: {
      width: "100%",
      padding: "12px 20px",
      margin: "8px 0",
      marginTop: "35px",
      border: `4px solid ${theme.colors.secondary}`,
      borderRadius: "4px",
      boxSizing: "border-box",
      justifyContent: "center",
    },
  })
);

const ContactForm = () => {
  const classes = useStyles();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_1j5wdec",
        e.target,
        "user_1AV0TxghhUlLl0XtXFRJF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={classes.container}>
        <form className={classes.form} onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            className={classes.textField}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className={classes.textField}
          />

          <input
            type="text"
            placeholder="Your Message"
            name="message"
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.sendButton}
          >
            Send
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
