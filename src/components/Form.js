import React from 'react';

class Form extends React.Component{
	constructor(){
		super();
		this.state = {
			first_name: "",
			last_name: "",
			age: "",
			gender:"",
			destination: "",
			is_vegan: false,
			is_kosher: false,
			is_lactoese_free: false
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(event){
		const {type, name, value, checked} = event.target;
		type === "checkbox" ?
		this.setState({ [name]: checked}) :
		this.setState({ [name]: value });
	}

	render(){
		return(
			<div>
				<form>
					<input
						type = "text"
						name = "first_name"
						placeholder = "First Name"
						value = {this.state.first_name}
						onChange = {this.onChange}
					/>
					<br />
					<input
						type = "text"
						name = "last_name"
						placeholder = "Last Name"
						value = {this.state.last_name}
						onChange = {this.onChange}
					/>
					<br />
					<input 
					type = "text"
					name = "age"
					placeholder = "Age"
					value = {this.state.age}
					onChange = {this.onChange}
					/>
					<br />
					<br />
					<h5>Gender:</h5>
					<label>
						<br />
						<input 
							type = "radio"
							name = "gender"
							value = "Male"
							checked = {this.state.gender === "Male"}
							onChange = {this.onChange}
						/> Male
					</label>
					<label>
						<input 
							type = "radio"
							name = "gender"
							value = "Female"
							checked = {this.state.gender === "Female"}
							onChange = {this.onChange}
						/> Female
					</label>
					
					<br />

					<select 
						name="destination" 
						value={this.state.destination}
						onChange={this.onChange}
					>
							<option value="">--Please select your destination--</option>
							<option value="Shenzhen">Shenzhen</option>
							<option value="Hangzhou">Hangzhou</option>
							<option value="Xining">Xining</option>
							<option value="Urumuqi">Urumuqi</option>
					</select>

					<br />
					<br />
					<h5>Your dietary restions:</h5>
					<input 
						type="checkbox" 
						name="is_vegan" 
						checked={this.state.is_vegan}
						onChange={this.onChange}/> Vegan

					<input 
						type="checkbox" 
						name="is_kosher" 
						checked={this.state.is_kosher}
						onChange={this.onChange}/> Kosher

					<input 
						type="checkbox" 
						name="is_lactoese_free" 
						checked={this.state.is_lactoese_free}
						onChange={this.onChange}/> Lactoese Free

					<br />
					<br />
					<button>Submit</button>
				</form>
				<h3>Entered information:</h3>
				<br />
				<p>Your name: {this.state.first_name} {this.state.last_name}</p>
				<br />
				<p>Your age: {this.state.age}</p>
				<br />
				<p>Your gender: {this.state.gender}</p>
				<br />
				<p>Your destination: {this.state.destination}</p>
				<br />
				<p>Your dietary restrictions:</p>
				<p>{this.state.is_vegan ? " Vegan" : null}</p>
				<p>{this.state.is_kosher ? " Kosher" : null}</p>
				<p>{this.state.is_lactoese_free ? " Lactoese free" : null}</p>
			</div>
			)
	}


}

export default Form;