import { useState } from "react";

export default function Todo({ item, onUpDate, onDelete }) {
  const [edit, setEdit] = useState(false);

  function FormEdit() {
    const [newValue, setValue] = useState(item.title);

    function handleSubmit(event) {
      event.preventDefault();
    }s

    function handleChange(event) {
      setValue(event.target.value)
    }

    function handleClick(event){
        onUpDate(item.id, newValue)
        setEdit(false)
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>

        <input type="text" 
        className="todoInput" 
        onChange={handleChange} 
        value={newValue}
        />
        <button className="button" onClick={handleClick}> Update </button>
      </form>
    );
  }

  function TodoElement() {
    <div className="todoInfo">
      {item.title}
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>;
  }

  return <div className="todo">{edit ? <FormEdit /> : <TodoElement />}</div>;
}
