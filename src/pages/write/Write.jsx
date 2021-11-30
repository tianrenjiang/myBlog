import './write.css';

const Write = () => {
    return (
        <div className="write">
            <img src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}}/>
                    <input type="text" placeholder="标题" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="请输入你的故事吧。。。" type="text" className="writeInput writeText">
                    </textarea>
                </div>
                <button className="writeSubmit">提交</button>
            </form>
        </div>
    );
}

export default Write;
