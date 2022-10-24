import { useState } from "react";
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import initialTodos from "./data";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  // const [weatherStatus, setWeatherStatus] = useState({});

  // function getUserLocation() {
  //   return new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition(resolve, reject);
  //   });
  // }

  // function convertWeatherCodeToEmoji(weatherCode) {
  //   switch (weatherCode) {
  //     case 0:
  //       return { emoji: "☀️", weather: "good" };
  //     case 1:
  //       return { emoji: "🌤", weather: "good" };
  //     case 2:
  //       return { emoji: "🌥", weather: "good" };
  //     case 3:
  //       return { emoji: "☁️", weather: "good" };
  //     default:
  //       return { emoji: "💩", weather: "bad" };
  //   }
  // }

  // async function getWeatherData(latitude, longitude) {

  // }

  /* fetch/filter */
  // function filterTodos() {
  //   /* add the switch case below  */
  // }

  return (
    <>
      <Header />
      {/* <main><InfoBox emoji={weatherStatus.emoji} /></main> */}
    </>
  );
}

export default App;
