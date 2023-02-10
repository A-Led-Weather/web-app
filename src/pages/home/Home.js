import Temperature from "../../graphique/temperature/Temperature";
import Humidity from "../../graphique/humidite/Humidite";
import IndexGraph from "../../graphique/IndexGraph";
import {useEffect, useState} from "react";
import Releve from "../releve/Releve";
import HomePage from "./HomePage";
import "@fontsource/montserrat";
import Spacer15 from "../../components/ui/Spacer15";

import styles from './Home.module.css'

const Home = () => {

    const [selected, setSelected] = useState("homepage");

    const displayHome = () => {
        setSelected("homepage");
    };

    const displayGraph = () => {
        setSelected("graph");
    };

    const displayReleve = () => {
        setSelected("releve");
    };

    return (
        <>
            <section className="container d-flex justify-content-start align-items-center gap-5 mt-5 p-0 mb-3">
                <a
                    onClick={displayHome}
                    style={{
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        cursor: "pointer"
                    }}
                >
                    &nbsp;&nbsp;&nbsp;Météo
                </a>

                <a
                    onClick={displayGraph}
                    style={{
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        cursor: "pointer"
                    }}
                >
                    Graphiques
                </a>

                <a
                    onClick={displayReleve}
                    style={{
                        fontFamily: "Montserrat",
                        fontWeight: "700",
                        cursor: "pointer"
                    }}
                >
                    Relevés
                </a>
            </section>
            {selected === "homepage" && <HomePage />}
            {selected === "graph" && (
                <div>
                    <IndexGraph />
                <div
                    className={styles.wrapperHome}
                    style={{

                    }}
                >
                    <Temperature />
                    <Humidity />
                    <Spacer15 />
                </div>
                </div>
            )}
            {selected === "releve" && <Releve />}
        </>
    );
};

export default Home;