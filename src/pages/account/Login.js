import { Text, Input, ButtonConfirm } from "../../component/UIComponents"
import { useNavigate } from "react-router-dom"
import { httpPost } from "../../services/httpClient"
import { useLoading } from "../../hooks/LoadingContext"
import { Validator } from "../../common/validator.js";
import "./Login.css"
import { useRef, useEffect } from "react"

export function LoginPage() {
    let validator;
    const navigate = useNavigate();
    const userRef = useRef(null);
    const passWordRef = useRef(null);
    const { settingLoading } = useLoading();
    let validations = {
        phone:
        {
            methods: {
                isNumeric: true,
                isTest: () => { }
            }
            , name: "Phone"
            , messages: {
                isNumeric: "is Numeric message"
            }
        },
        password:
        {
            methods: {
                isTest: () => { }
            }
            , name: "Password"
            , messages: {
                isTest: "is Test message"
            }
        }
    };

    const regexNumber = (e) => {
        if (e.key.match("[0-9]") == null && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab") {
            e.preventDefault();
        }
    }

    const Login = async (e) => {

        e.preventDefault();
        settingLoading(true)

        var form = {
            cd_phone_number: userRef.current.value,
            password: passWordRef.current.value
        }

        await validator.excute()
            .then((res) => {
                //return httpPost("Authentication/Login", form)
               return Promise.resolve("")
                    .then((res) => {
                        localStorage.setItem('token', res.data.token);
                        navigate('/HomePage');
                    })
                    .catch((err) => {
                        navigate('/Login');
                    }).finally(() => {
                        settingLoading(false);
                    })
            })
    }

    const createValidator = () => {
        validations.phone.element = userRef.current;
        validations.password.element = passWordRef.current;
        validator = new Validator(validations, { phone: userRef, password: passWordRef });
    };

    useEffect(() => {
        createValidator();
        return () => { }
    })

    return (
        <>
            <div className="login-container">
                <div className="card">
                    <h4 className="headForm">Hỗ trợ <br></br>Tiệm tạp hóa</h4>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <Input type="tel" maxLength="10" inputRef={userRef} onKeyDown={regexNumber} placeholder="Số điện thoại" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <Input type="text" id="txtPassword" inputRef={passWordRef} placeholder="Mật khẩu" className="form-control" />
                            </div>
                            <div className="mb-3" style={{ textAlign: "right" }}>
                                <a href="#" className="forgotPw"><Text text="Quên mật khẩu" /></a>
                            </div>
                            <div className="btnLogin">
                                <ButtonConfirm onClick={Login} className="btn btn-confirm" text="Đăng nhập" />
                            </div>
                        </form>
                    </div>

                    <div className="card-body">
                        <div className="mb-3">
                            <Text text="Bạn chưa có tài khoản?" />
                        </div>
                        <div className="mb-3">
                            <a href="#"><Text text="Đăng ký" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}