import { ColorConsumer } from "../context/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: "100px",
              height: "100px",
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: "50px",
              height: "50px",
              background: value.state.subColor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
