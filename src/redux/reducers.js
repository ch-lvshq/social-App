import { combineReducers }from 'redux'

const name =function(state='管理员',action){
    switch(action.type){
        case'namename':return action.date
        default :return  state

    }
}
const nameword=function(state='这个人很懒，没有个性签名',action){
    switch(action.type){
        case'nameword':return action.date
        default :return state
    }
}
const posting=function(state=[],action){
    switch(action.type){
        case'post':return action.date
        default:return state
    }
}
export default combineReducers({name,nameword,posting})