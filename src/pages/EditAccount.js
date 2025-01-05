import { useEffect, useRef } from "react"
import { Input, ButtonConfirm } from "../component/UIComponents.js"
import { Link } from "react-router-dom"
import { httpGet, httpPost } from "../services/httpClient.js"
import { useLoading } from "../hooks/LoadingContext.js"
import { DialogInfo } from "./dialogs/DialogInfo.js"
import { useDialog } from "../hooks/DialogContext.js"
import { Validator } from "../common/validator.js"
import { isUndefOrStrEmpty } from "../common/common.js"

export function EditAccount() {
    let validator;
    const nameRef = useRef(null);
    const storeRef = useRef(null);
    const mailRef = useRef(null);
    const formRef = useRef(null);
    const { settingDialog, openDialog, closeDialog } = useDialog()
    const { settingLoading } = useLoading();

    const Register = async (e) => {
        e.preventDefault();
        settingLoading(true)
        createValidator();

        var form = {
            cd_phone_number: "9999",
            cd_store: storeRef.current.value,
            name: nameRef.current.value,
            Email: mailRef.current.value,
        }

        const valid = await validator.Excute();
        if (!valid) {
            return Promise.resolve()
                .finally(() => {
                    settingLoading(false);
            })
        }

        return httpPost("Authentication/PostUser", form)
            .then((res) => {
                settingDialog(<DialogInfo content={[res.data.messageRtr]} type={'info'} closeDialog={closeDialog} />);
                openDialog();
            }).catch((err) => {
                settingDialog(<DialogInfo content={[err.response.data.messageRtr]} type={'alert'} closeDialog={closeDialog} />);
                openDialog();
            }).finally(() => {
                settingLoading(false);
            })
    }

    const SearchUser = async () => {
        settingLoading(true)

        var url = "Authentication/GetSearchUser?phone=" + "9999"
        return httpGet(url)
            .then((res) => {
                Binding(res.data.data);
            }).catch((err) => {
                settingDialog(<DialogInfo content={[err.response.data.messageRtr]} type={'alert'} closeDialog={closeDialog} />);
                openDialog();
            }).finally(() => {
                settingLoading(false);
            })
    }

    const Binding = async (data) => {
        var fRef = formRef.current;
        var inputs = fRef.querySelectorAll('input');
        inputs.forEach((input, index) => {
            if(isUndefOrStrEmpty(input.dataset.prop))
                return true;

            input.value = data[input.dataset.prop];
        });
    }

    let validations = {
        name:
        {
            methods: {
                isNull: true,
            }
            , name: "Tên thành viên"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        },
        store:
        {
            methods: {
                isNull: true,
            }
            , name: "Tên cửa hàng"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        },
        mail:
        {
            methods: {
                isNull: true,
                isMail: true
            }
            , name: "Email"
            , messages: {
                isNull: "Xin hãy nhập.",
                isMail: "Email không hợp lệ."
            }
        }
    };

    const createValidator = () => {
        validations.name.element = nameRef.current;
        validations.store.element = storeRef.current;
        validations.mail.element = mailRef.current;
        validator = new Validator(validations, {
            name: nameRef
            , store: storeRef
            , mail: mailRef
        });
    };

    const regexNumber = (e) => {
        if (e.key.match("[0-9]") == null && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab") {
            e.preventDefault();
        }
    }

    useEffect(() => {
        SearchUser();
        return () => {

        }
    }, [])

    return (
        <>
            <div className="login-container">
                <div className="card">
                    <h4 className="headForm">Chỉnh sửa tài khoản</h4>
                    <div className="card-body">
                        <form ref={formRef}>
                            <div className="mb-3">
                                <Input type="tel" maxLength="10" inputRef={nameRef} dataProp={"name"} placeholder="Tên" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <Input type="tel" maxLength="10" inputRef={storeRef} dataProp={"cd_store"} placeholder="Cửa hàng" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <Input type="tel" inputRef={mailRef} dataProp={"email"} placeholder="Email" className="form-control" />
                            </div>
                            <div className="btnLogin">
                                <ButtonConfirm onClick={Register} className="btn btn-confirm" text="Xác nhận" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}