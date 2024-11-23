import { Router, Route, Routes } from 'react-router-dom';
import { LoginPage } from './Login';
import { useEffect, useState } from 'react';
import { HomePage } from './HomePage';


export default function App({ props }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let isLogged = true;

    if (!localStorage.getItem('token')) {
      isLogged = false;
    }
    setLoggedIn(isLogged);

    return () => {
      setLoggedIn(false);
    };

  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path="/Login" exact element={<LoginPage />}></Route>
        <Route path="/HomePage" exact element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}
