import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../Graph.module.css'

const baseUrl = 'https://aled-weather.fr:8080/reports';

const Humidity = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseUrl, {
                    headers: {
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJsZW8ucGFpbGxhcmRAZ21haWwuY29tIiwiaWF0IjoxNjc0NDgzNTQzfQ.BqVeXqhb9LNgVKwq8QJDsudNkEWnKoUkYkQuQEOWfGE',
                    },
                });

                setData(response.data.map(item => ({
                    name: item.dateTime,
                    humidite: item.humidity,
                })));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <ResponsiveContainer width="45%" height="60%" className={styles.graph}>
            <LineChart
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="humidite" stroke="#8fd884" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Humidity;
