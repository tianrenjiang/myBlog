import { createContext,useReducer} from "react";
// 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，
// 这个组件会从组件树中离自身最近的那个匹配的
//  Provider 中读取到当前的 context 值。
import Reducer from './Reducer'
const INITIAL_STATE ={
    user:null,
    isFetching:false,
    error:false,
};

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    return (
        <ContextProvider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </ContextProvider>
    )
}
