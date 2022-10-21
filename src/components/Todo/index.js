import { useState } from "react";
import Svg from "../Svg";

export default function Todo({ todo, onDeleteTodo, onChangeTodo, onToggleCheckTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    const newTodo = {
      ...todo,
      title: event.target.value,
    };
    onChangeTodo(newTodo);
  }

  function setWeatherColor(weather) {
    if (weather === "bad") return "red";
    else if (weather === "good") return "blue";
    else return "hotpink";
  }

  return (
    <li
      style={{
        background: setWeatherColor(todo.weather),
      }}
    >
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={() => {
          onToggleCheckTodo(todo.id);
        }}
      />
      {isEditing ? (
        <>
          <label htmlFor="edit">Edit:</label>
          <input id="edit" value={todo.title} onChange={handleChange} />
          <button
            className="IconButton"
            aria-label="save todo"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Svg variant="save" color="black" />
          </button>
        </>
      ) : (
        <>
          {todo.title} {todo.weather}
          <button
            className="IconButton"
            aria-label="edit todo"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Svg variant="edit" color="black" />
          </button>
        </>
      )}
      <button className="IconButton" aria-label="delete todo" onClick={() => onDeleteTodo(todo.id)}>
        <Svg variant="delete" color="black" />
      </button>
    </li>
  );
}
