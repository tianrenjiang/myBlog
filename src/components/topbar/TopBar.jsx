import React from 'react'
import { Link } from "react-router-dom";
import './topbar.css'

export default function TopBar() {
    const user =false;
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
                    <li className="topListItem">
                        {user &&  'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                       <img
                        className='topImage' 
                        src='https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        alt="头像" /> 
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
