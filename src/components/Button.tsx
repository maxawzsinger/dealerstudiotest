import "./styles/Button.css";

const Button = ({ label }: { label: string }) => (
  <button
    className="button"
    onClick={() => {
      alert(`You clicked button with label: ${label}.`);
    }}
  >
    {label}
  </button>
);

export default Button;
