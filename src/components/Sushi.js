import React, {useState} from "react";

function Sushi({image, name, price, money, onEmptyPlates, onMoneyDecrease}) {
  const [sushiEaten, setSushiEaten] = useState(false);

  function handleSushiEat() {
    if (money >= price) {
      setSushiEaten(sushiEaten => !sushiEaten);
      onEmptyPlates(name);
      onMoneyDecrease(price);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiEat}>
        {/* Tell me if this sushi has been eaten! */}
        {sushiEaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
