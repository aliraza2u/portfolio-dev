import "./Button.css";
function Button({ btn_text }) {
  return (
    <div>
      <button className="intro-btn mt-md-4 ">{btn_text}</button>
    </div>
  );
}
export default Button;
