import React from 'react';

function Button(props){
	const logIn = "Log In";
	const logOut = "Log Out";
	return(
		<div>
			<button onClick={props.onClick}>
				{props.isLoggedIn ? logOut : logIn}
			</button>
		</div>
		);
}

export default Button;