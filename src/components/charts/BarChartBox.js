import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GoDotFill } from "react-icons/go";

export function BarChartBox() {
  const data = [
    {
      name: "01",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "02",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "03",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "04",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "05",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "06",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "07",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "08",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "09",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "10",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "11",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  //   const customYAxisTicks = [0, 20, 40, 60, 80, 100];

  return (
    <div className="flex flex-col justify-between gap-5 h-full w-full px-5  bg-white">
      {/* box info */}
      <div className="flex justify-between items-start py-3">
        <div>
          <p className="text-lg lg:text-xl font-semibold text-zinc-700">
            {" "}
            Covid 19 Statistics
          </p>
          <p className="text-xs lg:text-sm font-semibold text-gray-500">
            {" "}
            as of 05 april 2020 09:41 PM
          </p>
        </div>

        <div className="flex gap-2 text-xs lg:text-sm">
          <div className="flex gap-1 items-center">
            <p className="text-pink-600">
              {" "}
              <GoDotFill />
            </p>
            <p className="text-zinc-500"> Death </p>
          </div>

          <div className="flex gap-1 items-center">
            <p className="text-lime-600">
              {" "}
              <GoDotFill />
            </p>
            <p className="text-zinc-500"> Recovery </p>
          </div>
        </div>
      </div>

      {/* chart info */}
      <div className="w-full h-full px-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 40,
              left: 40,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="rgb(244 63 94)"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="rgb(163 230 53)"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
