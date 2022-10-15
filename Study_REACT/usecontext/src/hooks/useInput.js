import { useState } from "react";

const useInput = (initialValue, submitAction) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const inputHandle = (e) => {
    setInputValue(e.target.value);
  };
  const inputSubmit = () => {
    // alert(inputValue);
    setInputValue("");
    submitAction(inputValue);
  };
  return [inputValue, inputHandle, inputSubmit];
};

export default useInput;
