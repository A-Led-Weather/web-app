import styles from './App.module.css'
import "@fontsource/poppins";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import {useState} from "react";
import IndexLogin from "./components/user/IndexLogin";
import logo from "./assets/logo/logo2.png";


function App() {

    const [selected, setSelected] = useState("homepage");

    const displayHome = () => {
        setSelected("homepage");
    }

    const displayLogin = () => {
        setSelected("indexlogin");
    }

    return (
        <div className={styles.app}>
            <section className="container-fluid">
                <div>
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-sm d-flex justify-content-start align-items-center">
                                <img src={logo} width={100} height={100}
                                     onClick={displayHome}
                                />
                            </div>
                            <div className="col-sm d-flex justify-content-end align-items-center"
                                 style={{
                                     fontFamily: 'Futura',
                                 }}
                            >
                                <div className="col-sm d-flex justify-content-end align-items-center gap-5">
                                    <a
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Language
                                    </a>
                                    <a
                                        onClick={displayLogin}
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Connexion
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {selected === "homepage" && <Home/>}
            {selected === "indexlogin" && <IndexLogin/>}
            <Footer/>
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
