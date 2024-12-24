import { useEffect, useState } from 'react';
import { Text, Input, ButtonConfirm } from '../component/UIComponents';
import "./css/ChangePassword.css"

export function ChangePassword() {
    return (
        <>
            <div className='chg-pw-list-content'>
                <div>
                    <Input type="password" placeholder="Mật khẩu cũ" />
                </div>
                <div>
                    <Input type="password" placeholder="Mật khẩu mới" />
                </div>
                <div>
                    <Input type="password" placeholder="Nhập mật khẩu mới" />
                </div>
                <div>
                    <ButtonConfirm text={'OK'}></ButtonConfirm>
                </div>
            </div>

        </>
    )
}