import React from 'react';
import ReactDOM from 'react-dom';
//import SMS from 'sms';
//import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}

export default App;