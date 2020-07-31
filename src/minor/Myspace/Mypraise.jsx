import React,{Component} from 'react'
import { connect } from 'react-redux'
import {postinga}from '../../redux/actions'
 class Mypraise extends Component{
     constructor(props){
         super(props)
         this.state={
             mydz:[]
         }
     }
     UNSAFE_componentWillMount(){
        let a=this.props.posting.slice(0)
        let mydz=[]
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a[i].dz.length; j++) {
            if(a[i].dz[j]===this.props.name){
                mydz.push(a[i])
                this.setState({
                    mydz
                })
            }
            }
        }
     }
     qxdz=(e)=>{
      let a=e.target.parentNode.parentNode.getAttribute('name')
      let b=this.state.mydz.slice(0)
      b.splice(a,1)
      this.setState({
          mydz:b
      })
      let c=this.props.posting.slice(0)
      for (let i = 0; i < c.length; i++) {
        for (let j = 0; j < c[i].dz.length; j++) {
        if(c[i].dz[j]===this.props.name){
            c[i].dz.splice(j,1)
        }
        }
    }
    this.props.postinga(c)
     }
    render(){
            return(
            <div>
                {this.state.mydz.map((value,item)=>(
                    <div key={item} className='Posting-post' name={item}>
                    <div>{value.name}</div>
                    <div>{value.time}</div>
                    <div className='Posting-value'>{value.posting}</div>
                    <nav className='Posting-nav'>
                        <span>评论({this.state.mydz[item].plvalue.length})</span>
                        <span>点赞({this.state.mydz[item].dz.length})</span>
                        <span>收藏({this.state.mydz[item].sc.length})</span>
                        <span onClick={this.qxdz} className='Posting-nav-a'>取消点赞</span>
                    </nav>
                   </div>
                ))}
            </div>
        )
    }
}

export default connect(
    state=>({name:state.name,posting:state.posting}),{postinga}
)(Mypraise)