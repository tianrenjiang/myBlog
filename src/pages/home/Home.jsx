import './home.css';
import {useState,useEffect} from 'react'
import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/SideBar';
import Posts from '../../components/posts/Posts';
import axios from 'axios'
import { useLocation } from 'react-router';


const Home = () => {
    const [posts,setPosts] =useState([]);
    const {search} = useLocation();
    
    
    useEffect(() =>{
        const fetchPosts=async() =>{
            const res = await axios.get('/posts'+search)
            // console.log(res.data)
            setPosts(res.data)
        }
        fetchPosts()
    },[search])
    return (
        <div>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <SideBar />
            </div>
        </div>
    );
}

export default Home;
