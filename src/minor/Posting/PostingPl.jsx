import React,{Component} from 'react'
import { connect } from 'react-redux'
import './PostingPl.css'
import {postinga}from '../../redux/actions'
import ReactDOM from 'react-dom'
class PostingPl extends Component{
    constructor(props){
        super(props)
        this.state={
            plvalue:[]
        }
    }
    addPlvalue=(e)=>{
        if(this.addPlref.value!==''){
            let a= this.props.posting.slice(0)
         a[this.props.num].plvalue.push({
                name:this.props.name,
                value:this.addPlref.value,
                plhf:[]
            })
           this.props.postinga(a)
           this.addPlref.value=''
        }
    }
    addHfvalue=()=>{
       let c =document.getElementById("PostingPl-input").getAttribute('num')
       let d=this.props.posting.slice(0)
       let b= d[this.props.num].plvalue[c].plhf
       let a= document.getElementById('PostingPl-top-hf')
       if(this.addHfref.value===''){
           return  ReactDOM.render(
            <div id="PostingPl-input">
            </div>,a
        )
       }
       b.push({
            name:this.props.name,
            value:this.addHfref.value
        })
        this.props.postinga(d)
        ReactDOM.render(
            <div id="PostingPl-input">
            </div>,a
        )
        this.addHfref.value=''
    }
    UNSAFE_componentWillMount(){
        let plvalue=this.props.posting[this.props.num].plvalue
        this.setState({
            plvalue
        })
    }
    componentDidUpdate(){
        let a=document.getElementsByClassName('PostingPl-key')
        for(let i=0;i<a.length;i++){
            a[i].removeEventListener('click',this.yes)}
        for(let i=0;i<a.length;i++){
        a[i].addEventListener('click',this.yes)}
    }
    componentDidMount(){
        let a=document.getElementsByClassName('PostingPl-key')
        for(let i=0;i<a.length;i++){
            a[i].removeEventListener('click',this.yes)}
        for(let i=0;i<a.length;i++){
        a[i].addEventListener('click',this.yes)}
    }
    yes=(e)=>{
       let a= document.getElementById('PostingPl-top-hf')
       let b= e.target.parentNode.parentNode.getAttribute('num')
       ReactDOM.render(
           <div id="PostingPl-input" num={b}>
               <input type="text" name="" ref={value=>this.addHfref=value}/><button onClick={this.addHfvalue}>回复</button>
           </div>,a
       )
    }
    render(){
            return(
            <div className='PostingPl-top'>
                   <input type="text" name="" id="" ref={value=>this.addPlref=value}/><button onClick={this.addPlvalue}>添加评论</button>
                   <ol>
                    {this.state.plvalue.map((value,item)=>(
                     <div key={item} num={item}>
                            <li>from:{value.name}<br/><span className='PostingPl-key' title='点击回复'>{value.value}</span></li>
                            <div className='PostingPl-hf'>
                                {value.plhf.map(
                                    (value,item)=>(
                                        <div key={item} num={item} className='PostingPl-hfvalue'>
                                               <span>{value.name}:<span>{value.value}</span></span></div>
                                ))}
                                 </div>
                     </div>
                    )
                    )}  </ol> 
                    <span id='PostingPl-top-hf'></span>
            </div>
        )
    }
}

export default connect(
    state=>({name:state.name,nameword:state.nameword,posting:state.posting}),{postinga}
)(PostingPl)