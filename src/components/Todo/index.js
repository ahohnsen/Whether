import { useState } from "react";
import Svg from "../Svg";
import { TodoItem } from "./Todo.styled.js";
import { IconButton } from "../IconButton";

export default function Todo({ todo, onDeleteTodo, onChangeTodo, onToggleCheckTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    const newTodo = {
      ...todo,
      title: event.target.value,
    };
    onChangeTodo(newTodo);
  }

  return (
    <TodoItem weatherCategory={todo.weather}>
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={() => {
          onToggleCheckTodo(todo.id);
        }}
      />
      {isEditing ? (
        <>
          <input id="edit" value={todo.title} onChange={handleChange} />
          <IconButton aria-label="save todo" onClick={() => setIsEditing(!isEditing)}>
            <Svg variant="save" color="black" />
          </IconButton>
        </>
      ) : (
        <>
          {todo.title}
          <IconButton aria-label="edit todo" onClick={() => setIsEditing(!isEditing)}>
            <Svg variant="edit" color="black" />
          </IconButton>
        </>
      )}
      <IconButton aria-label="delete todo" onClick={() => onDeleteTodo(todo.id)}>
        <Svg variant="delete" color="black" />
      </IconButton>
    </TodoItem>
  );
}
