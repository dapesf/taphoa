import { useRef } from "react"
import { Text, Input, ButtonConfirm } from "../../component/UIComponents"
import { useNavigate, Link } from "react-router-dom"
import { httpPost } from "../../services/httpClient"
import { useLoading } from "../../hooks/LoadingContext"
import { DialogInfo } from "../dialogs/DialogInfo.js"
import { useDialog } from "../../hooks/DialogContext.js"
import { Validator } from "../../common/validator.js"
import { DialogChgPw } from "../dialogs/DialogChgPw.js"

export function SignUpPage() {

    const phoneRef = useRef(null);
    const nameRef = useRef(null);
    const storeRef = useRef(null);
    const pwRef = useRef(null);
    const mailRef = useRef(null);

    let validations = {
        phone:
        {
            methods: {
                isNumeric: true,
                isNull: true,
                maxLength: 10
            }
            , name: "Số điện thoại"
            , messages: {
                isNumeric: "Chỉ nhập số.",
                isNull: "Xin hãy nhập.",
                maxLength: "Nhập vượt số kí tự cho phép."
            }
        },
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
        password:
        {
            methods: {
                isNull: true,
            }
            , name: "Tên thành viên"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        },
        mail:
        {
            methods: {
                isNull: true,
            }
            , name: "Email"
            , messages: {
                isNull: "Xin hãy nhập."
            }
        }
    };

    const regexNumber = (e) => {
        if (e.key.match("[0-9]") == null && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab") {
            e.preventDefault();
        }
    }

    return (
        <>
            <div className="login-container">
                <div className="card">
                    <Link to="/LoginPage">
                        <h5>Quay lại</h5>
                    </Link>
                    <h4 className="headForm">Đăng ký thành viên</h4>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <Input type="tel" maxLength="10" inputRef={phoneRef} onKeyDown={regexNumber} placeholder="Số điện thoại" className="form-control" />
                            </div>
                            <div className="mb-3" style={{ textAlign: "right" }}>
                                <Input type="tel" maxLength="10" inputRef={nameRef} placeholder="Tên" className="form-control" />
                            </div>
                            <div className="mb-3" style={{ textAlign: "right" }}>
                                <Input type="tel" maxLength="10" inputRef={storeRef} placeholder="Cửa hàng" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <Input type="text" id="txtPassword" inputRef={pwRef} placeholder="Mật khẩu" className="form-control" />
                            </div>
                            <div className="mb-3" style={{ textAlign: "right" }}>
                                <Input type="tel" maxLength="10" inputRef={mailRef} placeholder="Email" className="form-control" />
                            </div>
                            <div className="btnLogin">
                                <ButtonConfirm onClick={() => { }} className="btn btn-confirm" text="Đăng ký" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}