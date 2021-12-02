const Reducer = (state, action) =>{
    switch(action.type){
        case "LOGIN_START":
            return {
                user:null,
                isFetching:true,  //表示正在获取数据
                error:false,
            };
        case "LOGIN_SUCCESS":
            return {
                user:action.payload,
                isFetching:false,
                error:false,
            };
        case "LOGIN_FAILURE":
            return {
                user:null,
                isFetching:false,
                error:true,
            }
        default:
            return state;  //不做任何事，只是返回当前状态
    }
}
export default Reducer;