import './register.css';
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className="register">
            <span className="registerTitle">Register!</span>
            <form className="registerForm">
                <label>Username:</label>
                <input className="registerInput" type="text" placeholder='请输入您的用户名！' />
                <label>Email:</label>
                <input className="registerInput" type="email" placeholder='请输入您的邮箱！' />
                <label>Password:</label>
                <input className="registerInput" type="password" placeholder='请输入您的密码！' />
                <button className="registerButton">注册</button>
            </form>
            <button className="registerLoginButton">
                <Link className='link' to='/login'>登录</Link>
            </button>
        </div>
    );
}

export default Register;
