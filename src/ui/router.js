import React from 'react'
import {Router, Route, Redirect, Link, browserHistory, IndexRoute} from 'react-router'
import App from './templates/app.js'
import SMS from './templates/sms.js'
import Home from './templates/Home.js'
import About from './templates/About.js'



module.exports = (
	<Router history = {browserHistory}>
	    {/*<Route path = "/" component = {App}>
	    	<IndexRoute component = {SMS} />
	        <Route path='sms' component={SMS}/>
	    </Route>*/}
	    <Route component={App}>
        <Route path='/' component={Home}/>
        <Route path='/sms' component={SMS}/>
        <Route path='/about' component={About}/>
    </Route>
   </Router>
)


/*
ReactDOM.render((
  <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "/home" component = {Home} />
         <Route path = "/about" component = {About} />
      </Route>
   </Router>
), document.getElementById('app'))
*/