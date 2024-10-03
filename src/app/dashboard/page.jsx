"use client";

import Card from "@/components/common/Card/card";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
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
const Dashboard = () => {
  return (
    <main className=" bg-[#EDF4FC]">
      <div className="max-w-[1400px] mx-auto py-8">
        <div className="py-4 ">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-5 md:gap-3  md:p-4  px-4">
            <Card
              title={"Click"}
              value={"644.876"}
              color={"bg-slate-200 text-slate-500"}
            />
            <Card
              title={"Impression"}
              value={"644.876"}
              color={"bg-rose-200 text-rose-500"}
            />
            <Card
              title={"Impression"}
              value={"644.876"}
              color={"bg-blue-200 text-blue-500"}
            />
            <Card
              title={"Impression"}
              value={"644.876"}
              color={"bg-amber-200 text-amber-500"}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-5 md:gap-5 md:px-6 sm:px-4">
          <div className="md:p-4  w-full md:h-[450px] h-[200px] bg-white md:rounded-xl">
            <ResponsiveContainer className="mb-5">
              <AreaChart
                width={600}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#10b981"
                  fill="#a7f3d0"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="md:p-4 bg-white md:rounded-xl w-full md:h-[450px] h-[200px]">
            <ResponsiveContainer>
              <AreaChart
                width={600}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  strokeWidth={2}
                  dataKey="uv"
                  stroke="#f59e0b"
                  fill="#fde68a"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
