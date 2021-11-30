import './sidebar.css';

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    src="https://images.pexels.com/photos/10339349/pexels-photo-10339349.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    alt="" />
                <p>在没有学习前端设计，在没有自己博客之前，我的兴趣爱好很多，比如阅读，看电影，爬山等。这些是生活当中自己排遣娱乐的一种方式。明明觉得自己很喜欢，但有时候还是会半途而废，其实，有兴趣只是起点，保有持久兴趣才是关键。</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">LIFE</li>
                    <li className="sidebarListItem">MUSIC</li>
                    <li className="sidebarListItem">PLAYING</li>
                    <li className="sidebarListItem">READING</li>
                    <li className="sidebarListItem">PETS</li>
                    <li className="sidebarListItem">MOVIES</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-qq"></i>
                    <i className="sidebarIcon fab fa-weixin"></i>
                    <i className="sidebarIcon fab fa-weibo"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}
