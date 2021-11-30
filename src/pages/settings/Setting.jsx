import './setting.css';
import SideBar from '../../components/sidebar/SideBar'

const Setting = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingUpdateTitle">更新账户</span>
                    <span className="settingDeleteTitle">删除账户</span>
                </div>
                <form className="settingsForm">
                    <label >简介图像</label>
                    <div className="settingsPP">
                        <img src="https://images.pexels.com/photos/5472528/pexels-photo-5472528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                    </div>
                    <label>用户名</label>
                    <input type="text" placeholder='sb...'/>
                    <label>邮箱</label>
                    <input type="email" placeholder='sb...@gmail.com' />
                    <label>密码</label>
                    <input type="password" />
                    <button className='settingsSubmit'>提交</button>
                </form>
            </div>
            <SideBar />
        </div>
    );
}

export default Setting;
