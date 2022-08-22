import React, { useState, useRef } from "react";

function App1() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // ref에 접근하고싶을때는 countRef.current로 접근하면된다.
  console.log("렌더링 중....");
  console.log(countRef);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref:", countRef.current);
  };
  return (
    <div>
      <p>state:{count}</p>
      <p>Ref:{countRef.current}</p>
      <button onClick={increaseCountState}>state 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
}

export default App1;
