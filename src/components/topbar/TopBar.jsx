import React from 'react'
import { Link } from "react-router-dom";
import './topbar.css'
import { Context } from '../../context/Context';
import  { useContext } from 'react';

export default function TopBar() {
    const { user,dispatch} = useContext(Context);
    // const PF = "http://10.15.0.34:5000/images/"
    const handleLogout = ()=>{
        dispatch({type:"LOGOUT"})
    }
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-qq"></i>
                <i className="topIcon fab fa-weixin"></i>
                <i className="topIcon fab fa-weibo"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to='/'>ABOUT</Link>
                    </li>
                    <li className="topListItem"><Link className='link' to='/'>CONTACT</Link></li>
                    <li className="topListItem"><Link className='link' to='/write'>WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user &&  'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                       <Link className='link' to='/settings'> 
                       <img
                            className='topImage' 
                            src={user.profilePic}
                            alt="头像" /> 
                        </Link>    
                    ):(
                        <ul className='topList'>
                        <li className='topListItem'><Link className='link' to='/login'>Login</Link></li>
                        <li className='topListItem'><Link className='link' to='/register'>Register</Link></li>
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
