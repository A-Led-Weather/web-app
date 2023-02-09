import Temperature from "../../graphique/temperature/Temperature";
import Humidity from "../../graphique/humidite/Humidite";
import IndexGraph from "../../graphique/IndexGraph";
import {useEffect, useState} from "react";
import Releve from "../releve/Releve";
import HomePage from "./HomePage";
import "@fontsource/montserrat";

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
            <section className="container d-flex justify-content-start align-items-center gap-5 mt-5 p-0">
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
                    style={{
                        width: "100vw",
                        height: "60vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        background: "#F7FAFB"
                    }}
                >
                    <Temperature />
                    <Humidity />
                </div>
                </div>
            )}
            {selected === "releve" && <Releve />}
        </>
    );
};

export default Home;