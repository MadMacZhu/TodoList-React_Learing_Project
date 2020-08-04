import React from 'react';
import todo_arr from './components/TodoArray';
import TodoItem from './components/TodoItem';
import './TodoApp.css';

class TodoApp extends React.Component{
	constructor(){
		super();
		this.state = {
			todos: todo_arr
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id){
		this.setState(prevState => {
			const updated_todos = prevState.todos.map(item =>{
				if(id === item.id){
					item.completed = !item.completed;
				}
			return item;
			})
		return {todos: updated_todos};
		})

	}

	render(){
		const todo_list = this.state.todos.map(item => 
											<TodoItem 
											key={item.id}
											item={item}
											handleClick={this.handleClick}/>)

		return(
			<div className="todo-list">
				{todo_list}
			</div>
			);
	}
}

export default TodoApp;