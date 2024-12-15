import { Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDialog } from '../hooks/DialogContext';
import { useLoading } from '../hooks/LoadingContext';
import { ProtectedRoute } from "../services/redirectdRoute"
import { LoginPage } from './account/Login';
import { Page } from './Page';
import { HeaderPage } from './HeaderPage';
import { FooterPage } from './FooterPage';
import style from "./css/App.module.css"
import { DialogRoute } from '../services/DialogRoute';
import { Loading } from '../component/UIComponents';

export default function App({ props }) {
  const { open, dialogObject } = useDialog();
  const { loading } = useLoading();

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
        {loading ?
          <Loading />
          : null}
      </>
  );
}
