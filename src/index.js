import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { DialogProvider } from './pages/dialogs/DialogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <DialogProvider>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
    </DialogProvider>
  </BrowserRouter>
);

