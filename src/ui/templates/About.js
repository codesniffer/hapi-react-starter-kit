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
	            <h3>About page</h3>
	            <p>This is an about page</p>
	            <button onClick = {this.submitRequest}>About</button>
	        </div>
	    )
  	}
}
