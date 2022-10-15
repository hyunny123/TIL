import ImageSlider from "./ImageSlider";

function App() {
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
    </div>
  );
}

export default App;
