import React,{Component} from 'react'
import { connect } from 'react-redux'
import {postinga} from '../../redux/actions'

 
 class Newnews extends Component{
    yes=(e)=>{
        let num1=e.target.getAttribute('num1');
        let num2=e.target.getAttribute('num2');
        let num3=e.target.getAttribute('num3');
        let a=this.props.posting.slice(0);
        if(num3===null){
            a.filter(value=>value.name===this.props.name)[num1].plvalue[num2].yes=true
            this.props.postinga(a)
            return false
        }
        else{
            a[num1].plvalue.filter(value=>value.name===this.props.name)[num2].plhf[num3].yes=true
            this.props.postinga(a)
            return false
        }
    }
    render(){
        return(<div>
            <div>评论我的
            {
                  this.props.posting.filter((value)=>value.name===this.props.name).map((value,num1)=>value.plvalue.map((value,num2)=>{
                      if(value.yes===true){
                          return false
                      }
                      else{
                          return(<div key={num2} num1={num1} num2={num2}  onClick={this.yes} className='news-top-one'  title='点击已读'>{value.name}:{value.value}</div>)
                      }
                })) 
            }
            </div> 
            <div>回复我的
               {
                   this.props.posting.map((value,num1)=>value.plvalue.filter(value=>value.name===this.props.name).map((value,num2)=>value.plhf.map((value,num3)=>{
                       if(value.yes===true){
                           return false
                       }
                       else{
                           return ( <div key={num3} num1={num1} num2={num2} num3={num3}  className='news-top-one' onClick={this.yes} title='点击已读'>{value.name}:{value.value}</div>)
                       }
                   
                    })))
               } </div></div>
        )
    }
}
export default connect(
    status=>({posting:status.posting,name:status.name}),{postinga}
)(Newnews)