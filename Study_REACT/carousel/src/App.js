import { useState } from "react";
import ImageSlider from "./ImageSlider";

function App() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);

  const handleChange = (i) => {
    // console.log(i);
    if (i === "First") {
      if (first === true) {
        console.log(i, "our value");
      }
      setFirst(!first);
    }
    if (i === "Second") {
      if (second === true) {
        console.log(i, "our value");
      }
      setSecond(!second);
    }
    if (i === "Third") {
      if (third === true) {
        console.log(i, "our value");
      }
      setThird(!third);
    }
  };

  const slides = [
    { url: "./images/first.png", title: "free" },
    { url: "./images/second.png", title: "love" },
    { url: "./images/third.png", title: "want" },
    { url: "./images/fourth.png", title: "dream" },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div>
      <h1>hello carousel!</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <div>
        <div>
          <h2>checkbox</h2>
          <div>
            <input
              type="checkbox"
              name="favorite"
              value={first}
              onChange={() => handleChange("First")}
            />
            First
            <input
              type="checkbox"
              name="favorite"
              value={second}
              onChange={() => handleChange("Second")}
            />
            Second
            <input
              type="checkbox"
              name="favorite"
              value={third}
              onChange={() => handleChange("Third")}
            />
            Third
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
