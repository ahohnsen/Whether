import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import WeatherStatus from "./components/WeatherStatus";
import initialTodos from "./data";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [weatherStatus, setWeatherStatus] = useState({});
  const [filteredTodos, setFilteredTodos] = useState(todos);

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

  function handleChange(event) {
    if (event.target.value === "all") {
      return setFilteredTodos(todos);
    }
    if (event.target.value === "current") {
      const currentWeatherTodo = todos.filter((todo) => todo.weather === weatherStatus.weather);
      return setFilteredTodos(currentWeatherTodo);
    } else {
      const currentTodo = todos.filter((todo) => todo.weather === event.target.value);
      return setFilteredTodos(currentTodo);
    }
  }

  return (
    <>
      <h1>Whether</h1>
      <WeatherStatus emoji={weatherStatus.emoji} />
      <br />
      <AddTodo onAddTodo={handleSubmit} />
      <br />

      <select onChange={handleChange}>
        <option value="">--Please choose a weather--</option>
        <option value="all">All</option>
        <option value="bad">Bad</option>
        <option value="good">Good</option>
        <option value="always">Always</option>
        <option value="current">Current</option>
      </select>

      <TodoList
        todos={filteredTodos}
        onDeleteTodo={deleteTodo}
        onChangeTodo={changeTodo}
        onToggleCheckTodo={toggleCheckTodo}
      />
    </>
  );
}

export default App;
