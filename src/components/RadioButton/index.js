export default function RadioButton({ label, htmlFor, name, value }) {
  return (
    <>
      <input type="radio" id={htmlFor} name={name} value={value} />
      <label htmlFor={htmlFor}>{label}</label>
    </>
  );
}
