import Map from "../../components/map/Map";
import {useEffect, useState} from "react";
import axios from "axios";

const Releve = () => {

    const [tempHourly, setTempHourly] = useState();
    const [humiditeHourly, setHumiditeHourly] = useState();

    const [loc, setLoc] = useState();

    const [tempDaily, setTempDaily] = useState();
    const [humiditeDaily, setHumiditeDaily] = useState();

    const baseUrlDaily = 'https://aled-weather.fr:8080/reports/lyon/daily';

    const baseUrlHourly = 'https://aled-weather.fr:8080/reports/lyon/hourly';

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(baseUrlDaily, {
                    headers: {
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJsZW8ucGFpbGxhcmRAZ21haWwuY29tIiwiaWF0IjoxNjc0NDgzNTQzfQ.BqVeXqhb9LNgVKwq8QJDsudNkEWnKoUkYkQuQEOWfGE',
                    }
                });
                const data = response.data;
                console.log(data)
                const temperatureDaily = data.temperature;
                const locationName = data.locationName;
                const humiditeDaily = data.humidity
                setHumiditeDaily(
                    humiditeDaily
                )
                setLoc(locationName);
                setTempDaily(temperatureDaily);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(baseUrlHourly, {
                    headers: {
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJsZW8ucGFpbGxhcmRAZ21haWwuY29tIiwiaWF0IjoxNjc0NDgzNTQzfQ.BqVeXqhb9LNgVKwq8QJDsudNkEWnKoUkYkQuQEOWfGE',
                    }
                });
                const data = response.data;
                console.log(data)
                const temperatureHourly = data.temperature;
                const locationName = data.locationName;
                const humiditeHourly = data.humidity
                setHumiditeHourly(
                    humiditeHourly
                )
                setTempHourly(
                    temperatureHourly
                );
                setLoc(locationName);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    return(
        <section className="container-fluid">
            <div className="container d-flex justify-content-center align-items-center flex-column"
            style={{
                height : '65vh'
            }}>
                <h1 className="mt-5">
                    Moyenne des relevés de la journée
                </h1>
                <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
                    <div className="col-sm">
                        <div className="card text-center"
                        >
                            <div className="card-body">
                                <h5 className="card-title">Température</h5>
                                <p className="card-text">La moyenne de température sur la journée <br />
                                    à {loc} est de {tempHourly}°.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Dernière actualisation il y a 3 minutes. Merci d'utiliser les services d'ALED-Weather.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card text-center"
                        >
                            <div className="card-body">
                                <h5 className="card-title">Humidité</h5>
                                <p className="card-text">La moyenne d'humidité sur la journée <br />
                                    à {loc} est de {humiditeDaily}%.</p>
                                <p className="card-text">
                                    <small className="text-muted">
                                        Dernière actualisation il y a 3 minutes. Merci d'utiliser les services d'ALED-Weather.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Releve