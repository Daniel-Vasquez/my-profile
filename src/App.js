import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutNavbar from "./components/LayoutNavbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Profile from "./pages/Profile";
import CardBlogPost from "./components/CardBlogPost";

function App() {
  return (
    <BrowserRouter>
      <LayoutNavbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/blog/:id" component={CardBlogPost} />
        </Switch>
      </LayoutNavbar>
    </BrowserRouter>
  );
}

export default App;
