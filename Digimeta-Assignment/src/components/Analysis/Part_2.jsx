import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1月", 销售量: 800 },
  { name: "2月", 销售量: 850 },
  { name: "3月", 销售量: 1200 },
  { name: "4月", 销售量: 550 },
  { name: "5月", 销售量: 1000 },
  { name: "6月", 销售量: 250 },
  { name: "7月", 销售量: 450 },
  { name: "8月", 销售量: 700 },
  { name: "9月", 销售量: 600 },
  { name: "10月", 销售量: 1100 },
  { name: "11月", 销售量: 750 },
  { name: "12月", 销售量: 1100 },
];

const list = [
  {
    id: 1,
    name: "工专路 0 号店",
    count: "323,234",
  },
  {
    id: 2,
    name: "工专路 1 号店",
    count: "323,234",
  },
  {
    id: 3,
    name: "工专路 2 号店",
    count: "323,234",
  },
  {
    id: 4,
    name: "工专路 3 号店",
    count: "323,234",
  },
  {
    id: 5,
    name: "工专路 4 号店",
    count: "323,234",
  },
  {
    id: 6,
    name: "工专路 5 号店",
    count: "323,234",
  },
  {
    id: 7,
    name: "工专路 6 号店",
    count: "323,234",
  },
];

const Part_2 = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  return (
    <div className="md:w-[97%] mx-5 mt-2 bg-white rounded-sm">
      <div className="flex w-full justify-between border-b">
        <span className="flex pl-5 pt-5 text-xs md:text-md">
          <p
            className={`cursor-pointer hover:text-blue-500 ${
              first && "text-blue-500 border-b-2 border-blue-500 pb-5"
            }`}
            onClick={() => {
              setFirst(true);
              setSecond(false);
            }}
          >
            销售额
          </p>
          <p
            className={`ml-2 md:ml-5 cursor-pointer hover:text-blue-500 ${
              second && "text-blue-500 border-b-2 border-blue-500 pb-5"
            }`}
            onClick={() => {
              setFirst(false);
              setSecond(true);
            }}
          >
            访问量
          </p>
        </span>
        <span className="flex px-3 pt-5 pb-3 items-center text-xs md:text-md">
          <p className="mx-2 hover:text-blue-500 cursor-pointer ">今日</p>
          <p className="mx-2 hover:text-blue-500 cursor-pointer">本周</p>
          <p className="mx-2 hover:text-blue-500 cursor-pointer">本月</p>
          <p className="mx-2 hover:text-blue-500 cursor-pointer">本年</p>
          <div className="mr-2 pr-3 md:pr-0">
            <Space direction="vertical" style={{ width: "100%" }}>
              <DatePicker.RangePicker
                status="primary"
                style={{ width: "100%" }}
              />
            </Space>
          </div>
        </span>
      </div>

      <div className="flex flex-wrap mt-5">
        <div className="w-full md:w-2/3">
          <ResponsiveContainer width="90%" height={350} >
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="销售量" fill="#3b82f6" barSize={35} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/3 md:ml-0 px-4">
          <p className="text-gray-700">门店销售额排名</p>
          {list.map((item) => (
            <div key={item.id} className="flex text-gray-700 mt-5">
              <p
                className={
                  item.id === 1 || item.id === 2 || item.id === 3
                    ? "text-white bg-black rounded-full w-5 h-5 pl-1"
                    : "pl-1"
                }
              >
                {item.id}
              </p>
              <p className="ml-4">{item.name}</p>
              <p className="ml-16">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Part_2;
