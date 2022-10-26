import React, { useState, useEffect } from "react";
import Timer from "../../components/Timer";

const Effect = () => {
  //   const [count, setCount] = useState(0);
  //   const [name, setName] = useState("");
  const [showTimer, setShowTimer] = useState(false);

  //   const updateHandler = () => {
  //     setCount(count + 1);
  //   };
  //   //렌더링시 매번 실행됨.
  //   useEffect(() => {
  //     console.log("렌더링링링");
  //   });
  //   //마운팅 +count가 변경시 실행
  //   useEffect(() => {
  //     console.log("count렌더링링링");
  //   }, [count]);
  //   // 마운팅 +name이 변경시 실행
  //   useEffect(() => {
  //     console.log("name렌더링링링");
  //   }, [name]);

  //   const handleInputChange = (e) => {
  //     setName(e.target.value);
  //   };

  const showTimerHandler = () => {
    setShowTimer(!showTimer);
  };

  return (
    <div>
      <div>
        {showTimer && <Timer />}

        <button onClick={showTimerHandler}>toggleTimer</button>
      </div>
      {/* <div>
        <span>count:{count}</span>
        <button onClick={updateHandler}>+1</button>
      </div>
      <div>
        <input type="text" value={name} onChange={handleInputChange} />
        <span>name:{name}</span>
      </div> */}
    </div>
  );
};

export default Effect;
