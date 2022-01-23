import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import CustomCard from "./CustomCard";

const data = [
  { id: "1", title: "TATA STEEL", total: 200, target: 400, level: 0 },

  { id: "2", title: "Factory A", total: 20, target: 100, parent: 1, level: 1 },
  { id: "3", title: "Factory B", total: 150, target: 200, parent: 1, level: 1 },
  { id: "4", title: "Factory C", total: 30, target: 100, parent: 1, level: 1 },

  { id: "5", title: "Godown A", total: 10, target: 50, parent: 2, level: 2 },
  { id: "6", title: "Godown B", total: 10, target: 50, parent: 2, level: 2 },

  { id: "7", title: "Godown C", total: 80, target: 100, parent: 3, level: 2 },
  { id: "8", title: "Godown D", total: 70, target: 100, parent: 3, level: 2 },

  { id: "9", title: "Godown E", total: 10, target: 50, parent: 4, level: 2 },
  { id: "10", title: "Godown F", total: 20, target: 50, parent: 4, level: 2 },
];

function App() {
  const [cardLevels, setCardLevels] = useState([]);

  useEffect(() => {
    console.log(cardLevels);
  }, [cardLevels]);

  useEffect(() => {
    const level0 = [];

    data.forEach((el) => {
      if (el.level === 0) level0.push(el);
    });

    const curr = [...cardLevels];
    curr.push(level0);

    setCardLevels(curr);
  }, []);

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        {cardLevels.map((level, levIndex) => {
          return (
            <div style={{ display: "flex" }}>
              {level.map((card, index) => (
                <CustomCard
                  key={"card-level-" + index}
                  {...card}
                  data={data}
                  cardLevels={cardLevels}
                  levIndex={levIndex}
                  updateLevels={(val) => {
                    setCardLevels(val);
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
