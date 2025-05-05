// api/server.js - ES modules version
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { render } from "../server-entry.jsx";

// Create __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function handler(req, res) {
  const url = req.url || "/";
  console.log("Processing request for URL:", url);
  
  try {
    // Read the template file
    let template;
    try {
      const templatePath = path.join(process.cwd(), "dist/index.html");
      console.log("Trying to read template from:", templatePath);
      template = fs.readFileSync(templatePath, "utf-8");
      console.log("Template read successfully");
    } catch (e) {
      console.error("Error reading template from primary path:", e);
      // Fallback path if the first one doesn't work
      const fallbackPath = path.resolve(__dirname, "../../dist/index.html");
      console.log("Trying fallback path:", fallbackPath);
      template = fs.readFileSync(fallbackPath, "utf-8");
      console.log("Template read from fallback path");
    }
    
    // Render the app to a string
    console.log("Rendering app to string");
    const appHtml = render(url);
    
    // Inject the rendered app into the HTML template
    const html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );
    
    // Send the rendered HTML to the client
    console.log("Sending response");
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (error) {
    console.error("Error during SSR:", error);
    res.status(500).send(`Server Error: ${error.message}`);
  }
}