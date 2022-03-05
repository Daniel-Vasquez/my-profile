import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutNavbar from "./components/LayoutNavbar.jsx";
import Home from "./pages/Home.jsx";
import Main from "./pages/Main.jsx";
import Project from "./pages/Project.jsx";
import Profile from "./pages/Profile.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <LayoutNavbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/project/:name" component={Project} />
          <Route exact path="/perfil" component={Profile} />
        </Switch>
      </LayoutNavbar>
    </BrowserRouter>
  );
}

export default App;
