import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {

    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false },]);
    let [newTodo, setNewTodo] = useState("");
    // let [delTodo, setDelTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return ([...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]);
        });
        setNewTodo("");
    };

    let upDateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
    };

    let markAllDone = () => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            };
        })
    );
};

    let markAsDone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id === id) {
                return {
                ...todo,
                isDone: true,
            };
          } else {
            return todo;
          }
        })
    );
};

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={upDateTodoValue}></input>
                <br></br>
            <button onClick={addNewTask}>Add Task</button>
                <br /><br /><br />
                <hr></hr>
            <h3>Tasks Todo</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                    <span style={todo.isDone ? {textDecoration: "line-through"}: {}}>{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>&nbsp;&nbsp;
                    <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                </li>
                ))}
            </ul>
            <br />
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    );
}