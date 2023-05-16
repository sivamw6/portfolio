import React from 'react';
import { createRoot } from 'react-dom/client';
// GLOBAL/APPLICATION LEVEL STYLING
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <BrowserRouter basename='/portfolio' >
            <App/>
          </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
