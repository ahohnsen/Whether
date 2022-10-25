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

### Check ToDos

Now we want to be able to mark ToDos as completed. Additionally, all completed ToDos should be rendered in a separate list.

- Add a checkbox to the `Todo` component.
- Create a function `toggleCheckTodo` in the `App` component. The function should update the `todos` state, so that the `isChecked` property of the respective ToDo item is toggled.
- Make sure the function is called in the `Todo` component when the checkbox is checked.
- Reuse the `TodoList` component to render a second ToDo list in the `App` with the title "Done".
- Adjust the ToDos you pass as a prop to both ToDoLists, so that the first list only shows the unfinished ToDos and the second one the completed ones.

### Fetch Weather Data & Filter ToDos

Now we can fetch the weather data from an API and implement a filter, so that the user can pick the appropriate ToDos for current weather conditions.

But first let's have a look at what happens in our `App` component:  
On initial render of the Whether App the function `determineCurrentWeather` inside the `useEffect` is called. This function first calls the function `getUserLocation` which determines the current location of the user (the user will receive a built-in browser notification asking for permission). After that the function `getWeatherData` will fetch the weather data for the specific coordinates of the user's location. The weather API returns a `weatherCode` which will be converted with the function `convertWeatherCodeToEmoji` and saved inside the state `weatherStatus`.

- Right now `getWeatherData` returns the weather code `0`, so the `Infobox` component always displays best weather conditions ☀️. Write the fetch to receive the weather code for the user's location inside the function `getWeatherData`. Use the following url for the fetch:

```js
`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
```

- 💡 Keep in mind that, after successfully fetching the weather data, the function `getWeatherData` should return the weather code. Logging the fetched data to the console first, might help you to find the weather code.

If you have done everything correctly, the `Infobox` should now show the current weather conditions of the user's location.
Now we need to implement the filter, so that the user can choose to only see ToDos for good, bad or any weather conditions.

- Uncomment the `SelectWeather` component in the `App` to render the filter element. When the user picks an option from the `select` element the corresponding ToDos should be shown in the ToDo list.
- The filter does not work properly yet. Have a look at the constant `filteredTodos` right above the return statement in the `App` component. You will need to adjust `filteredTodos`, so that the function `filterTodos` can do it's job. Keep in mind that you also need to adjust the ToDos you pass as a prop to your ToDo lists.

### Add new ToDos

TBC

### Delete ToDos

Now we want to be able to delete ToDos.

- Add a "delete" button to the `Todo` component.
- Create a function `deleteTodo` in the `App` component. The function should delete the ToDo with the respective ID from the `todos` state.
- Make sure the function is called in the `Todo` component when the delete button is clicked.
- TBC SVG

### Extra: Edit ToDos
