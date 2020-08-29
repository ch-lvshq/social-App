import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import {NavLink,Route,Switch,BrowserRouter,Redirect} from 'react-router-dom'
import Post from '../minor/Post'
import Posting from '../minor/Posting'
import News from '../minor/News'
import Myspace from '../minor/Myspace'
import Node from '../minor/Node'
import {Provider,connect} from 'react-redux'
import {store}from '../redux/stores'
import {postinga} from '../redux/actions'



 class App extends Component{
    componentDidMount(){
        fetch('./post.json')
.then(res=>res.json()).then(date=>this.props.postinga(date.post)
    ).catch(error=>console.log(error))
    }
 
    node=()=>{
        let a=window.confirm('确定跳转吗？返回App将会重新获取post数据')
        if(a===true){
            ReactDOM.render(<Node/>,document.getElementById('main'))
        }
        if(a===false){
            return false
        }
    }
    render(){
        return(<div className='App-header'>
                <div>
                    <span className='App-node' onClick={this.node}>开发者日记</span>
                </div>
        
            <div className='App-top'>
                
                <BrowserRouter>
                <div className='App-main'>
             <Switch> <Provider store={store}>
                 <Route path='/posting' component={Posting} exact/> 
                 <Route path='/myspace' component={Myspace}  exact/>
                 <Route path='/post' component={Post}  exact/>
                 <Route path='/news' component={News} exact/>
                <Redirect from='/' to='/posting'/>
              </Provider> 
             </Switch>
                </div>
                <nav>
                    <ul className='App-ul'><li className='App-li'><NavLink to='/posting' className='App-nav' >帖子</NavLink></li>
                    <li className='App-li'><NavLink to='/post' className='App-nav'>发帖</NavLink></li>
                    <li className='App-li'><NavLink to='/news' className='App-nav'>消息</NavLink></li>
                    <li className='App-li'><NavLink to='/myspace' className='App-nav'>我的</NavLink></li></ul>
                </nav></BrowserRouter>
            </div></div>
        )
    }
}

export default connect(
    state=>({name:state.name,nameword:state.nameword,posting:state.posting}),{postinga}
)(App)