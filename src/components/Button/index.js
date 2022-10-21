export default function Button({ onClick, children, type }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
