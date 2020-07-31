import React,{Component} from 'react'
import './Myspace.css'
import {Route,BrowserRouter,Switch,NavLink}from 'react-router-dom'
import Mycollect from './Myspace/Mycollect'
import Mycomment from './Myspace/Mycomment'
import Myposting from './Myspace/Myposting'
import Mypraise from './Myspace/Mypraise'
import Edit from './Myspace/Edit'
import { connect,Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import {store} from '../redux/stores'



 class Myspace extends Component{
    edit=()=>{
        ReactDOM.render(<Provider store={store}>
            <Edit  />
            </Provider>,document.getElementById('edit'))
    }
    render(){
        return(
            <div className='Myspace'>
                <div>
                    <header className='Myspace-header'>
                        <div>
                             <div className='Myspace-son1'>
                            <img src={require('../img/a.jpg')} alt="头像" style={{height:'100px',width:'100px',borderRadius:'100%'}}/>
                            </div>
                        <div className='Myspace-son2'>{this.props.name}</div>
                        <div className='Myspace-son3'>{this.props.nameword}</div>
                        </div>
                       <div>
                           <button onClick={this.edit}>编辑资料</button>
                       </div>
                       <div id='edit'>

                       </div>
                    </header>
                </div>
               
                    <main className='Myspace-main'>
                            <BrowserRouter>
                            <div className='Myspace-mainson'>
                            <NavLink to='/myspace/myposting'  className='Myspace-nav'>我的帖子</NavLink>
                            <NavLink to='/myspace/mycomment' className='Myspace-nav'>我的评论</NavLink>
                            <NavLink to='/myspace/mycollect' className='Myspace-nav'>我的收藏</NavLink>
                            <NavLink to='/myspace/mypraise' className='Myspace-nav'>我赞过的</NavLink>
                            </div>
                            <div className='Myspace-mainsontwo'>
                            <Switch>
                                <Provider store={store}>
                                <Route path='/myspace/myposting' component={Myposting} exact/>
                                <Route path='/myspace/mycomment' component={Mycomment} exact/>
                                <Route path='/myspace/mycollect' component={Mycollect} exact/>
                                <Route path='/myspace/mypraise' component={ Mypraise} exact/>
                                </Provider>
                            </Switch>
                            </div>
                            </BrowserRouter>
                            
                       
                    </main>
               
            </div>
        )
    }
}
export default connect(
    state=>({name:state.name,nameword:state.nameword})
)(Myspace)