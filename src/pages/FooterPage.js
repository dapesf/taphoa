import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Text } from "../component/UIComponents"
import style from "./css/FooterPage.module.css"

export function FooterPage(props) {
    const [title, setTittle] = useState('')

    useEffect(() => {
        setTittle(props.title ?? '');
        return () => { }
    }, [])

    return (
        <div className={style["footer-page-container"]}>
            <div className={style["footer-page-navbar"]}>
                <a href='#' className={style["footer-page-home"]}></a>
                <a href='#' className={style["footer-page-attention"]}></a>
                <a href='#' className={style["footer-page-camera"]}></a>
                <a href='#' className={style["footer-page-list"]}></a>
                <a href='#' className={style["footer-page-settings"]}></a>
            </div>
        </div>
    )
}