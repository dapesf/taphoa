import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import style from "./css/HomePage.module.css"
import dummyData from '../assets/dummy/dataHomePage.js'
import { Card, ButtonConfirm } from '../component/UIComponents';
import { useDialog } from './dialogs/DialogContext.js';
import { DialogInfo } from '../pages/dialogs/DialogInfo';

export function HomePage() {
    const [notify, setNotify] = useState([])
    const { settingDialog, openDialog, closeDialog } = useDialog()

    function FetchData() {
        return new Promise((resolve, reject) => {
            resolve("oke")
        }).then(() => {
            if (!dummyData)
                return;
            setNotify(dummyData)
        })
    };

    useEffect(() => {
        FetchData()
    }, [])

    function openDialogInfo() {
        settingDialog(<DialogInfo content={'This is a tittle'} tittle={'This is content!!!'} closeDialog={closeDialog} />);
        openDialog();
    }

    return (
        <div className={style['home-page-container']}>
            <div>
                <ButtonConfirm text="Open Dialog" onClick={() => { openDialogInfo() }} />
            </div>
            <div>
                {notify.map((item) => {
                    return <Card key={item.id} id={item.id} value={item.value} />
                })}
            </div>
        </div>
    )
}