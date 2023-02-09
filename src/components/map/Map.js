import React, {useEffect} from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import axios from "axios";
import {useState} from "react";

const baseUrl = 'https://aled-weather.fr:8080/locations/lyon'

const containerStyle = {
    width: '80vw',
    height: '400px'
};


function Map() {

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(baseUrl, {
                    headers: {
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJsZW8ucGFpbGxhcmRAZ21haWwuY29tIiwiaWF0IjoxNjc0NDgzNTQzfQ.BqVeXqhb9LNgVKwq8QJDsudNkEWnKoUkYkQuQEOWfGE',
                    }
                });
                const data = response.data;
                const latitude = data[0].latitude
                const longitude = data[0].longitude
                console.log(data)
                console.log(latitude)
                console.log(longitude)
                setLatitude(
                    latitude
                )
                setLongitude(
                    longitude
                )
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    const center = {
        lat: latitude,
        lng: longitude
    };

    return (
        <section className="container-fluid p-0">
            <div className="container d-flex justify-content-center align-items-center flex-column ">
                <h1>
                    Localisations de nos sondes
                </h1>
                <span className="mt-5"></span>
                <LoadScript
                    googleMapsApiKey="AIzaSyCwMETlBd2KNJqzibsRSTJ3Ah2H75jnIak"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <Marker
                            position={center}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        </section>
    )
}

export default React.memo(Map)
