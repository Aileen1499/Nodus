import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { captureIncomingReferral } from './lib/referral';

captureIncomingReferral();

// iOS Safari mengabaikan user-scalable=no: cegah gestur cubit-zoom halaman secara eksplisit.
// (Zoom peta pengetahuan memakai sentuhan sendiri dan tidak terpengaruh.)
['gesturestart', 'gesturechange', 'gestureend'].forEach((type) =>
  document.addEventListener(type, (e) => e.preventDefault(), { passive: false } as AddEventListenerOptions)
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

