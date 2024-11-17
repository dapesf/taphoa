import Input from "../component/input/Input"
import Text from "../component/text"
import { Button, ButtonConfirm } from "../component/button/Button"

export function Login() {

    const style = {
        forgotPw: {
            textAligh: "right",
            fontSize: "13px",
        },
        headForm : {
            padding: '15px',
            fontWeight: "bold",
            color: "#62a162"
        }
    }

    const regexNumber = (e) => {
        if (e.key.match("[0-9]") == null && e.key != "Backspace" && e.key != "Delete") {
            e.preventDefault();
        }
    }

    return (
        <>
            <div class="col-12">
                <div class="card">
                    <h4 class="" style={style.headForm}>Hỗ trợ <br></br>Tiệm tạp hóa</h4>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <Input type="tel" maxLength="10" onKeyDown={regexNumber} placeholder="Số điện thoại" className="form-control" />
                            </div>
                            <div class="mb-3">
                                <Input type="password" placeholder="Mật khẩu" className="form-control" />
                            </div>
                            <div class="mb-3" style={{ textAlign: "right" }}>
                                <a href="#" style={style.forgotPw}><Text text="Quên mật khẩu" /></a>
                            </div>
                            <div>
                                <ButtonConfirm className="btn btn-confirm" text="Đăng nhập" />
                            </div>
                        </form>
                    </div>

                    <div class="card-body">
                        <div class="mb-3">
                            <Text text="Bạn chưa có tài khoản?" />
                        </div>
                        <div class="mb-3">
                            <a href="#"><Text text="Đăng ký" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}