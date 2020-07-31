import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './login/login'
import {Provider} from 'react-redux'
import {store} from './redux/stores'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch> 
      <Route path='/' component={App} exact/>
<Route path='/App' component={Login} exact/>

  </Switch>
  </BrowserRouter></Provider>,document.getElementById('main'))
