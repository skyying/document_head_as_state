import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Home from "./home.js";
import About from "./about";

function App({ history }) {
  const headRef = useRef(document.head);

  const [headContent, setHeadContent] = useState(headRef.current.innerHTML);

  useEffect(() => {
    history.listen(() => {
      if (history.location.pathname === "/") {
        headRef.current.innerHTML = headContent;
      }
    });
  }, [headContent]);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home headRef={headRef} setHeadContent={setHeadContent} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
