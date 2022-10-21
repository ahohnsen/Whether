import Todo from "../Todo";

export default function TodoList({
  listTitle,
  todos,
  onDeleteTodo,
  onChangeTodo,
  onToggleCheckTodo,
}) {
  return (
    <>
      <h2>
        {listTitle} ({todos.length})
      </h2>
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
    </>
  );
}
