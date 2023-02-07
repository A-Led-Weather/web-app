import {useEffect, useState} from "react";
import axios from "axios";

import Navbar from "../../components/navbar/Navbar";
import Navlink from "../../components/navlink/Navlink";
import Spacer15 from "../../components/ui/Spacer15";

import styles from './Home.module.css'
import LineCharts from "../../graphique/linechart/LineChart";

const Home = () => {

    const [temp, setTemp] = useState();
    const [loc, setLoc] = useState();
    const [humidite, setHumidite] = useState();

    const baseUrl = 'https://aled-weather.fr:8080/reports';

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(baseUrl, {
                    headers: {
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJsZW8ucGFpbGxhcmRAZ21haWwuY29tIiwiaWF0IjoxNjc0NDgzNTQzfQ.BqVeXqhb9LNgVKwq8QJDsudNkEWnKoUkYkQuQEOWfGE',
                    }
                });
                const data = response.data;
                const temperature = data[0].temperature;
                const locationName = data[0].locationName;
                const humidite = data[0].humidity
                setHumidite(
                    humidite
                )
                setLoc(locationName);
                setTemp(temperature);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    return (
        <>
            <Navbar/>
            <Navlink/>
            <Spacer15/>
            <section className="container-fluid"
                     style={{
                         background: "#F7FAFB"
                     }}>
                <div className="container d-flex justify-content-start align-items-start flex-column">
                    <h1>
                        Bienvenue, Enzo 👋
                    </h1>

                    <p>
                        Merci d'utiliser nos services
                    </p>
                    <Spacer15/>
                    <h4>
                        Mardi. 7 Février
                    </h4>
                    <br />
                    <div className="container d-flex justify-content-center align-items-center gap-2">
                        <div className="row">
                            <div className="col-sm">
                                <div className="card p-3">
                                    <blockquote className="blockquote card-body">
                                        <footer className="blockquote-footer">
                                            <small className="text-muted">
                                                Température à <span /> {loc}
                                            </small>
                                        </footer>
                                        <p>
                                            {
                                                temp
                                            }
                                            °
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card p-3">
                                    <blockquote className="blockquote card-body">
                                        <footer className="blockquote-footer">
                                            <p>
                                                Humiditée à {loc}
                                            </p>
                                        </footer>
                                        <p>
                                            {
                                                temp
                                            }
                                            °
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card p-3">
                                    <blockquote className="blockquote card-body">
                                        <footer className="blockquote-footer">
                                            <p>
                                                Humiditée à {loc}
                                            </p>
                                        </footer>
                                        <p>
                                            {
                                                temp
                                            }
                                            °
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Spacer15/>
                    <LineCharts />
                </div>
            </section>
        </>
    )
}

export default Home