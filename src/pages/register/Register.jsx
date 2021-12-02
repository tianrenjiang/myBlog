import './register.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
const Register = () => {
    const[username,setUsername]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError]=useState(false);
    const handleSubmit= async (e) => {
        e.preventDefault();
        setError(false)
        try{
          const res = await axios.post("/auth/register",{
            username,
            email,
            password,
        });
        res.data && window.location.replace("/login")  
        console.log(res)
        }catch(err){
            setError(true)
        }
    }
    return (
        <div className="register">
            <span className="registerTitle">Register!</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                className="registerInput" 
                type="text" 
                placeholder='请输入您的用户名！'
                onChange={e=>setUsername(e.target.value)}
                />
                <label>Email:</label>
                <input 
                className="registerInput" 
                type="email" 
                placeholder='请输入您的邮箱！' 
                onChange={e=>setEmail(e.target.value)}    
                />
                <label>Password:</label>
                <input 
                className="registerInput" 
                type="password" 
                placeholder='请输入您的密码！' 
                onChange={e => setPassword(e.target.value)}
                />
                <button className="registerButton" type="submit">注册</button>
            </form>
            <button className="registerLoginButton">
                <Link className='link' to='/login'>登录</Link>
            </button>
            {error && <span style={{color: 'red',marginTop:'10px'}}>Oho,出错了。。。</span>}
        </div>
    );
}

export default Register;
