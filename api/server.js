import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { render } from '../server-entry.jsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');

export default function handler(req, res) {
  const url = req.url || '/';
  
  try {
    // Render the app to a string
    const appHtml = render(url);
    
    // Inject the rendered app into the HTML template
    const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    
    // Send the rendered HTML to the client
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    console.error('Error during SSR:', error);
    res.status(500).send('Server Error');
  }
}