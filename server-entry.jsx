import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./src/App.jsx";
import "./src/index.css";

function render(url) {
  return ReactDOMServer.renderToString(
    React.createElement(
      React.StrictMode,
      null,
      React.createElement(
        StaticRouter,
        { location: url },
        React.createElement(App, null)
      )
    )
  );
}

export { render };
