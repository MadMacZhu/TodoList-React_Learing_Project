import React from 'react';

class TodoList extends React.Component{
	constructor(){
		super();
		this.state = {
			trash: "Take out the trash",
			shop: "Grocery shopping",
			clean: "Clean gecko tank",
			mow: "Mow Lawn",
			tvshow: "Catch up on Arrested Development"
		};
	}

	render(){
		return(
			<div className="todo-list">
				<input type="checkbox"/> <p>{this.state.trash}</p>
			</div>
			);
	}
};

export default TodoList;