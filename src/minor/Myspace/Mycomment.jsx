import React,{Component} from 'react'
import { connect } from 'react-redux'
import {postinga} from '../../redux/actions'

 class Mycomment extends Component{
    constructor(props){
        super(props)
        this.state={
            mypl:[],
        }
    }
    componentDidMount(){
       let a= this.props.name
       let b=this.props.posting.slice(0)
       let d=[]
       for(let i=0;i<b.length;i++){
           for(let j=0;j<b[i].plvalue.length;j++){
            b[i].plvalue[j].plj=false
              d.push( b[i].plvalue[j])
           }
       }
       let e=[]
       for(let i=0;i<d.length;i++){
           for(let j=0;j<d[i].plhf.length;j++){
               e.push(d[i].plhf[j])
           }
       }
       let de=[...e,...d]
       let mypl=de.filter((value)=>value.name===a)
       this.setState({
           mypl
       })
    }
    delete=(e)=>{
        let a=e.target.parentNode.getAttribute('name')
        let b=this.state.mypl.slice(0)
        b.splice(a,1)
        let d=this.props.posting.slice(0)
        this.setState({
            mypl:b
        })
            for(let i=0;i<d.length;i++){
                for(let j=0;j<d[i].plvalue.length;j++){
                    if( d[i].plvalue[j].value===this.state.mypl[a].value){
                        d[i].plvalue.splice(j,1)
                    }
                }
            }
        if(this.state.mypl[a].plj){
            for(let i=0;i<d.length;i++){
                for(let j=0;j<d[i].plvalue.length;j++){
                   for(let k=0;k<d[i].plvalue[j].plhf.length;k++)
                   if( d[i].plvalue[j].plhf[k].value===this.state.mypl[a].value){
                    d[i].plvalue[j].plhf.splice(k,1)
                   }
                }
            }
        }
        
        this.props.postinga(d)
    }
     render(){
        return(
            <div className='Myposting'>
                {
                    this.state.mypl.map((value,item)=>(
                        <div key={item} className='Posting-post' name={item}>
                        <div className='Posting-value'>{value.value}</div>
                         <button onClick={this.delete}>delete</button>
                       </div>
                         
                    ))
                }
            </div>
        )
    }
}
export default connect(
    state=>({name:state.name,nameword:state.nameword,posting:state.posting}),{postinga}
)(Mycomment)