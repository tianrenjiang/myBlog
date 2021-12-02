import './singlepost.css';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
export default function SinglePost() {
    const location= useLocation();
    const path=location.pathname.split('/')[2]; //从location中找到Id
    const [post,setPost]=useState({})
    useEffect(()=>{
        const getPost = async() => {
            const res = await axios.get('/posts/' + path)
            // console.log(res)  获取数据
            setPost(res.data)
        }
        getPost()
    },[path])
    
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                   <img className="singlePostImg" 
                    src={post.photo}
                    alt="" /> 
                )}
                
                <h1 className="singlePostTitle">{post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singleAuthor">Autor: 
                        <Link className='link' to={ `/?user=${post.username}`}><b>{post.username}</b> </Link></span>
                    <span className="singleDate">Date: <b>{new Date(post.createdAt).toDateString()}</b> </span>
                </div>
                <p className="singlePostDesc">
                    {post.desc}
                </p>
            </div> 
        </div>
    )
}
