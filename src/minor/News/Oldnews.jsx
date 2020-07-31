import React,{Component} from 'react'
import { connect } from 'react-redux'


 class Oldnews extends Component{
    render(){
        return(
            <div>
            <div>评论我的
            {
                  this.props.posting.filter((value)=>value.name===this.props.name).map((value,num1)=>value.plvalue.map((value,num2)=>
                          (<div key={num2} num1={num1} num2={num2} className='news-top-one'>{value.name}:{value.value}</div>)
                )) 
            }
            </div> 
            <div>回复我的
               {
                   this.props.posting.map((value,num1)=>value.plvalue.filter(value=>value.name===this.props.name).map((value,num2)=>value.plhf.map((value,num3)=>
                           ( <div key={num3} num1={num1} num2={num2} num3={num3}  className='news-top-one'>{value.name}:{value.value}</div>)
                    )))
               } </div></div>
        )
    }
}
export default connect(
    status=>({posting:status.posting,name:status.name})
)(Oldnews)