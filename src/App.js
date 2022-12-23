import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <div className="float-right mt-3 mr-3">
        <button className="btn btn-success" onClick={toggleTheme}>Switch Theme</button>
      </div>
      <Posts theme={theme} />
    </div>
  );
}

export default App;
