import Input from "../component/input/Input"
import Text from "../component/text"
import { ButtonConfirm } from "../component/button/Button"
import { Route } from "react-router-dom"
import { httpPost } from "../services/httpClient"

function Login(e)
{
    e.preventDefault();
    
    return httpPost("User/Login", {user: "admin", password: "P@ssw0rd"})
    .then((res)=>{
        //console.log(res);

    })
    .catch((err) => {
        console.log(err);
    });
}

export function LoginPage() {

    const style = {
        forgotPw: {
            textAligh: "right",
            fontSize: "13px",
        },
        headForm: {
            padding: '15px',
            fontWeight: "bold",
            color: "#62a162"
        }
    }

    const regexNumber = (e) => {
        // if (e.key.match("[0-9]") == null && e.key != "Backspace" && e.key != "Delete") {
        //     e.preventDefault();
        // }
    }

    return (
        <>
            <div className="col-12">
                <div className="card">
                    <h4 className="" style={style.headForm}>Hỗ trợ <br></br>Tiệm tạp hóa</h4>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <Input type="tel" maxLength="10" onKeyDown={regexNumber} placeholder="Số điện thoại" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <Input type="password" placeholder="Mật khẩu" className="form-control" />
                            </div>
                            <div className="mb-3" style={{ textAlign: "right" }}>
                                <a href="#" style={style.forgotPw}><Text text="Quên mật khẩu" /></a>
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