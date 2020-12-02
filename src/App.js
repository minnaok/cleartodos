import React, { useState }  from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ desc: '' , date:'' });
  }

  const clearTodos = (event) => {
    event.preventDefault();
    setTodos([]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});

  } 

  return (
    <div className="App">
       <header className="App-header">
      <h1>My Todolist</h1>
      </header>

     Date: <input type="date" placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
      Description: <input type="text" placeholder="Description" name="desc" value={todo.desc} onChange={inputChanged}/>
      
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>Clear</button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default App;

