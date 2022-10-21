import Todo from "../Todo";

export default function TodoList({ todos, onDeleteTodo, onChangeTodo, onToggleCheckTodo }) {
  return (
    <ul>
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
    </ul>
  );
}
