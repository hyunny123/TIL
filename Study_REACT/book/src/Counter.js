import { Component } from "react";

class Counter extends Component {
  //   constructor(props) {
  //     super(props);
  //     //state 초깃값
  //     this.state = {
  //       number: 0,
  //       fixed: 0,
  //     };
  //   }
  state = {
    number: 0,
    fixed: 0,
  };
  render() {
    const { number, fixed } = this.state; // state를 조회시 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>고정된 값:{fixed}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
