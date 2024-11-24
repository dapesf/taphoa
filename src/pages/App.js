import { Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoginPage } from './Login';
import { HomePage } from './HomePage';
import { ProtectedRoute } from "../services/redirectdRoute"

export default function App({ props }) {
  return (
    <>
      <div className='App'>
      <span>This is App</span>
        <Routes>
          <Route path="/Login" exact element={<LoginPage />}></Route>
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
}
