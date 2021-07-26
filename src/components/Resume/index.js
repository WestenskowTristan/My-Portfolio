import { motion } from "framer-motion";
import pageTransition from "../PageTransition";
import pageVariants from "../PageVariants";
import React from "react";
import {
  Grid,
  makeStyles,
  createStyles,
  List,
  ListItemText,
  ListItem,
  MenuItem,
  Menu,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContainer: {
      paddingBottom: "70px",
    },
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: "#fafafa",
      margin: "20px",
      marginTop: "250px",
      textAlign: "center",
      border: `5px solid ${theme.colors.quinary}`,
      cursor: "pointer",
      transition: "0.3s",
      transform: "translate(0px, 0px)",
      "&:hover": {
        boxShadow: `-13px 13px 2.5px 0px ${theme.colors.quarternary}`,
        transition: "0.3s",
        transform: "translate(5px, -5px)",
      },
    },

    listItemText: {
      textAlign: "center",
    },
  })
);

const optionOne = [
  "HTML",
  "Css",
  "React",
  "Material Ui",
  "JavaScript",
  "BootStrap",
  "Handlebars",
  "jQuery",
  "Responsive Design",
];
const optionTwo = [
  "API's",
  "Express",
  "Node",
  "MongoDb",
  "MongoAtlas",
  "SQL",
  "Mongoose",
  "GraphQl",
  "REST",
];

const MyResume = () => {
  const classes = useStyles();
  const [anchorOne, setAnchorOne] = React.useState(null);
  const [anchorTwo, setAnchorTwo] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleFirstClickListItem = (event) => {
    setAnchorOne(event.currentTarget);
  };

  const handleSecondClickListItem = (event) => {
    setAnchorTwo(event.currentTarget);
  };

  const handleFirstMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorOne(null);
  };

  const handleSecondMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorTwo(null);
  };

  const handleClose = () => {
    setAnchorOne(null);
    setAnchorTwo(null);
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
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        className={classes.pageContainer}
      >
        {" "}
        <Grid className={classes.root}>
          <List component="nav" aria-label="Device settings">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label="Frontend Knowledge"
              onClick={handleFirstClickListItem}
              className={classes.listItemText}
            >
              <ListItemText
                primary="Frontend Knowledge"
                secondary={"Show all"}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorOne}
            keepMounted
            open={Boolean(anchorOne)}
            onClose={handleClose}
          >
            {optionOne.map((optionOne, index) => (
              <MenuItem
                key={optionOne}
                selected={index === selectedIndex}
                onClick={(event) => handleFirstMenuItemClick(event, index)}
              >
                {optionOne}
              </MenuItem>
            ))}
          </Menu>
        </Grid>{" "}
        <Grid className={classes.root}>
          <List component="nav" aria-label="Device settings">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label="Backend Knowledge"
              onClick={handleSecondClickListItem}
              className={classes.listItemText}
            >
              <ListItemText
                primary="Backend Knowledge"
                secondary={"Show all"}
              />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorTwo}
            keepMounted
            open={Boolean(anchorTwo)}
            onClose={handleClose}
          >
            {optionTwo.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleSecondMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default MyResume;
