// server-entry.jsx - consistent ES modules approach
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./src/App.jsx";
// Note: CSS imports may not work directly in SSR - styles will be handled by the client

function render(url) {
  try {
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
  } catch (error) {
    console.error("Render error:", error);
    return `<div>Error rendering application: ${error.message}</div>`;
  }
}

// ES module export
export { render };