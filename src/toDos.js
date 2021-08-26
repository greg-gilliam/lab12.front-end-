import React, { Component } from 'react';
import { createTodo, getTodos, toggleCompleted } from './fetch-utils';

class ToDos extends Component {
    state = { 
        ToDos: [],
        newTodo: '',
     };

     componentDidMount = () => {
         this.fetchTodos();
     };
     fetchTodos = async () => {
         const data = await getTodos(this.props.token);
         this.setState({ ToDos: data });
     };

     handleSubmit = async (e) => {
         e.preventDefault();
         const data = await createTodo(this.props.token, {
             to_do: this.state.newTodo,
             completed: false,
         });
         console.log(data);
         this.setState({ newTodo: '' });
         this.fetchTodos();
     }

     handleCompleted = async (todo) => {
         todo.completed = !todo.completed;
         const data = await
         toggleCompleted(this.props.token, todo);
         this.fetchTodos();
         console.log(data);
     };

    render() { 
        return ( 
            <>
            <h1>My to do list</h1>
            <section className="todo-list">
                {this.state.ToDos.map((todo) => (
                    <div className="todo-item" key={todo.id}>
                        <input type="checkbox" checked={todo.completed} 
                        onChange={() => this.handleCompleted(todo)}></input>
                        <label>{todo.to_do}</label>
                    </div>
                ))}
            </section>
            <section className="new-todo">
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newTodo} 
                    type="text"
                    onChange={(e) => this.setState({ newTodo: e.target.value })}/>
                    <button>Add New ToDo</button>
                </form>
            </section>
            </>
         );
    }
}

 
export default ToDos;