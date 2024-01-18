import React from "react";
import { Cell, Legend, Pie, ResponsiveContainer, PieChart } from "recharts";

const pieChartData = [
  { label: "Category A", value: 30 },
  { label: "Category B", value: 20 },
  { label: "Category C", value: 15 },
  { label: "Category D", value: 25 },
  { label: "Category E", value: 10 },
];

const COLORS = [
  "#a8ddb5",
  "#87c994",
  "#6cae75",
  "#4e934f",
  "#3c7326",
]
const PieChartContainer = () => {
  return (
    <div
      className="bg-white p-10 rounded-lg shadow-lg w-full h-full"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
            isAnimationActive
          >
            {pieChartData.map((entry, index) => (
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
            payload={pieChartData.map((entry, index) => ({
              value: entry.label,
              type: "circle",
              color: COLORS[index % COLORS.length],
            }))}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartContainer;
