import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import style from "./css/Page.module.css"
import { ProductList } from './ProductList.js';
import { HomePage } from './HomePage.js';
import { Settings } from './Settings.js';
import { Announce } from './Announce.js';
import { ChangePassword } from './ChangePassword.js';
import { ChangePhone } from './ChangePhone.js';
import { EditAccount } from './EditAccount.js';
import { ProductInput } from './ProductInput.js';

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
                <Routes>
                    <Route path="/ChangePhone" element={<ChangePhone />} />
                </Routes>
                <Routes>
                    <Route path="/EditAccount" element={<EditAccount />} />
                </Routes>
                <Routes>
                    <Route path="/ProductInput" element={<ProductInput />} />
                </Routes>
            </div>
        </>
    )
}