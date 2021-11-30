import './post.css';

const Post = () => {
    return (
        <div className="post">
            <img className="postImg" 
                src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem, ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p>静静的心里，都有一道最美丽的风景。尽管世事繁杂，此心依然，情怀依然；尽管颠簸流离，脚步依然，追求依然；尽管岁月沧桑，世界依然，生命依然。守住最美风景，成为一种风度，宁静而致远；守住最美风景，成为一种境界，悠然而豁达；守住最美风景，成为一种睿智，淡定而从容。带着前世的印记，心怀纯净，身披霞带，踏一水清盈，今生，寻美好而来。</p>
            </div>
        </div>
    );
}

export default Post;
