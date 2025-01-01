import { useEffect, useRef } from 'react';
import { Input, ButtonConfirm } from '../component/UIComponents';
import { httpPost } from '../services/httpClient';
import { useNavigate } from "react-router-dom"
import { useLoading } from '../hooks/LoadingContext';
import { DialogInfo } from './dialogs/DialogInfo';
import { useDialog } from '../hooks/DialogContext';
import { Validator } from '../common/validator.js';
import "./css/ChangePassword.css"

export function ChangePassword() {
    let validator;
    const odPwRef = useRef(null);
    const nwPwRef = useRef(null);
    const cfPwRef = useRef(null);
    const { settingDialog, openDialog, closeDialog } = useDialog()
    const { settingLoading } = useLoading();
    const navigate = useNavigate();
    let validations = {
        oldPw:
        {
            methods: {
                isNull: true,
            }
            , name: "Mật khẩu mới"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        },
        newPw:
        {
            methods: {
                isNull: true,
            }
            , name: "Nhập mật khẩu mới"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        },
        cfPw:
        {
            methods: {
                isNull: true,
                isCorrtect: () => {
                    const cfPwRef = cfPwRef.current.value,
                    nwPw = nwPwRef.current.value;

                    return (!(cfPwRef !== nwPw))
                }
            }
            , name: "Nhập mật khẩu mới"
            , messages: {
                isNull: "Xin hãy nhập.",
                isCorrtect: "Xác nhận mật khẩu không giống nhau."
            }
        }
    };

    const cmdChangePass = async (e) => {

        e.preventDefault();
        settingLoading(true)

        var form = {
            oldPw: odPwRef.current.value,
            newPw: nwPwRef.current.value
        }

        const valid = await validator.Excute();
        if (!valid) {
            return Promise.reject("validate fail")
                .catch(() => {
                    settingDialog(<DialogInfo content={validator.msgErrors} type={'alert'} closeDialog={closeDialog} />);
                    openDialog();
                })
                .finally(() => {
                    settingLoading(false);
                })
        }
        return httpPost("Authentication/ChangePassword", form)
            .then((res) => {
                localStorage.removeItem('token')
                settingLoading(false);
                navigate("/Login")
            })
            .catch((err) => {
                settingDialog(<DialogInfo content={[err.response.data.messageRtr]} type={'alert'} closeDialog={closeDialog} />);
                openDialog();
            }).finally(() => {
                settingLoading(false);
            })
    }

    const createValidator = () => {
        validations.oldPw.element = odPwRef.current;
        validations.newPw.element = nwPwRef.current;
        validations.cfPw.element = cfPwRef.current;
        validator = new Validator(validations, { oldPw: odPwRef, newPw: nwPwRef, cfPw: cfPwRef });
    };

    useEffect(() => {
        createValidator();
        return () => { }
    })

    return (
        <>
            <div className='chg-pw-list-content'>
                <div>
                    <Input type="password" inputRef={odPwRef} placeholder="Mật khẩu cũ" />
                </div>
                <div>
                    <Input type="password" inputRef={nwPwRef} placeholder="Mật khẩu mới" />
                </div>
                <div>
                    <Input type="password" inputRef={cfPwRef} placeholder="Nhập mật khẩu mới" />
                </div>
                <div>
                    <ButtonConfirm text={'OK'} onClick={cmdChangePass}></ButtonConfirm>
                </div>
            </div>

        </>
    )
}