/* eslint-env node */
// Convert to CommonJS for better compatibility with Vercel Functions
const fs = require("fs");
const path = require("path");
const { render } = require("../server-entry.jsx");

module.exports = async (req, res) => {
  const url = req.url || "/";

  try {
    // Read the template file - using a more reliable path resolution for Vercel
    let template;
    try {
      template = fs.readFileSync(
        path.join(process.cwd(), "dist/index.html"),
        "utf-8"
      );
    } catch (e) {
      console.error("Error reading template:", e);
      // Fallback path if the first one doesn't work
      template = fs.readFileSync(
        path.resolve(__dirname, "../../dist/index.html"),
        "utf-8"
      );
    }

    // Render the app to a string
    const appHtml = render(url);

    // Inject the rendered app into the HTML template
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Send the rendered HTML to the client
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (error) {
    console.error("Error during SSR:", error);
    res.status(500).send("Server Error");
  }
};
