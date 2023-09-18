import "./Button.css";
function Button({ name, className, onClick }) {
  return (
    <button className={`intro-btn ${className}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
