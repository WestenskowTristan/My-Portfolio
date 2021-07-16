import React from "react";
import { Home, Work, Description, Send } from "@material-ui/icons";

export const NavbarData = [
  {
    title: "About",
    path: "/",
    icon: <Home />,
    className: "nav-text",
  },
  {
    title: "My Work",
    path: "/portfolio",
    icon: <Work />,
    className: "nav-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <Description />,
    className: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Send />,
    className: "nav-text",
  },
];
