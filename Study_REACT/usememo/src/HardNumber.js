import React, { useMemo, useState } from "react";
import "./App.css";

const hardCalculate = (number) => {
  console.log("어려운 계산입니다.");
  for (let i = 0; i < 99999999; i++) {} //생각하는 시간
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("쉬운 계산입니다.");
  return number + 1;
};

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  //const hardSum = hardCalculate(hardNumber);
  //렌더링이 되면 초기값이 되고 반복적으로 값을 할당해서 계속 호출된다.
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h2>어려운 계산기입니다.</h2>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
      <h2>쉬운 계산기입니다.</h2>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
}

export default App;
