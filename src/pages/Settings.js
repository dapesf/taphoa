import { Text} from '../component/UIComponents';
import { SettingServiceLogout } from '../services/SettingPageService';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../hooks/LoadingContext';
import "./css/Settings.css"

export function Settings() {
    const navigate = useNavigate();
    const {settingLoading} = useLoading();

    async function Logout() {
        settingLoading(true);
        await SettingServiceLogout();
        
        setTimeout(() => {
            settingLoading(false);
            navigate("/Login")
        }, 300);
    }

    return (
        <>
            <div className='setting-container'>
                <div className='setting-content'>
                    <Text text={"Đổi mật khẩu"} style={'setting-action'} />
                    <hr></hr>
                    <Text text={"Thông báo"} style={'setting-action'} />
                    <hr></hr>
                    <Text text={"Đổi số điện thoại"} style={'setting-action'} />
                    <hr></hr>
                    <Text text={"Đăng xuất"} style={'setting-action'} onClick={Logout} />
                    <hr></hr>
                </div>
            </div>
        </>
    )
}