import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";

const baseUrl = 'http://172.20.10.2:8080/reports';

const Temperature = () => {
    const [temperatures, setTemperatures] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(baseUrl, {
                    headers: {
                        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiJsZW8ucGFpbGxhcmRAZ21haWwuY29tIiwiaWF0IjoxNjc0NDgzNTQzfQ.BqVeXqhb9LNgVKwq8QJDsudNkEWnKoUkYkQuQEOWfGE',
                    }
                });

                const data = response.data;
                const temperatureData = data.map(item => item.temperature);
                const dateData = data.map(item => item.dateTime);

                setTemperatures(temperatureData);
                setDates(dateData);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);

    const data = temperatures.map((temperature, index) => ({
        name: dates[index],
        temperature,
        amt: 2400,
    }));

    return (
        <ResponsiveContainer width="45%" height="90%">
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
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Temperature;