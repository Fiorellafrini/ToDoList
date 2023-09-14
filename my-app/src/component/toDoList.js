import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css";
import { FaPlus } from "react-icons/fa"; // Importa el icono de edición de FontAwesome
import SearchBar from "./search";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  // const [editItem, setEditItem] = useState(null);
  
  const [tasks, setTasks] = useState([]); // Aquí debes tener tu lista de tareas
  const [filteredTasks, setFilteredTasks] = useState([]); // Almacena las tareas filtradas

  function handleInputChange(event) {
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
    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos([...temp]);
  }

  function handleDelete(id) {
    const tempTodos = todos.filter((item) => item.id !== id);
    setTodos([...tempTodos]);
  }

  function handleCheckboxChange(id, status) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.completed = status;

    console.log("Holis");
    setTodos([...temp]);
  }

  // Función para manejar la búsqueda
  const handleSearch = (query) => {
    const filtered = tasks.filter((task) =>
      task.text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <div className="conteinerList">
      <h1 className="titulo"> To Do List</h1>
      <div className="search">


        <SearchBar handleSearch={handleSearch} />
        <ul>
          {filteredTasks.map((task) => (
            <Todo key={task.id} task={task} />
          ))}
        </ul>
      </div>


      <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
          <input
            className="todoInput"
            value={title}
            onChange={handleInputChange}
          />
          {/* <input
          type={"submit"}
          value="Create todo"
          className="buttonCreate"

        /> */}
          <button type="submit" className="buttonCreate">
            <FaPlus />
          </button>
        </form>

        <div className="todosContainer">
          {todos.map((item) => (
            <Todo
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onComplete={handleCheckboxChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
