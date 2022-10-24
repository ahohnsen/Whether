import { Select } from './SelectWeather.styled';

export default function SelectWeather({ handleChange }) {
  return (
    <>
      <label htmlFor='select-filter'>Show me the ToDos I can do: </label>
      <Select id='select-filter' defaultValue='current' onChange={(event) => handleChange(event)}>
        <option value='all'>all of them - I can't get enough!</option>
        <option value='bad'>with bad weather conditions</option>
        <option value='good'>with good weather conditions</option>
        <option value='always'>with any weather conditions</option>
        <option value='current'>with current weather conditions</option>
      </Select>
    </>
  );
}
