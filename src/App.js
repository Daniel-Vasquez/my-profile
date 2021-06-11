import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutNavbar from "./components/LayoutNavbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
// import CardBlogPost from "./components/CardBlogPost";

function App() {
  return (
    <BrowserRouter>
      <LayoutNavbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/project/:name" component={Project} />
          <Route exact path="/perfil" component={Profile} />
        </Switch>
      </LayoutNavbar>
    </BrowserRouter>
  );
}

export default App;
