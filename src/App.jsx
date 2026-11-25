import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import R4Component from "./r4/r4";

function App() {
  const [count, setCount] = useState(0);

  return <R4Component />;
}

export default App;
