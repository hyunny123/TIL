// import React, { useState } from "react";

// import useFetch from "./hooks/useFetch";
// // import "./App.css";
// const baseUrl = "https://jsonplaceholder.typicode.com";

// const App = () => {
//   const { data: userData } = useFetch(baseUrl, "users");
//   const { data: postData } = useFetch(baseUrl, "posts");
//   return (
//     <div className="container">
//       {/* <div className="bigbox">
//         <div className="smallbox" />
//       </div> */}
//       <h1>dataBase</h1>
//       <h2>User</h2>
//       {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
//       <h2>Post</h2>
//       {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
//     </div>
//   );
// };

// export default App;

//컨텍스트 API

// import React from "react";
// import ColorBox from "./components/ColorBox";
// import { ColorProvider } from "./context/color";
// import SelectColor from "./components/SelectColor";

// const App = () => {
//   return (
//     <ColorProvider>
//       <div>
//         <SelectColor />
//         <ColorBox />
//       </div>
//     </ColorProvider>
//   );
// };

// export default App;

//

import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "jay",
    email: "jay@gmail.com",
    images: ["jay.png", "jay01.png"],
  });
  const [input, setInput] = useState("");

  const changeHandle = (e) => {
    setInput(e.target.value);
  };

  const clickHandle = () => {
    setUser((prev) => ({ ...prev, name: input }));
  };
  return (
    <div>
      <h3>사용자:</h3>
      <input onChange={changeHandle} placeholder="새로운 이름을 써주세요" />
      <button onClick={clickHandle}>수정하기</button>
      <span>새로운 이름:{user.name}</span>
    </div>
  );
};

export default App;
