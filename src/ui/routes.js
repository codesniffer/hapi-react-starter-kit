import React from 'react'
import {Route, Redirect, Link, browserHistory, IndexRoute} from 'react-router'
import App from './templates/app.js'
import SMS from './templates/sms.js'
import Home from './templates/Home.js'
import About from './templates/About.js'



module.exports = (
	<Route component={App}>
    	<Route path='/' component={Home}/>
    	<Route path='/sms' component={SMS}/>
        <Route path='/about' component={About}/>
    </Route>
)