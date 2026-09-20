import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// URL normalizer for HashRouter: converts direct paths/queries (e.g. /activation-pending?token=...) into hash routes
(function normalizeUrlForHashRouter() {
  if (typeof window === 'undefined') return;
  const pathname = window.location.pathname;
  const search = window.location.search;
  const hash = window.location.hash;

  if ((pathname && pathname !== '/' && pathname !== '/index.html') || (search && !hash.includes('?'))) {
    const cleanPath = pathname.replace(/^\//, '');
    let targetHash = hash;
    
    if (cleanPath && (!hash || hash === '#' || hash === '#/')) {
      targetHash = '#/' + cleanPath + search;
    } else if (search && !hash.includes('?')) {
      targetHash = (hash || '#/') + search;
    }

    if (targetHash && targetHash !== hash) {
      window.history.replaceState(null, '', window.location.origin + '/' + targetHash);
    }
  }
})();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
