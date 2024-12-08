import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Text } from "../component/UIComponents"
import style from "./css/FooterPage.module.css"
import { ProtectedRoute } from '../services/redirectdRoute';

export function FooterPage(props) {
    const [title, setTittle] = useState('')

    useEffect(() => {
        setTittle(props.title ?? '');
        return () => { }
    }, [])

    return (
        <div className={style["footer-page-container"]}>
            <div className={style["footer-page-navbar"]}>
                <span>
                    <Link to="/HomePage" className={style["footer-page-home"]}/>
                </span>
                <span>
                    <Link to="#" className={style["footer-page-attention"]}/>
                </span>
                <span>
                    <Link to="#" className={style["footer-page-camera"]}/>
                </span>
                <span>
                    <Link to="/ProductList" className={style["footer-page-list"]}/>
                </span>
                <span>
                    <Link to="#" className={style["footer-page-settings"]}/>
                </span>
            </div>
        </div>
    )
}