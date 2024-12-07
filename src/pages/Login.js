import { Text, Input, ButtonConfirm } from "../component/UIComponents"
import { useNavigate } from "react-router-dom"
import { httpPost } from "../services/httpClient"
import style from "./css/Login.module.css"
import { useState, useRef } from "react"

export function LoginPage() {
    const navigate = useNavigate();
    const userRef = useRef(null);
    const passWordRef = useRef(null);

    const regexNumber = (e) => {
        if (e.key.match("[0-9]") == null && e.key != "Backspace" && e.key != "Delete") {
            e.preventDefault();
        }
    }

    const Login = (e) => {
        e.preventDefault();
        var form = {
            user: userRef.current.value,
            password: passWordRef.current.value
        }

        return httpPost("User/Login", form)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                navigate('/Login');
            })
            .catch((err) => {
                console.log(err);
                navigate('/HomePage');
            });
    }

    return (
        <>
            <div className="col-12">
                <div className="card">
                    <h4 className={style["headForm"]}>Hỗ trợ <br></br>Tiệm tạp hóa</h4>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <Input type="tel" maxLength="10" inputRef={userRef} onKeyDown={regexNumber} placeholder="Số điện thoại" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <Input type="password" inputRef={passWordRef} placeholder="Mật khẩu" className="form-control" />
                            </div>
                            <div className="mb-3" style={{ textAlign: "right" }}>
                                <a href="#" className={style["forgotPw"]}><Text text="Quên mật khẩu" /></a>
                            </div>
                            <div>
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