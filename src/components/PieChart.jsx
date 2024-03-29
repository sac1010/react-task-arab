import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cell, Legend, Pie, ResponsiveContainer, PieChart } from "recharts";

const COLORS = ["#a8ddb5", "#87c994", "#6cae75", "#4e934f", "#3c7326"];
const PieChartContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/pie-chart`
    );
    console.log(res.data);
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg w-full h-full flex justify-center items-center">
      {loading && (
        <div className="flex w-full h-full justify-center items-center">
          <div className="w-8 h-8 bg-[#171c42] animate-spin"></div>
        </div>
      )}
      {!loading && (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              dataKey="value"
              isAnimationActive
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              align="center"
              layout="vertical"
              payload={data.map((entry, index) => ({
                value: entry.label,
                type: "circle",
                color: COLORS[index % COLORS.length],
              }))}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PieChartContainer;
