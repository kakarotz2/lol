import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.scss';

const data = [
    { name: 'Tháng 1', Total: 1000 },
    { name: 'Tháng 2', Total: 500 },
    { name: 'Tháng 3', Total: 800 },
    { name: 'Tháng 4', Total: 600 },
    { name: 'Tháng 5', Total: 500 },
    { name: 'Tháng 6', Total: 200 },
    { name: 'Tháng 7', Total: 300 },
    { name: 'Tháng 8', Total: 100 },
    { name: 'Tháng 9', Total: 100 },
    { name: 'Tháng 10', Total: 0 },
    { name: 'Tháng 11', Total: 0 },
    { name: 'Tháng 12', Total: 0 },
];
function Chart() {
    return (
        <div className="chart">
            <div className="title">Last 6 Month</div>
            <ResponsiveContainer width="100%" height="100%" aspect={2.5}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="10%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="90%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="gray" />
                    {/* <YAxis /> */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
