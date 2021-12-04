import './singlepost.css';
import { useLocation } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
export default function SinglePost() {
    const PF = "http://10.15.0.34:5000/images/"
    const location= useLocation();
    const path=location.pathname.split('/')[2]; //从location中找到Id
    const [post,setPost]=useState({})
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    const handleDelete = async()=>{
        try{
            await axios.delete(`/posts/${post._id}`,{ //axios的删除方法
                data:{username:user.username},
            });
            setUpdateMode(false)
        }catch(err){

        }
        
    }
    const handleUpdate = async()=>{
        try {
            await axios.put(`/posts/${post._id}`, { 
                    username: user.username,
                    title,
                    desc,
                
            });
            window.location.reload();
        } catch (err) {

        }
    }
    useEffect(()=>{
        const getPost = async() => {
            const res = await axios.get('/posts/' + path)
            // console.log(res)  获取数据
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    },[path])
    
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                   <img className="singlePostImg" 
                    src={PF + post.photo}
                    alt="" /> 
                )}
                {
                    updateMode? <input type="text" value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                        className = "singlePostTitleInput"
                        autoFocus
                    />
                    : (
                        <h1 className="singlePostTitle">{title}
                            {
                                post.username===user?.username&&
                                <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit"
                                    onClick={()=>setUpdateMode(true)}></i>
                                <i className="singlePostIcon fas fa-trash"
                                    onClick={handleDelete}></i>
                            </div>
                            }
                            
                        </h1>)
                        }
                
                
                <div className="singlePostInfo">
                    <span className="singleAuthor">Autor: 
                        <Link className='link' to={ `/?user=${post.username}`}><b>{post.username}</b> </Link></span>
                    <span className="singleDate">Date: <b>{new Date(post.createdAt).toDateString()}</b> </span>
                </div>

                {
                    updateMode ? (< textarea className = 'singlePostDescInput' value={desc}
                                    onChange={(e)=>setDesc(e.target.value) } />)
                :(<p className="singlePostDesc">
                    {desc}
                </p>
                )}
                {
                    updateMode&&<button className="singlePostButton" onClick={handleUpdate}>提交更新</button>
                }
                
                
            </div> 
        </div>
    )
}
