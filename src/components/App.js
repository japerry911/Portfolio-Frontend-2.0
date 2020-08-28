import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./ui/Footer";

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
