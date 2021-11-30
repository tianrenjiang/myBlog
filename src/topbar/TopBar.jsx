import React from 'react'
import './topbar.css'

export default function TopBar() {
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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className='topImage' 
                    src="https://images.pexels.com/photos/10334932/pexels-photo-10334932.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="一张图" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
