import React, { useRef } from "react";
import { useEffect } from "react";

const Ref = () => {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다!! ${inputRef.current.value}`);
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="아이디 입력" />
      <button onClick={login}>login</button>
    </div>
  );
};

export default Ref;
