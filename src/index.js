import React from 'react';
import ReactDOM from 'react-dom/client';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { DialogProvider } from './hooks/DialogContext';
import { LoadingProvider } from './hooks/LoadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MemoryRouter >
    <LoadingProvider>
      <DialogProvider>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </DialogProvider>
    </LoadingProvider>
  </MemoryRouter >
);

