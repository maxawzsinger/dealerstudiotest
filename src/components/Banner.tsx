import "./styles/Banner.css";
import { config } from "../data";
import Button from "./Button";

const Banner = () => (
  <div className="banner">
    <h1 className="center">{config.bannerTitle}</h1>
    <div className="center">
      <p>{config.bannerDesc}</p>
    </div>
    <div className="center">
      <div className="submitButton">
        <Button label={config.bannerSubmitLabel} />
      </div>
    </div>
  </div>
);

export default Banner;
