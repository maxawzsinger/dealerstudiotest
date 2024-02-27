import { useState } from "react";
import Card from "./Card";
import "./styles/CardContainer.css";
import { config } from "../data";

const CardContainer = () => {
  const [activeCardNum, setActiveCardNum] = useState<number>(2);

  return (
    <div className="cardContainer">
      {config.cardsData.map((card) => (
        <Card
          key={card.id}
          isActive={activeCardNum === card.id}
          onClick={() => setActiveCardNum(card.id)}
          {...card}
        />
      ))}
    </div>
  );
};

export default CardContainer;
