import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/sms">SMS</a></li>

            </ul>
				
           {this.props.children}
         </div>
      )
   }
}

export default App;