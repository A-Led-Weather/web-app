import {useEffect, useState} from "react";
import axios from "axios";

const Home = () => {

    const baseUrl = 'https://aled-weather.fr:8080/reports';

    const fetchTemp = () => {
        axios.get('https://aled-weather.fr:8080/reports', {
            headers : {
                Authorization : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJsZW8ucGFpbGxhcmRAZ21haWwuY29tIiwiaWF0IjoxNjc0NDgzNTQzfQ.BqVeXqhb9LNgVKwq8QJDsudNkEWnKoUkYkQuQEOWfGE',
                ContentType : 'application/json'
            }
        })
            .then(response => {
                const data = response.data;
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return(
        <>
            <button onClick={fetchTemp}>

            </button>
        </>
    )
}

export default Home