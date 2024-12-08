import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import style from "./css/Page.module.css"
import { ProductList } from './ProductList.js';
import { HomePage } from './HomePage.js';

export function Page() {
    useEffect(() => {
    }, [])

    return (
        <>
            <div className={style['page-container']}>
                <Routes>
                    <Route path="/HomePage" element={<HomePage />} />
                </Routes>
                <Routes>
                    <Route path="/ProductList" element={<ProductList />} />
                </Routes>
            </div>
        </>
    )
}