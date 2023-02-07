import styles from './App.module.css'
import "@fontsource/poppins";
import Home from "./pages/home/Home";
import LineCharts from "./graphique/linechart/LineChart";
import Register from "./components/user/register/Register";
import Spacer15 from "./components/ui/Spacer15";

function App() {
  return (
    <div className={styles.app}>
        <Register />
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
