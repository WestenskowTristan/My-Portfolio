import React, { lazy, Suspense } from "react";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./Theme";
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Navbar />
              <Switch>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/resume" component={ResumePage} />
              </Switch>
            </Suspense>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
