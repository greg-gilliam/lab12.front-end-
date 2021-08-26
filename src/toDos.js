import React, { Component } from 'react';
import { getTodos } from './fetch-utils';

class ToDos extends Component {
    state = { 
        ToDos: [],
     };

     componentDidMount = async () => {
         const data = await getTodos(this.props.token);
         console.log(data);
         this.setState({ ToDos: data });
     };
    render() { 
        return ( 
            <>
            <h1>My to do list</h1>
            {this.state.ToDos.map((ToDo) => (
                <div className="todo-item" key={ToDo.id}>
                <label >
                <input type="checkbox" checked={ToDo.completed}></input>
                {ToDo.to_do}
                </label>
                </div>
            ))}
            </>
         );
    }
}
 
export default ToDos;