import "./App.less";

import Board from "./components/Board";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <div className="title">BUDGE-IT!!</div>
        <Navbar />
      </header>

      <Board />
    </>
  );
}

export default App;
