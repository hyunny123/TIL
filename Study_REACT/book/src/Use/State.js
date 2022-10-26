import React, { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업!");
  return ["브랜디", "페퍼", "하이"];
};
//초기값을 가져올때 어떤 무거운 작업을 해야할 경우 바로 괄호 안에 값을 넣어주는것 보다
//이렇게 콜백 형태로 원하는 값을 리턴해주는 콜백을 넣어주면
//멘처음 렌더링 시에만 함수가 불려지게 된다.

const State = () => {
  const [time, setTime] = useState(1);
  const [enteredValue, setEnteredValue] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const timeHandler = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  console.log("업데이트 중!");

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  const InputClickHandler = () => {
    setEnteredValue((prevState) => {
      console.log("이전 state", prevState);
      return [input, ...prevState];
    });
    setInput("");
  };

  return (
    <div>
      <div>
        <span>현재 시각 :{time}시</span>
        <button onClick={timeHandler}>update</button>
      </div>
      <div>
        <input type="text" value={input} onChange={inputChange} />
        <button onClick={InputClickHandler}>upload</button>
        {enteredValue.map((value, idx) => {
          return <p key={idx}>{value}</p>;
        })}
      </div>
    </div>
  );
};

export default State;
