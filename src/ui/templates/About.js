import React from 'react'
export default class About extends React.Component {
   	constructor(props) {
      super(props);
      this.submitRequest = this.submitRequest.bind(this);
   	};

   	submitRequest() {
   		console.log('About Button Working Fine');
   	}
   	
	render() {
	    return (
	        <div>
	            <h1>About page</h1>
	            <p>This is an about page</p>
	            <button onClick = {this.submitRequest}>About</button>
	        </div>
	    )
  	}
}
