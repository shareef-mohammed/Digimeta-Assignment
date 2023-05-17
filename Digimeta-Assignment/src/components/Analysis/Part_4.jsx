import React from "react";
import ProgressComponent from "./ProgressComponent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    stores: 0,
    progress: 40,
  },
  {
    stores: 2,
    progress: 70,
  },
  {
    stores: 3,
    progress: 80,
  },
  {
    stores: 4,
    progress: 80,
  },
  {
    stores: 1,
    progress: 60,
  },
  {
    stores: 5,
    progress: 80,
  },
  {
    stores: 6,
    progress: 40,
  },
  {
    stores: 7,
    progress: 10,
  },
  {
    stores: 8,
    progress: 60,
  },
];

const GraphData = [
  { name: "06:30", series1: 46, series2: 51 },
  { name: "07:00", series1: 77, series2: 31 },
  { name: "07:30", series1: 47, series2: 51 },
  { name: "08:00", series1: 15, series2: 103 },
  { name: "08:30", series1: 22, series2: 96 },
  { name: "09:00", series1: 68, series2: 74 },
  { name: "09:30", series1: 109, series2: 13 },
  { name: "10:00", series1: 28, series2: 93 },
];

const Part_4 = () => {
  return (
    <div className="md:w-[97%] mx-5 mt-[550px] sm:mt-[450px] md:mt-4 bg-white mb-4">
      <div className="flex overflow-y-scroll scrollbar-hide">
        {data.map((item) => (
          <ProgressComponent
            progress={item.progress}
            key={item.stores}
            stores={item.stores}
          />
        ))}
      </div>
      <div>
        <ResponsiveContainer width="98%" height={300}>
          <LineChart data={GraphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="series1" stroke="#8884d8" />
            <Line type="monotone" dataKey="series2" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Part_4;
