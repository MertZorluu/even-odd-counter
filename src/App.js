import { useState } from "react";

const App  = () => {
  const [count, setCount] = useState (0);
  const [showText, setShowText] = useState (true);
  const isEven = count % 2 === 0;

  return (
    <div className="container">
      <div >
        <h1>{count}</h1>
        <div className="buttons">
        <button
        onClick={() => {
        setCount(count+1);
        }}
        >+1</button>
             <button
        onClick={() => {
        setCount(count-1);
        }}
        >-1</button>
        </div>
       {count >= 0 &&  (   <p>
          This number is{" "}
          <span style={{ color: isEven ? "blue" : "orange" }}>
            {isEven ? "even" : "single"}
          </span>
        </p>)}
      </div>
    </div>
  )
}

export default App;

