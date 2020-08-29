import React,{Component} from 'react'
import { connect, Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './Posting.css'
import {postinga} from '../redux/actions'
import PostingPl from './Posting/PostingPl'
import {store }from '../redux/stores'
class Posting extends Component{
    nava=(e)=>{
        let b=e.target.parentNode.parentNode.getAttribute('name')
       ReactDOM.render(
           <Provider store={store}>
           <PostingPl num={b}/></Provider>
           ,document.getElementsByClassName('Posting-nav-a-active')[b]
        )
    }
    navb=(e)=>{
        let a=this.props.posting.slice(0)
        let b=e.target.parentNode.parentNode.getAttribute('name')
        let c=a[b].dz
            c.push(this.props.name)
        let d=[...new Set(c)]
        a[b].dz=d
        this.props.postinga(a)
    }
    navc=(e)=>{
        let a=this.props.posting.slice(0)
        let b=e.target.parentNode.parentNode.getAttribute('name')
        let c=a[b].sc
        c.push(this.props.name)
    let d=[...new Set(c)]
    a[b].sc=d
    this.props.postinga(a)
    }
    render(){
        return(
            <div className=' Posting-top'>
               {this.props.posting.map((value,item)=>(
                   <div key={item} className='Posting-post' name={item}>
                       <div>{value.name}</div>
                       <div>{value.time}</div>
                       <div className='Posting-value'>{value.posting}</div>
                       <nav className='Posting-nav'>
                           <span className='Posting-nav-a' onClick={this.nava}>评论({this.props.posting[item].plvalue.length})</span>
                           <span className='Posting-nav-a' onClick={this.navb} >点赞({this.props.posting[item].dz.length})</span>
                           <span className='Posting-nav-a' onClick={this.navc}>收藏({this.props.posting[item].sc.length})</span>
                       </nav>
                       <div className='Posting-nav-a-active'></div>
                      </div>
                        
               ))}
             </div>
        )
    }
}
export default connect(
    state=>({name:state.name,nameword:state.nameword,posting:state.posting}),{postinga}
)(Posting)