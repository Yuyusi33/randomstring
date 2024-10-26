import React, { useState } from "react";
import "./App.css";
import InputList from "./conponent/InputList";
function App() {
  const [list, setList] = useState(["", ""]);
  const [result, setReSult] = useState();

  const handleAdd = () => {
    return setList([...list, ""]);
  };

  const handleInputChange = (index, value) => {
    const newList = [...list];
    newList[index] = value;
    setList(newList);
  };

  const handleCombineString = () => {
    const arrayString = list.map((string) => string);

    const newArray = [...arrayString];

    const randomizedArray = [];
    for (let i = newArray.length; i > 0; i--) {
      //push random index -> randomizedArray
      const randomIndex = Math.floor(Math.random() * i);
      randomizedArray.push(newArray[randomIndex]);

      //remove
      newArray.splice(randomIndex, 1);
    }

    setReSult(randomizedArray);
  };

  const handleRemove = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    console.log("removed", newList.length);
    setList(newList);
  };
  return (
    <div className="container">
      <h2>RANDOM STRING TOOL</h2>
      <div className="body-container">
        {/* add string + button */}
        <div>
          <p>
            ADD STRING
            <button className="add-button" onClick={handleAdd}>
              +
            </button>
          </p>
          <div className="input-section">
            <br></br>
            <div className="input-list">
              <InputList
                list={list}
                handleInputChange={handleInputChange}
                handleRemove={handleRemove}
              />
            </div>
          </div>
        </div>
        {/* result button + result ouput */}
        <div className="result-section">
          <button className="result-button" onClick={handleCombineString}>
            result
          </button>
          <p className="result-box"> {result}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
