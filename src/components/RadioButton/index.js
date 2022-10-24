/* Aufgabe Add - create a "RadioButton Components" which renders
   three radio buttons (options: bad, good, always) */

export default function RadioButton({ label, htmlFor, name, value, defaultChecked }) {
  return (
    <>
      <input type='radio' id={htmlFor} name={name} value={value} defaultChecked={defaultChecked} />
      <label htmlFor={htmlFor}>{label}</label>
    </>
  );
}
