import { useEffect, useState } from 'react';
import { ButtonConfirm, Text } from '../../component/UIComponents';
import style from './dialog.module.css';

export function DialogInfo(props) {
    console.log(props)
    return (
        <div className={style['dialog-info-container']}>
            <div className={style['dialog-modal']}>
                <div className={style['dialog-header']}>
                    <Text text={props.tittle} />
                </div>
                <div className={style['dialog-content']}>
                    <Text text={props.content} />
                </div>
                <div className={style['dialog-footer']}>
                    <div className={style['dialog-footer-left']}>

                    </div>
                    <div className={style['dialog-footer-right']}>
                        <ButtonConfirm text='Close' onClick={props.closeDialog} />
                    </div>
                </div>
            </div>
        </div>
    )
}