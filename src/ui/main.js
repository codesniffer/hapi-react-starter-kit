import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import createBrowserHistory from 'history/lib/createBrowserHistory'


import router from './router';

import App from './templates/app.js'
import Home from './templates/Home.js'
import About from './templates/About.js'
import SMS from './templates/sms.js'
import SMSGrid from './components/sms-grid.jsx'
import Example from './components/example-grid.jsx'



ReactDOM.render(router, document.getElementById('app'));

var smsgrid = document.getElementById('smsgrid');
console.log('smsgrid: ', smsgrid)
if(smsgrid) {
	console.log('mounting....')
	ReactDOM.render(<SMSGrid/>, document.getElementById('smsgrid'));
}

//ReactDOM.render(<Example />, document.getElementById('gridexample'));




