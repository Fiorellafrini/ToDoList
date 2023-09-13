import { useState } from "react";
import Todo from "./todo";

export default function TodoApp() {
  const [title, setTitle] = useState("Hola");
  const [todos, setTodos] = useState([]);

  // function handleClick(event){
  // event.preventDefault();
  // setTitle("Fiorella")
  // };

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    

    // crypo.randomUUID me da id aleatorios
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp);
    setTitle(" ")
  }

  function handleUpDate(id, value){
const temp = [...todos];
const item = temp.find(item => item.id === id)
item.title = value;
setTodos(temp)
  }

  function handleDelete(id){
    const temp =todos.filter(item => item.id !== id );
    setTodos(temp)
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input className="todoInput" value={title} onChange={handleChange} />

        <input
          type="submit"
          value="Create todo"
          className="buttonCreate"
          onClick={handleSubmit}
        />

      </form>

      <div className="todosContainer">
        {todos.map((item) => (
        <Todo key={item.id} item={item} onUpDate={handleUpDate} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}
