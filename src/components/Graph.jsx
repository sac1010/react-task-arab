import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";


const Graph = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    const res = await axios.get("https://react-task-arab.vercel.app/api/graph");
    console.log(res.data);
    setData(res.data)
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ResponsiveContainer className={"bg-white p-10 rounded-lg shadow-lg"}>
      <LineChart width={500} height={500} data={data} margin={{}}>
        <CartesianGrid strokeDashoffset={"3 3"} />
        <XAxis dataKey={"x"} />
        <YAxis dataKey={"y"} />
        <Line type={"monotone"} dataKey={"y"} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
