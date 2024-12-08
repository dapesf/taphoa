import { Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDialog } from './dialogs/DialogContext';
import { ProtectedRoute } from "../services/redirectdRoute"
import { LoginPage } from './Login';
import { Page } from './Page';
import { HeaderPage } from './HeaderPage';
import { FooterPage } from './FooterPage';
import style from "./css/App.module.css"

import { DialogRoute } from '../services/DialogRoute';

export default function App({ props }) {
  const { open, dialogObject } = useDialog();

  useEffect(() => {
  }, [])

  return (
    <>
      <div className={style["app"]}>
        <Routes>
          <Route path="/Login" exact element={<LoginPage />}></Route>
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <HeaderPage title='Hỗ trợ tiệm tạm hóa' />
                <Page />
                <FooterPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      {open ?
        <DialogRoute dialogObject={dialogObject} />
        : null}
    </>
  );
}
