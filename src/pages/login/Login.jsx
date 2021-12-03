import './login.css';
import { Link } from "react-router-dom";
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios'
const Login = () => {

    const userRef= useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching}= useContext(Context)

    const handleSubmit=async (e)=>{
        e.preventDefault();
        dispatch({ type:"LOGIN_START"});
        try{
            const res = await axios.post('/auth/login',{
                username:userRef.current.value,
                password:passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS",payload:res.data })  //如果成功进入success状态，改变context里面的数据
        }catch(err){
            dispatch({ type: "LOGIN_FAILURE"})  //如果失败进入failure状态，改变数据
        }
    }
    
    return (
        <div className="login">
            <span className="loginTitle">Login!</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>username:</label>
                <input 
                    className="loginInput" 
                    type="text" 
                    placeholder='请输入您的用户名！'
                    ref={userRef} />
                <label>Password:</label>
                <input 
                    className="loginInput" 
                    type="password" 
                    placeholder='请输入您的密码！'
                    ref={passwordRef} />
                <button className="loginButton" type="submit" disabled={isFetching}>登录</button>
            </form>
            <button className="loginRegisterButton">
                <Link className='link' to='/register'>注册</Link>
            </button>
        </div>
    );
}

export default Login;
