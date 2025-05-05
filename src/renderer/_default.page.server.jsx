// src/renderer/_default.page.server.jsx
import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { App } from '../App'

export async function render({ Page, pageProps }) {
  const pageHtml = ReactDOMServer.renderToString(
    <App>
      <Page {...pageProps} />
    </App>
  )

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Website</title>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}