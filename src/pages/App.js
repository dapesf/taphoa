import { Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, createContext } from 'react';
import { useDialog } from './dialogs/DialogContext';
import { ProtectedRoute } from "../services/redirectdRoute"
import { LoginPage } from './Login';
import { HomePage } from './HomePage';
import { HeaderPage } from './HeaderPage';
import { FooterPage } from './FooterPage';
import { DialogInfo } from './dialogs/DialogInfo';
import style from "./css/App.module.css"

export default function App({ props }) {

  const { open, content, closeDialog } = useDialog();

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
                <HomePage />
                <FooterPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      {open ? <DialogInfo content={content} closeDialog={closeDialog} /> : null}
    </>
  );
}
