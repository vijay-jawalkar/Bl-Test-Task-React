import React from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { FaArrowUp } from "react-icons/fa6";

export function BoxChart({ color, count, title, percentage }) {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 3400,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 2808,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="flex flex-col justify-around h-full w-full px-5 py-1 bg-white">
      {/* chart info */}
      <div className="w-full h-full px-auto">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data}>
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke={color}
              strokeWidth={2}
              dot={false}
              className="chart-line"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* box info */}
      <div className="flex justify-between items-start">
        <div>
          <p className=" font-semibold text-xl" style={{ color: color }}>
            {" "}
            {count}{" "}
          </p>
          <p className="text-zinc-800 font-semibold relative bottom-2">
            {" "}
            {title}
          </p>
        </div>

        <div className="text-cyan-500 text-sm font-semibold flex justify-center items-center gap-1">
          <p style={{ color: color }}> {percentage} </p>
          <p className="text-xs" style={{ color: color }}>
            {" "}
            <FaArrowUp />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
