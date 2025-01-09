import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
// import App from './App.jsx';
import Root from './app/root.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
