import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import createBrowserHistory from 'history/lib/createBrowserHistory'


import router from './router';

import App from './templates/app.js'
import Home from './templates/Home.js'
import About from './templates/About.js'
//import SMS from './templates/sms.js'


ReactDOM.render(router, document.getElementById('app'));



