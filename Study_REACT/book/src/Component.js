import React from "react";

import PropType from "prop-types";

const Component = (props) => {
  const { name, children, favorite } = props;
  return (
    <div>
      <p>{name}네 집에 오신결 환영합니다.</p>
      <p>children의 값은 {children}입니다.</p>
      <p>
        {name}는 {favorite}를 좋아합니다.
      </p>
    </div>
  );
};

export default Component;

// Component.defaultProps = {
//   name: "페퍼",
// };

Component.PropType = {
  name: PropType.string,
  favorite: PropType.string.isRequired,
};
