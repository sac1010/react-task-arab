import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  { x: 'Jan', y: 10 },
  { x: 'Feb', y: 15 },
  { x: 'Mar', y: 8 },
  { x: 'Apr', y: 12 },
  { x: 'May', y: 18 },
]

const Graph = () => {
  return (
    <ResponsiveContainer className={"bg-white p-10 rounded-lg shadow-lg"}>
      <LineChart width={500} height={500} data={data} margin={{}} >
        <CartesianGrid strokeDashoffset={"3 3"}/>
        <XAxis dataKey={"x"}/>
        <YAxis dataKey={"y"}/>
        <Line type={"monotone"} dataKey={"y"}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
