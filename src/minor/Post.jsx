import React,{Component} from 'react'
import { connect } from 'react-redux'
import './Post.css'
class Post extends Component{
    abc=()=>{
        if(this.values.value===''){
           alert('内容不能为空')
            return false
        }
        let time=new Date().toLocaleString()
        let post={
            name:this.props.name,
            posting:this.values.value,
            time,
            dz:[],
            sc:[],
            plvalue:[]
        }
       this.props.posting.push(post)
       this.values.value=''
       alert('已发布')
    }
    render(){
        return(
            <div>
               <textarea className='post-textarea' name="" id="" cols="50" rows="20" required maxLength='240' ref={(value)=>this.values=value}></textarea>
               <button onClick={this.abc}>发布</button>
            </div>
        )
    }
}
export default connect(
    state=>({name:state.name,nameword:state.nameword,posting:state.posting})
)(Post)