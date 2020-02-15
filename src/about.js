import React, { useEffect } from "react";

function injectStyle() {
  var css = "h2 { background-color: green; }",
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");
  head.appendChild(style);
  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

function About() {
  useEffect(() => {
    injectStyle();
  }, []);
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default About;
