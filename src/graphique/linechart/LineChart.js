import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: '6h',
        temperature: 3,
        humidite: 30,
        amt: 2400,
    },
    {
        name: '10h',
        temperature: 10,
        humidite: 35,
        amt: 2210,
    },
    {
        name: '12h',
        temperature: 11,
        humidite: 45,
        amt: 2290,
    },
    {
        name: '16h',
        temperature: 13,
        humidite: 17,
        amt: 2000,
    },
    {
        name: '18h',
        temperature: 9,
        humidite: 40,
        amt: 2181,
    },
    {
        name: '22h',
        temperature: 4,
        humidite: 20,
        amt: 2500,
    },
    {
        name: '00h',
        temperature: 1,
        humidite: 18,
        amt: 2100,
    },
];

export default class LineCharts extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    render() {
        return (
            <ResponsiveContainer width="70%" height="70%">
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
                    <Line type="monotone" dataKey="humidite" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
