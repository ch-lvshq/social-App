import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import{namea,pict}from '../../redux/actions'
 class Edit extends Component{
    queren=()=>{
        if(this.editname.value===''){
            this.editname.value=this.props.name
        }
        if(this.editqm.value===''){
            this.editqm.value=this.props.nameword
        }
  let a=this.editname.value
  this.props.namea(a)
   let b=this.editqm.value 
  this.props.pict(b)
  ReactDOM.render(<span></span>,document.getElementById('edit'))
  }  
    fanhui=()=>{
        ReactDOM.render(<div></div>,document.getElementById('edit'))
    }
    render(){
        return(
            <div className='edit'>
                <input type="file"/><br/>
                <input type="text" placeholder={this.props.name} ref={(value)=>this.editname=value}/><br/>
                <input type="text" placeholder={this.props.nameword} ref={(value)=>this.editqm=value}/><br/>
                <button onClick={this.queren}>确认</button>   <button onClick={this.fanhui}>返回</button>
            </div>
        )
    }
}
export default connect(
    state=>({name:state.name,nameword:state.nameword}),
    {namea,pict}
)(Edit)