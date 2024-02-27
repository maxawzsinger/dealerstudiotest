import Button from "./Button";
import "./styles/Card.css";
import brisbaneSkyline from "../assets/brisbane-skyline.jpg";

const Card = ({
  title,
  content,
  button,
  isActive,
  onClick,
}: {
  title: string;
  content: string;
  button: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <div className={`card ${isActive ? "active" : ""}`} onClick={onClick}>
    <img className="img" src={brisbaneSkyline} />
    <div className="info">
      <div className="text">
        <h1>{title}</h1>
        <p className="desc">{content}</p>
      </div>
      <Button label={button} />
    </div>
  </div>
);

export default Card;
