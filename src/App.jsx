import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* Header  */}
      <Header />
      {/* App Body  */}
      <div className="app__body">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed  */}

      {/* Widgets  */}
      </div>
    </div>
  );
}

export default App;
