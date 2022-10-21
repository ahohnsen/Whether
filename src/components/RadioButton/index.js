export default function RadioButton({ label, htmlFor, name, value, checked }) {
  return (
    <>
      <input type="radio" id={htmlFor} name={name} value={value} checked={checked} />
      <label htmlFor={htmlFor}>{label}</label>
    </>
  );
}
