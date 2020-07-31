import React,{Component} from 'react'


export default class Login extends Component{

    render(){
        return(
            <div>
                <input type="text" placeholder='请输入用户名'/><br/>
                <input type='password' placeholder='请输入密码'/><br/>
                <button onClick={()=>window.open('/App','_self')}>登陆</button>
            </div>
        )
    }
}