import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const resultData = [
    { "id": 1, "name": "Aarav", "physics": 28, "chemistry": 52, "math": 90 },
    { "id": 2, "name": "Ishita", "physics": 25, "chemistry": 50, "math": 68 },
    { "id": 3, "name": "Rohan", "physics": 28, "chemistry": 51, "math": 95 },
    { "id": 4, "name": "Meera", "physics": 22, "chemistry": 55, "math": 80 },
    { "id": 5, "name": "Arjun", "physics": 20, "chemistry": 56, "math": 62 },
    { "id": 6, "name": "Sneha", "physics": 25, "chemistry": 55, "math": 92 },
    { "id": 7, "name": "Kabir", "physics": 25, "chemistry": 58, "math": 61 },
    { "id": 8, "name": "Ananya", "physics": 31, "chemistry": 67, "math": 93 },
    { "id": 9, "name": "Rahul", "physics": 34, "chemistry": 69, "math": 77 },
    { "id": 10, "name": "Diya", "physics": 38, "chemistry": 62, "math": 70 }
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

            {/* PieChart */}
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

            <AreaChart
                data={resultData}
                height={'500px'}
                width={'800px'} responsive>
                <CartesianGrid strokeDasharray={"3 3"}></CartesianGrid>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend/>

                <Area type={"monotone"} dataKey={"physics"} stackId="1" stroke='#8884d8' fill='#8884d8'></Area>
                <Area type={"monotone"} dataKey={"chemistry"} stackId={"1"} stroke='#82ca9d' fill='#82ca9d'></Area>
                <Area type={"monotone"} dataKey={"math"} stackId={"1"} stroke='#ffc658' fill='#ffc658'></Area>
            </AreaChart>

        </div>
    );
};

export default ResultsChart;