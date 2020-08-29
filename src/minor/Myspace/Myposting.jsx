import React,{Component} from 'react'
import { connect } from 'react-redux'
import {postinga} from '../../redux/actions'

class Myposting extends Component{
    constructor(props){
        super(props)
        this.state={
            mypost:[]
        }
    }
    componentDidMount(){
       let a= this.props.name
       let b= this.props.posting.filter(
            (value)=>(value.name===a)
        )
         this.setState({
             mypost:b
         })
    }
    delete=(e)=>{
        let a=e.target.parentNode.parentNode.getAttribute('name')
        let b=this.state.mypost.slice(0)
        let c=b.splice(a,1)
        let d= this.props.name
        let f=this.props.posting.slice(0)
        f.forEach((value,item)=>{
            if(value.name===d&&value.time===c[0].time){f.splice(item,1)}
        })
        this.setState({
            mypost:b
        })
        this.props.postinga(f)
    }
    render(){
        return(
            <div className='Myposting'>
                {
                    this.state.mypost.map((value,item)=>(
                        <div key={item} className='Posting-post' name={item}>
                       
                        <div>{value.time}</div>
                        <div className='Posting-value'>{value.posting}</div>
                        <nav>
                            <span>评论({this.state.mypost[item].plvalue.length})</span>
                            <span>点赞({this.state.mypost[item].dz.length})</span>
                            <span>收藏({this.state.mypost[item].sc.length})</span>
                        </nav>
                        <div> 
                               <button onClick={this.delete}>delete</button>
                        </div>
                       </div>
                         
                    ))
                }
            </div>
        )
    }
}
export default connect(
   state=>({name:state.name,nameword:state.nameword,posting:state.posting}),{postinga}
)(Myposting)