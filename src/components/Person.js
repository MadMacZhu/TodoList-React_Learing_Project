import React from 'react';

class Person extends React.Component{
	constructor(){
		super();
		this.state = {
			name: "Yaoguang",
			age: 30
		}
	}

	render(){
		return(
			<div>
				<h1>{this.state.name}</h1>
				<p>{this.state.age}</p>
			</div>
			);
	}
}

export default Person;