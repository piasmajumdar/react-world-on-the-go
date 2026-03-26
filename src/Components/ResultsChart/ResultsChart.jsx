import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


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

const businessData = [
    { "name": "Restaurants", "value": 25 },
    { "name": "Grocery Stores", "value": 15 },
    { "name": "Clothing Shops", "value": 20 },
    { "name": "Electronics", "value": 18 },
    { "name": "Pharmacies", "value": 12 },
    { "name": "Gyms & Fitness", "value": 10 }
];

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <Line dataKey={'physics'} ></Line>
                <Line dataKey={'chemistry'} stroke='red'></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Legend></Legend>
                <Tooltip></Tooltip>
            </LineChart>

            <BarChart style={{ width: '1000px', height: '500px' }} data={resultData}>
                <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>

                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey={'physics'} fill='orange'></Bar>
                <Bar dataKey={'chemistry'} fill='green'></Bar>
                <Bar dataKey={'math'} fill='blue'></Bar>

            </BarChart>

            <div className='flex'>
                <PieChart height={500} width={500}>
                    <Pie data={businessData} dataKey={"value"} cx="50%" cy={"50%"} label>
                    </Pie>
                    <Tooltip></Tooltip>
                    <Legend></Legend>

                </PieChart>
                <PieChart width={500} height={500}>
                    <Pie
                        data={businessData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>

        </div>
    );
};

export default ResultsChart;