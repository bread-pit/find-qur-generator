import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-background">
        <div className="main-container">
          <LandingPage />
        </div>
      </div>
    </>
  );
}

export default App;
