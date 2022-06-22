import React, {useState} from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({sushiList, money, onEmptyPlates, onMoneyDecrease}) {
  const [sushiIndex, setSushiIndex] = useState(0);
  const sushiDisplay = [];

  function handleMoreClick() {
    setSushiIndex(sushiIndex => sushiIndex + 4);
  }

  if (sushiList.length !== 0) {
    for (let i = sushiIndex; i < sushiIndex + 4; i++) {
      sushiDisplay.push(sushiList[i]);
    }
  }

  const renderSushi = sushiDisplay?.map(sushi => {
    return <Sushi 
                key={sushi.id}
                image={sushi.img_url}
                name={sushi.name} 
                price={sushi.price}
                money={money}
                onEmptyPlates={onEmptyPlates}
                onMoneyDecrease={onMoneyDecrease}
          />
  });

  return (
    <div className="belt">
      {renderSushi}
      <MoreButton onMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
