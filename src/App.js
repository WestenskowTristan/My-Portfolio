import React, { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./Theme";
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

const App = () => {
  const location = useLocation();

  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/resume" component={ResumePage} />
              </Switch>
            </AnimatePresence>
          </Suspense>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
