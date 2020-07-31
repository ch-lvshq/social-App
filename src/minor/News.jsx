import React,{Component} from 'react'
import { connect, Provider } from 'react-redux'
import{postinga}from '../redux/actions'
import './News.css'
import Oldnews from './News/Oldnews'
import Newnews from './News/Newnews'
import {store} from '../redux/stores'
import {Route,BrowserRouter,Switch,NavLink,Redirect}from 'react-router-dom'


class News extends Component{

    render(){
        return(
            <div>
                
            <div className='news-top'>
                
            <BrowserRouter>
            <div className='news-contorl'>
                <NavLink to='/news/new'  className='Myspace-nav'>未读消息</NavLink>
                <NavLink to='/news/old' className='Myspace-nav'>历史消息</NavLink>
                <Redirect from='/news' to='/news/new'/>
            </div>              
                <Provider store={store}>
                 <Switch>      
                     <Route path='/news/new' component={Newnews} exact/>
                     <Route path='/news/old' component={Oldnews} exact/>
                 </Switch>
                </Provider></BrowserRouter>
            </div></div>
        )
    }
}
export default connect(
    status=>({posting:status.posting,name:status.name}),{postinga}
)(News)