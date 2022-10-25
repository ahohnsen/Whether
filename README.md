# Recap 4: ToDo App - Whether

In this recap project you are going to work in a group to create a ToDo App, which organizes your ToDos according to different weather conditions.

## Starter Code

You can find the
[starter template here](https://github.com/ahohnsen/whether-template).
Create only one repository per group, but each member of the group clones the repository to their local machine.

> 💡 Don't forget to work on feature branches, otherwise you might run into merge conflicts!

## Tasks

### Render ToDo List

For now you have only a few hardcoded ToDos in the `data.js` file. These ToDos are passed to the `todos` state in the `App.js` as `initialTodos`. Your first task is to render these ToDos in a list.

- Create a `Todo` component for a single ToDo list item.
- Create a `TodoList` component and use an array method to render the `ToDo` component for each todo list item.
- Your `ToDoList` component should also include a heading with the name of the ToDo list and the total amount of ToDos in the list.
- Render the `ToDoList` component in the `App.js`.

### Check ToDos

Now we want to be able to mark ToDos as completed. Additionally, all completed ToDos should be rendered in a separate list.

- Add a checkbox to the `Todo` component.
- Create a function `toggleCheckTodo` in the `App` component. The function should update the `todos` state, so that the `isChecked` property of the respective ToDo item is toggled.
- Make sure the function is called in the `Todo` component when the checkbox is checked.
- Reuse the `TodoList` component to render a second ToDo list in the `App` with the title "Done".
- Adjust the ToDos you pass as a prop to both ToDoLists, so that the first list only shows the unfinished ToDos and the second one the completed ones.
