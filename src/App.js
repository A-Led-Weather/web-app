import styles from './App.module.css'
import "@fontsource/poppins";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={styles.app}>
        <Navbar />
        <Home />
        <Footer />
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin></script>

        <script
            src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
            crossOrigin></script>

        <script
            src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossOrigin></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
}

export default App;
