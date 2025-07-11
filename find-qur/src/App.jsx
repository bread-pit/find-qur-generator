import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menu from "./components/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-background">
        <div className="main-container">
          <Menu />
        </div>
      </div>
    </>
  );
}

export default App;
