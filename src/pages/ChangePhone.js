import { useEffect, useRef } from 'react';
import { Input, ButtonConfirm } from '../component/UIComponents.js';
import { httpPost } from '../services/httpClient.js';
import { useNavigate } from "react-router-dom"
import { useLoading } from '../hooks/LoadingContext.js';
import { DialogInfo } from './dialogs/DialogInfo.js';
import { useDialog } from '../hooks/DialogContext.js';
import { Validator } from '../common/validator.js';
import "./css/ChangePassword.css"

export function ChangePhone() {
    let validator;
    const nwPhoneRef = useRef(null);
    const pwRef = useRef(null);
    const { settingDialog, openDialog, closeDialog } = useDialog()
    const { settingLoading } = useLoading();
    const navigate = useNavigate();
    let validations = {
        newPhone:
        {
            methods: {
                isNull: true,
            }
            , name: "Nhập số điện thoại mới"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        },
        passWord:
        {
            methods: {
                isNull: true,
            }
            , name: "Nhập mật khẩu"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        }
    };

    const cmdChangePhone = async (e) => {

        e.preventDefault();
        settingLoading(true)

        var form = {
            newPhone: nwPhoneRef.current.value,
            passWord: pwRef.current.value
        }

        const valid = await validator.Excute();
        if (!valid) {
            return Promise.reject("validate fail")
                .catch(() => {
                    settingDialog(<DialogInfo content={validator.msgErrors} tittle={'Alert!'} closeDialog={closeDialog} />);
                    openDialog();
                })
                .finally(() => {
                    settingLoading(false);
                })
        }
        return httpPost("Authentication/ChangePhone", form)
            .then((res) => {
                localStorage.removeItem('token')
                settingLoading(false);
                navigate("/Login")
            })
            .catch((err) => {
                settingDialog(<DialogInfo content={[err.response.data.status]} tittle={'Alert!'} closeDialog={closeDialog} />);
                openDialog();
            }).finally(() => {
                settingLoading(false);
            })
    }

    const createValidator = () => {
        validations.newPhone.element = nwPhoneRef.current;
        validations.passWord.element = pwRef.current;
        validator = new Validator(validations, { newPhone: nwPhoneRef, passWord: pwRef });
    };

    useEffect(() => {
        createValidator();
        return () => { }
    })

    return (
        <>
            <div className='chg-pw-list-content'>
                <div>
                    <Input type="number" inputRef={nwPhoneRef} placeholder="Số điện thoại mới" />
                </div>
                <div>
                    <Input type="password" inputRef={pwRef} placeholder="Mật khẩu" />
                </div>
                <div>
                    <ButtonConfirm text={'OK'} onClick={cmdChangePhone}></ButtonConfirm>
                </div>
            </div>

        </>
    )
}