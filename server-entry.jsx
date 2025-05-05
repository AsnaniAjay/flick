import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App.jsx';
import { StaticRouter } from 'react-router-dom'; // Changed import
import './src/index.css';

export function render(url) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}