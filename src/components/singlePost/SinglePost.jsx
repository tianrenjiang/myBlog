import './singlepost.css';
export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" 
                    src="https://images.pexels.com/photos/3660527/pexels-photo-3660527.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt="" />
                <h1 className="singlePostTitle">Lorlor consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singleAuthor">Autor: <b>name</b> </span>
                    <span className="singleDate">Date: <b>1 hour ago</b> </span>
                </div>
                <p className="singlePostDesc">
                    友情因无所求而深刻，不管彼此是平衡还是不平衡。
                    诗人周涛描写过一种平衡的深刻:“两棵在夏天喧哗着聊了很久的树，彼此看见对方的.黄叶飘落于秋风，
                    它们沉静了片刻，互相道别说，‘明年夏天见’”楚楚则写过一种不平衡的深刻:“真想为你好好活着，
                    但我，疲惫已极，在我生命终结前，你没有抵达，只为看你之后一眼，我才飘落在这里。”
                    都是无所求的飘落，都是诗化的高贵。
                </p>
            </div> 
        </div>
    )
}
