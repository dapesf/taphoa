import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import style from "./css/Page.module.css"
import { ProductList } from './ProductList.js';
import { HomePage } from './HomePage.js';
import { Settings } from './Settings.js';
import { Announce } from './Announce.js';
import { ChangePassword } from './ChangePassword.js';

export function Page() {

    return (
        <>
            <div className={style['page-container']}>
                <Routes>
                    <Route path="/HomePage" element={<HomePage />} />
                </Routes>
                <Routes>
                    <Route path="/Announce" element={<Announce />} />
                </Routes>
                <Routes>
                    <Route path="/ProductList" element={<ProductList />} />
                </Routes>
                <Routes>
                    <Route path="/Settings" element={<Settings />} />
                </Routes>
                <Routes>
                    <Route path="/ChangePassword" element={<ChangePassword />} />
                </Routes>
            </div>
        </>
    )
}