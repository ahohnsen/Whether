import { WeatherStatusContainer } from "./WeatherStatus.styled.js";

export default function WeatherStatus({ emoji }) {
  return (
    <WeatherStatusContainer>
      <span>Current weather: {emoji}</span>
    </WeatherStatusContainer>
  );
}
