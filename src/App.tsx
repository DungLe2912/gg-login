import { useEffect } from "react";
import "./App.css";
import LoginButton from "./LoginButton";
function App() {
  useEffect(() => {
    // window.open("https://www.w3schools.com", "_blank");
    window.open("http://stackoverflow.com", "Stack_Overflow", "location=0");
  }, []);
  return (
    <div className="App">
      <LoginButton />
    </div>
  );
}

export default App;
