export const LoginStart=(userCredentials) =>({      //用户资格
    type:'LOGIN_START'    //action 的名字
})  //第一个进程，等待成功或者失败的结果

export const LoginSuccess=(user) =>({
    type:'LOGIN_SUCCESS',
    payload:user  //使用user来更新状态
})

export const LoginFailure=() =>({
    type:'LOGIN_FAILURE'
})

export const Logout = () => ({
    type: 'LOGOUT',
})


//actions是需要用来调度的，使用reducer来进行调度