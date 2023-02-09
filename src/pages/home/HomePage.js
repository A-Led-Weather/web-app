import Spacer15 from "../../components/ui/Spacer15";
import {useEffect, useState} from "react";
import axios from "axios";
import Map from "../../components/map/Map";


const HomePage = () => {

    const [temp, setTemp] = useState();
    const [loc, setLoc] = useState();
    const [humidite, setHumidite] = useState();

    const baseUrl = 'http://172.20.10.2:8080/reports';

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
            <section className="container-fluid"
                     style={{
                         background: "#F7FAFB"
                     }}>
                <div className="container d-flex justify-content-start align-items-start flex-column mt-5">
                    <h1>
                        Bienvenue, Enzo 👋
                    </h1>

                    <p>
                        Merci d'utiliser nos services
                    </p>
                    <h4 className="mt-5">
                        Mardi. 7 Février
                    </h4>
                    <div className="container d-flex justify-content-center align-items-center gap-2 mt-5">
                        <div className="row">
                            <div className="col-sm">
                                <div className="col-sm">
                                    <div className="card text-center"
                                         style={{
                                             width: '25vw'
                                         }}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title">Température</h5>
                                            <p className="card-text">Il fait actuellement {temp}° à {loc}.</p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    Dernière actualisation il y a 3 minutes.
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card text-center"
                                     style={{
                                         width: '25vw'
                                     }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">Humidité</h5>
                                        <p className="card-text">Le taux d'humidité est de {humidite}% à {loc}.</p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                Dernière actualisation il y a 3 minutes.
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Spacer15/>
                    <Map/>
                    <Spacer15/>
                    <Spacer15/>
                </div>
            </section>
        </>
    )
}

export default HomePage