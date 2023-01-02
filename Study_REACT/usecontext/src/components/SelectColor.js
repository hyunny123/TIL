import { ColorConsumer } from "../context/color";

const colors = [
  "red",
  "pink",
  "yellow",
  "orange",
  "blue",
  "skyblue",
  "green",
  "violet",
];

const SelectColor = () => {
  return (
    <div>
      <h2>색상을 선택하시오.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColor;
