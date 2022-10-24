import { useState } from 'react';
import Svg from '../Svg';
import Button from '../Button/index';
import { TodoItem } from './Todo.styled.js';

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
        type='checkbox'
        checked={todo.isChecked}
        onChange={() => {
          onToggleCheckTodo(todo.id);
        }}
      />
      {isEditing ? (
        <>
          <input type='text' id='edit' value={todo.title} onChange={handleChange} />
          <Button variant='icon' aria-label='save todo' onClick={() => setIsEditing(!isEditing)}>
            <Svg variant='save' color='#3D3D3D' />
          </Button>
        </>
      ) : (
        <>
          {todo.title}
          <Button variant='icon' aria-label='edit todo' onClick={() => setIsEditing(!isEditing)}>
            <Svg variant='edit' color='#3D3D3D' />
          </Button>
        </>
      )}
      <Button variant='icon' aria-label='delete todo' onClick={() => onDeleteTodo(todo.id)}>
        <Svg variant='delete' color='#3D3D3D' />
      </Button>
    </TodoItem>
  );
}
