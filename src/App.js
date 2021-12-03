import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import TopBar from './components/topbar/TopBar'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import Home from './pages/home/Home'
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { Context } from './context/Context';
function App() {
  const {user}= useContext(Context);
  // console.log(user);
  //如果浏览器中缓存了登录信息就会出现
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        {user?<Route path="/" element={<Home />}/>:<Route path="/" element={<Login />}/>}
        {user? <Route path="/register" element={<Register />}/>:<Route path="/register" element={<Register />}/>}
        {user? <Route path="/login" element={<Login />}/>:<Route path="/login" element={<Login />}/>}
        {user?<Route path="/write" element={<Write />}/>:<Route path="/write" element={<Login />}/>}
        {user?<Route path="/settings" element={<Setting />}/>:<Route path="/settings" element={<Login />}/>}
        <Route path="/post/:postId" element={<Single />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
