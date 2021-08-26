import React, { Component } from 'react';
import { createTodo, getTodos } from './fetch-utils';

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
         const data = await createTodo(this/this.props.token, {
             to_do: this.state.newTodo,
             completed: false,
         });
         this.setState({ newTodo: '' });
         this.fetchTodos();
     }
    render() { 
        return ( 
            <>
            <h1>My to do list</h1>
            <section className="todo-list">
                {this.state.ToDos.map((todo) => (
                    <div className="todo-item" key={todo.id}>
                        <input type="checkbox" checked={todo.completed}></input>
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