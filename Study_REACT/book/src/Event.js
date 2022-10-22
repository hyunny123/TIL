import React, { useState } from "react";

const Event = () => {
  const [value, setValue] = useState({
    username: "",
    message: "",
  });
  const { username, message } = value;

  const onChangeHandle = (e) => {
    const enteredValue = { ...value, [e.target.name]: e.target.value };
    setValue(enteredValue);
  };

  const clickHandler = () => {
    alert(username + ":" + message);
    setValue({
      petname: "",
      message: "",
    });
  };

  return (
    <div>
      <h1>Event</h1>
      <input
        type="text"
        name="username"
        placeholder="이름쓰기"
        value={username}
        onChange={onChangeHandle}
      />
      <input
        type="text"
        name="message"
        placeholder="글쓰기"
        value={message}
        onChange={onChangeHandle}
      />
      <button onClick={clickHandler}>추가</button>
    </div>
  );
};

export default Event;
