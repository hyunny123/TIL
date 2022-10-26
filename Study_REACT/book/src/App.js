import { Route, Routes } from "react-router-dom";
import "./App.css";
import Component from "./Component";
import Counter from "./Counter";
import Event from "./Event";
import State from "./Use/State";
import Ref from "./Use/Ref";
import Effect from "./Use/Effect";

function App() {
  return (
    <Routes>
      <Route path="/favorite" element={<Component />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/event" element={<Event />} />
      <Route path="/state" element={<State />} />
      <Route path="/ref" element={<Ref />} />
      <Route path="/effect" element={<Effect />} />
    </Routes>
  );
}

export default App;
