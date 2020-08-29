import React,{Component} from 'react'
import { connect } from 'react-redux'
import {postinga}from '../../redux/actions'
 class Mycollect extends Component{
     constructor(props){
         super(props)
         this.state={
             mysc:[]
         }
     }
     UNSAFE_componentWillMount(){
        let a=this.props.posting.slice(0)
        let mysc=[]
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a[i].sc.length; j++) {
            if(a[i].sc[j]===this.props.name){
                mysc.push(a[i])
                this.setState({
                    mysc
                })
            }
            }
        }
     }
     qxsc=(e)=>{
        let a=e.target.parentNode.parentNode.getAttribute('name')
        let b=this.state.mysc.slice(0)
        b.splice(a,1)
        this.setState({
            mysc:b
        })
        let c=this.props.posting.slice(0)
        let d=[]//用于储存收藏的帖子的位置
        c.forEach((value,item)=>{
              if(value.sc.includes(this.props.name)){
                   d.push(item)
              }
         })
         let f=c[d[a]].sc.indexOf(this.props.name)//确定收藏人位置
         c[d[a]].sc.splice(f,1)
      this.props.postinga(c)
       }
    render(){
            return(
            <div>
                {this.state.mysc.map((value,item)=>(
                    <div key={item} className='Posting-post' name={item}>
                    <div>{value.name}</div>
                    <div>{value.time}</div>
                    <div className='Posting-value'>{value.posting}</div>
                    <nav className='Posting-nav'>
                        <span>评论({this.state.mysc[item].plvalue.length})</span>
                        <span>点赞({this.state.mysc[item].dz.length})</span>
                        <span>收藏({this.state.mysc[item].sc.length})</span>
                        <span onClick={this.qxsc} className='Posting-nav-a'>取消收藏</span>
                    </nav>
                   </div>
                ))}
            </div>
        )
    }
}

export default connect(
    state=>({name:state.name,posting:state.posting}),{postinga}
)(Mycollect)