import React, { useState } from "react";

import useFetch from "./hooks/useFetch";
// import "./App.css";
const baseUrl = "https://jsonplaceholder.typicode.com";

const App = () => {
  const { data: userData } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");
  return (
    <div className="container">
      {/* <div className="bigbox">
        <div className="smallbox" />
      </div> */}
      <h1>dataBase</h1>
      <h2>User</h2>
      {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
      <h2>Post</h2>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
    </div>
  );
};

export default App;
