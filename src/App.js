import styles from './App.module.css'

import Board from "./pages/Board";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">

        <Navbar />

        <Board />
    </div>
  );
}

export default App;
