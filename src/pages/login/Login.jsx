import './login.css';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="login">
            <span className="loginTitle">Login!</span>
            <form className="loginForm">
                <label>Email:</label>
                <input className="loginInput" type="email" placeholder='请输入您的邮箱！' />
                <label>Password:</label>
                <input className="loginInput" type="password" placeholder='请输入您的密码！' />
                <button className="loginButton">登录</button>
            </form>
            <button className="loginRegisterButton">
                <Link className='link' to='/register'>注册</Link>
            </button>
        </div>
    );
}

export default Login;
