import React from 'react';
import Button from './Button';

class Login extends React.Component{
	constructor(){
		super();
		this.state = {
			isLoggedIn: false,
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick(){
		this.setState(prevState => {
			return{
				isLoggedIn: !prevState.isLoggedIn
			};
		})
	}

	render(){
		return(
			<div>
				{this.state.isLoggedIn ? 
					<h3>You are logged in</h3> : <h3>You are logged out</h3>}
				<Button isLoggedIn= {this.state.isLoggedIn}
					onClick={this.onClick}/>
			</div>
			);
	}
}

export default Login;