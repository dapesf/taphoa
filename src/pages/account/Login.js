import { Text, Input, ButtonConfirm } from "../../component/UIComponents"
import { useNavigate } from "react-router-dom"
import { httpPost } from "../../services/httpClient"
import { useLoading } from "../../hooks/LoadingContext"
import "./Login.css"
import { useRef } from "react"

export function LoginPage() {
    const navigate = useNavigate();
    const userRef = useRef(null);
    const passWordRef = useRef(null);
    const { settingLoading } = useLoading();

    const regexNumber = (e) => {
        if (e.key.match("[0-9]") == null && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab") {
            e.preventDefault();
        }
    }

    const Login = (e) => {
        e.preventDefault();
        settingLoading(true)
        var form = {
            cd_phone_number: userRef.current.value,
            password: passWordRef.current.value
        }
        
        return httpPost("Authentication/Login", form)
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                navigate('/HomePage');
            })
            .catch((err) => {
                navigate('/Login');
            }).finally(()=>{
                settingLoading(false);
            })
    }

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