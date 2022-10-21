import { TodoList as List } from './TodoList.styled.js';
import Todo from '../Todo';

export default function TodoList({
  listTitle,
  emoji,
  todos,
  onDeleteTodo,
  onChangeTodo,
  onToggleCheckTodo,
}) {
  return (
    <>
      <h2>
        {listTitle} <span>{emoji}</span> ({todos.length})
      </h2>
      <List>
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              onDeleteTodo={onDeleteTodo}
              onChangeTodo={onChangeTodo}
              onToggleCheckTodo={onToggleCheckTodo}
            />
          );
        })}
      </List>
    </>
  );
}
