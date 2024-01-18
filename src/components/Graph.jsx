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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL || "http://localhost:3001"}/api/graph`
    );
    console.log(res.data);
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ResponsiveContainer className={"bg-white p-10 rounded-lg shadow-lg"}>
      {loading && ( 
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-8 h-8 bg-[#171c42] animate-spin"></div>
        </div>
      )}
      {!loading && (
        <LineChart width={500} height={500} data={data} margin={{}}>
          <CartesianGrid strokeDashoffset={"3 3"} />
          <XAxis dataKey={"x"} />
          <YAxis dataKey={"y"} />
          <Line type={"monotone"} dataKey={"y"} />
        </LineChart>
      )}
    </ResponsiveContainer>
  );
};

export default Graph;
