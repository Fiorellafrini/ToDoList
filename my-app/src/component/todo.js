import { useState } from "react";
import "./todoApp.css";
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importa el icono de edición de FontAwesome


export default function Todo({ item, onUpdate, onDelete, onComplete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(item.title ?? "");

  function handleSubmit(event) {
    event.preventDefault();
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleUpdate() {
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  function handleCheckboxChange(e) {
    onComplete(item.id, e.target.checked);
  }

  return (
    <div className="todo">
      {isEdit ? (
        <form className="todoUpdateForm" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todoInput"
            onChange={handleChange}
            value={value}
          />
          <button className="button" onClick={handleUpdate}>
            {" "}
            Update{" "}
          </button>
        </form>
      ) : (
        <div className="todoInfo">
          <input
            type={"checkbox"}
            onChange={handleCheckboxChange}
            checked={item.checked}
          />
          <span
            className="todoTitle"
            style={{
              color: item.completed ? "#ccc" : "",
              textDecoration: item.completed ? "line-through" : "",
            }}
          >
            {item.title}
          </span>
          <button className="button" onClick={() => setIsEdit(true)}>
          <FaEdit /> Edit
          </button>
          <button className="buttonDelete" onClick={() => onDelete(item.id)}>
          <FaTrashAlt /> Update
          </button>
        </div>
      )}
    </div>
  );
}
