import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import WeatherStatus from "./components/WeatherStatus";
import initialTodos from "./data";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [weatherStatus, setWeatherStatus] = useState({});
  const [currentFilter, setCurrentFilter] = useState("current");

  useEffect(() => {
    async function determineCurrentWeather() {
      try {
        const location = await getUserLocation();
        const weatherCode = await getWeatherData(
          location.coords.latitude,
          location.coords.longitude
        );
        setWeatherStatus(convertWeatherCodeToEmoji(weatherCode));
      } catch (error) {
        console.error(error);
      }
    }
    determineCurrentWeather();
  }, []);

  function getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  function convertWeatherCodeToEmoji(weatherCode) {
    switch (weatherCode) {
      case 0:
        return { emoji: "☀️", weather: "good" };
      case 1:
        return { emoji: "🌤", weather: "good" };
      case 2:
        return { emoji: "🌥", weather: "good" };
      case 3:
        return { emoji: "☁️", weather: "good" };
      default:
        return { emoji: "💩", weather: "bad" };
    }
  }

  async function getWeatherData(latitude, longitude) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      if (!response.ok) {
        throw new Error(response.status + "Ooops, something went wrong.");
      }
      const data = await response.json();
      return data.current_weather.weathercode;
    } catch (error) {
      console.error(error);
    }
  }

  function filterTodos(currentFilter) {
    switch (currentFilter) {
      case "current":
        return todos.filter(
          (todo) => todo.weather === weatherStatus.weather || todo.weather === "always"
        );
      case "always":
      case "good":
      case "bad":
        return todos.filter((todo) => todo.weather === currentFilter);
      case "all":
      default:
        return todos;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setTodos([...todos, { ...data, id: nanoid() }]);
  }

  function deleteTodo(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function changeTodo(updatedTodo) {
    const newTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function toggleCheckTodo(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isChecked: !todo.isChecked };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <>
      <h1>Whether</h1>
      <WeatherStatus emoji={weatherStatus.emoji} />
      <AddTodo onAddTodo={handleSubmit} />
      <label htmlFor="select-filter">Show me the ToDos I can do: </label>
      <select id="select-filter" onChange={(event) => setCurrentFilter(event.target.value)}>
        <option value="all">all of them - I can't get enough!</option>
        <option value="bad">with bad weather conditions</option>
        <option value="good">with good weather conditions</option>
        <option value="always">with any weather conditions</option>
        <option value="current" selected>
          with current weather conditions
        </option>
      </select>

      <TodoList
        listTitle="ToDos"
        todos={filterTodos(currentFilter).filter((filteredTodo) => filteredTodo.isChecked !== true)}
        onDeleteTodo={deleteTodo}
        onChangeTodo={changeTodo}
        onToggleCheckTodo={toggleCheckTodo}
      />
      <TodoList
        listTitle="Done"
        todos={filterTodos(currentFilter).filter((filteredTodo) => filteredTodo.isChecked === true)}
        onDeleteTodo={deleteTodo}
        onChangeTodo={changeTodo}
        onToggleCheckTodo={toggleCheckTodo}
      />
    </>
  );
}

export default App;
