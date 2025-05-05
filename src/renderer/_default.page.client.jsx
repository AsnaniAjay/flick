// src/renderer/_default.page.client.jsx

import ReactDOM from 'react-dom/client'
import { App } from '../App'

export async function render({ Page, pageProps }) {
  const root = document.getElementById('root')
  ReactDOM.hydrateRoot(
    root,
    <App>
      <Page {...pageProps} />
    </App>
  )
}