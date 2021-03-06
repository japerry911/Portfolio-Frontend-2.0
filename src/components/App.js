import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./misc/Theme";
import Header from "./ui/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./ui/Footer";
import About from "./pages/About";
import LoadingOverlay from "react-loading-overlay";
import Contact from "./pages/Contact";
import Blogposts from "./pages/Blogposts";
import Projects from "./pages/Projects";
import ShowProject from "./pages/ShowProject";
import ScrollToTop from "./misc/ScrollToTop";

const App = () => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imgs = [
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/jack_perry_2+(1).png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/logo-javascript-png-transparent-logo-javascriptpng-images-pluspng-javascript-png-587_330.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/800px-React-icon.svg.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/React-native-logo-transparent%402x.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/Vue-logo-1.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/Go-Logo_Blue+(1).png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/Ruby_On_Rails_Logo.svg.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/1024px-Sass_Logo_Color.svg.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/logo.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/PostgreSQL-Logo.wine.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/c-logo+(1).png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/unnamed.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/tuFExZl.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/pluginIcon+(1).png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/QLkrP5nrS6jIL99GMbV3+(1).png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/logo-apps-script.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/icon_cloud_192pt_clr.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/About/873120.png",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Home/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Contact/luca-bravo-XJXWbfSo2f0-unsplash.jpg",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Projects/joshua-aragon-BMnhuwFYr7w-unsplash.jpg",
      "https://portfolio-website-3242342356234.s3.us-east-2.amazonaws.com/2.0/Blogposts/pankaj-patel-u2Ru4QBXA5Q-unsplash.jpg",
    ];

    cacheImages(imgs);
  }, []);

  const cacheImages = (srcArray) => {
    srcArray.forEach((src) => {
      new Promise(function (resolve, reject) {
        const img = new Image();

        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LoadingOverlay active={isLoading} spinner text="Loading...">
          <Header value={value} setValue={setValue} />
          <ScrollToTop />
          <Switch>
            <Route exact path="/" render={() => <Home setValue={setValue} />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blogposts" component={Blogposts} />
            <Route
              exact
              path="/projects"
              render={() => <Projects setValue={setValue} />}
            />
            <Route exact path="/projects/:id" component={ShowProject} />
          </Switch>
          <Footer setValue={setValue} />
        </LoadingOverlay>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
