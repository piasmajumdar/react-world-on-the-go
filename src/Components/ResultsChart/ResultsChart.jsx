import React from 'react';
import { Legend, Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
    { "id": 1, "name": "Aarav", "physics": 78, "chemistry": 82, "math": 90 },
    { "id": 2, "name": "Ishita", "physics": 65, "chemistry": 70, "math": 68 },
    { "id": 3, "name": "Rohan", "physics": 88, "chemistry": 91, "math": 95 },
    { "id": 4, "name": "Meera", "physics": 72, "chemistry": 75, "math": 80 },
    { "id": 5, "name": "Arjun", "physics": 60, "chemistry": 66, "math": 62 },
    { "id": 6, "name": "Sneha", "physics": 85, "chemistry": 89, "math": 92 },
    { "id": 7, "name": "Kabir", "physics": 55, "chemistry": 58, "math": 61 },
    { "id": 8, "name": "Ananya", "physics": 91, "chemistry": 87, "math": 93 },
    { "id": 9, "name": "Rahul", "physics": 74, "chemistry": 79, "math": 77 },
    { "id": 10, "name": "Diya", "physics": 68, "chemistry": 72, "math": 70 }
];

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <Line dataKey={'physics'}></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Legend></Legend>
            </LineChart>

        </div>
    );
};

export default ResultsChart;