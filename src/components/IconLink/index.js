import Image from "../../assets/bootcamp-cert.png";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    logoImage: {
      cursor: "pointer",
      transition: "0.3s",
      transform: "translate(0px, 0px)",
      "&:hover": {
        boxShadow: "-13px 13px 2.5px 0px black",
        transition: "0.3s",
        transform: "translate(5px, -5px)",
      },
      borderBottomLeftRadius: "150%",
      borderBottomRightRadius: "150%",
    },
  })
);

const LogoImage = () => {
  const classes = useStyles();
  return (
    <a
      href="https://www.credly.com/badges/b4582ddb-01b3-42da-81be-7317661c9355/public_url"
      target="_blank"
      className={classes.logoImage}
    >
      <img src={Image}></img>
    </a>
  );
};

export default LogoImage;
