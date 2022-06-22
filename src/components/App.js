import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [emptyPlates, setEmptyPlates] = useState([]);
  const [money, setMoney] = useState(400);

  function handleEmptyPlates(sushi) {
    setEmptyPlates([...emptyPlates, sushi]);
  }

  function handleMoneyDecrease(price) {
    setMoney(money => money - price);
  }

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(sushi => setSushiList(sushi))
  }, []);

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} money={money} onEmptyPlates={handleEmptyPlates} onMoneyDecrease={handleMoneyDecrease} />
      <Table money={money} plates={emptyPlates} />
    </div>
  );
}

export default App;
