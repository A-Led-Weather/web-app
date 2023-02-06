import styles from './App.module.css'

import Board from "./pages/Board";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import "@fontsource/poppins";
import Home from "./pages/Home";

function App() {
  return (
    <div className={styles.app}>
        <Home />
    </div>
  );
}

export default App;
