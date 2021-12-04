import './setting.css';
import SideBar from '../../components/sidebar/SideBar'
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios'

const Setting = () => {
    const {user,dispatch } = useContext(Context)
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const PF = "http://10.15.0.34:5000/images/"
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({
            type: "UPDATE_START"
        });
        const updateUser = {
            userId: user._id,
            username,
            password,
            email
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) {}
        }
        try {
            const res = await axios.put("/users/" + user._id, updateUser);
            setSuccess(true);
            dispatch({
                 type: "UPDATE_SUCCESS",
                 payload: res.data
             });
        } catch (err) {
            dispatch({
                type: "UPDATE_FAILURE"
            });
        }
    };

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingUpdateTitle">更新账户</span>
                    <span className="settingDeleteTitle">删除账户</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label >简介图像</label>
                    <div className="settingsPP">
                        <img src={file ? URL.createObjectURL(file) : user.profilePic} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input 
                        type="file" 
                        id="fileInput" 
                        style={{ display: 'none' }} 
                        onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>用户名</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                    <label>邮箱</label>
                    <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                    <label>密码</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)}/>
                    <button className='settingsSubmit' type="submit">提交</button>
                     {success && (
                        <span
                        style={{ color: "green", textAlign: "center", marginTop: "20px" }}
                        >
                        Profile has been updated...
                        </span>
                    )}
                </form>
            </div>
            <SideBar />
        </div>
    );
}

export default Setting;
