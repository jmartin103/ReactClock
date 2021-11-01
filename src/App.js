import "./styles.css";

import Clock from "./components/Clock";
import Greeting from "./components/Greeting";

export default function App() {
  return (
    <div className="App">
      <Greeting name="John" />
      <Clock />
    </div>
  );
}
