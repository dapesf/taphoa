import { useEffect, useRef } from 'react';
import { Input, ButtonConfirm } from '../component/UIComponents';
import { httpPost } from '../services/httpClient';
import { useLoading } from '../hooks/LoadingContext';
import { DialogInfo } from './dialogs/DialogInfo';
import { useDialog } from '../hooks/DialogContext';
import { Validator } from '../common/validator.js';
import "./css/ChangePassword.css"

export function ChangePassword() {
    let validator;
    const phoneRef = useRef(null);
    const passWordRef = useRef(null);
    const nwpassWordRef = useRef(null);
    const { settingDialog, openDialog, closeDialog } = useDialog()
    const { settingLoading } = useLoading();
    let validations = {
        phone:
        {
            methods: {
                isNumeric: true,
                isNull: true
            }
            , name: "Mật khẩu cũ"
            , messages: {
                isNumeric: "Chỉ nhập số.",
                isNull: "Xin hãy nhập."
            }
        },
        password:
        {
            methods: {
                isNull: true,
            }
            , name: "Mật khẩu mới"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        },
        nwpassword:
        {
            methods: {
                isNull: true,
            }
            , name: "Nhập mật khẩu mới"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        }
    };

    const cmdChangePass = async (e) => {

        e.preventDefault();
        settingLoading(true)

        var form = {
            cd_phone_number: phoneRef.current.value,
            password: passWordRef.current.value,
            nwpassword: nwpassWordRef.current.value
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
        return httpPost("Authentication/Login", form)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
            })
            .catch((err) => {
                settingDialog(<DialogInfo content={[err.response.data.status]} tittle={'Alert!'} closeDialog={closeDialog} />);
                openDialog();
            }).finally(() => {
                settingLoading(false);
            })
    }

    const createValidator = () => {
        validations.phone.element = phoneRef.current;
        validations.password.element = passWordRef.current;
        validations.nwpassword.element = nwpassWordRef.current;
        validator = new Validator(validations, { phone: phoneRef, password: passWordRef, nwpassword: nwpassWordRef });
    };

    useEffect(() => {
        createValidator();
        return () => { }
    })

    return (
        <>
            <div className='chg-pw-list-content'>
                <div>
                    <Input type="password" inputRef={phoneRef} placeholder="Mật khẩu cũ" />
                </div>
                <div>
                    <Input type="password" inputRef={passWordRef} placeholder="Mật khẩu mới" />
                </div>
                <div>
                    <Input type="password" inputRef={nwpassWordRef} placeholder="Nhập mật khẩu mới" />
                </div>
                <div>
                    <ButtonConfirm text={'OK'} onClick={cmdChangePass}></ButtonConfirm>
                </div>
            </div>

        </>
    )
}