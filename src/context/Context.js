import { useEffect } from "react";
import { createContext,useReducer} from "react";
// 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，
// 这个组件会从组件树中离自身最近的那个匹配的
//  Provider 中读取到当前的 context 值。
import Reducer from './Reducer'
const INITIAL_STATE ={
    user: JSON.parse(localStorage.getItem("user")) || null,
    //如果本地存储中有数据就使用本地存储中的数据，否则就是用null
    isFetching:false,
    error:false,
};

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    //useReducer返回一个状态state和dispatch
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user)) //将一个 JavaScript 对象或值转换为 JSON 字符串
    },[state])
    return (
        <Context.Provider   //这里竟然写错了，还是别偷懒了
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    )
}
