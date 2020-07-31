import React,{Component}from 'react'
import ReactDOM from 'react-dom'
import App from '../main/App'
import './Node.css'
import {Provider} from 'react-redux'
import {store}from '../redux/stores'



export default class Node extends Component{
    app=()=>{
       ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('main'))
    }
    render(){
        return(
            <div onClick={this.app} title='点击返回' className='Node-top'>
                <p>7月19日</p>
                <p>1.0版本完成，基本的功能有：发帖，评论，回复，点赞，收藏，以及对应的控制删除操作 <br/>
                   用户可以在我的里任意的更换姓名，由于是纯前端开发所以页面不能保存用户的所有操作，<br/>
                   谨慎刷新。</p>
                <p>本项目主要使用react框架开发，使用了react-route，redux，react-redux，由于页面<br/>
                   UI没有使用任何UI库页面显示或许略显简陋，请谅解。</p>
                <p>后续会继续更新该项目，主要的更新方向是一些方便用户的功能、对state数据进行整合、<br/>
                   加入AJAX来模拟前后端交互、页面美观性。</p>
            </div>
        )
    }
}