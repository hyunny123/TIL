import React, { useRef, useEffect } from "react";

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    //console.log(inputRef);

    //input 요소가 focus 되게 하기.
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}님!`);
    inputRef.current.focus();
  };
  //form tag를 넣으면서 input 창 reset

  return (
    <div>
      <form>
        <input ref={inputRef} type="text" placeholder="username" />

        <button onClick={login}>로그인</button>
      </form>
    </div>
  );
};

export default App;
