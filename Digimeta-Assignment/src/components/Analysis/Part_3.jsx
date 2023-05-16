import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell, Label } from "recharts";
import {
  AiOutlineEllipsis,
  AiOutlineInfoCircle,
  AiFillCaretUp,
  AiFillCaretDown,
} from "react-icons/ai";
import { Table } from "antd";
import "./Table.css";

const data = [
  { name: "", uv: 400, pv: 2400, amt: 2400 },
  { name: "", uv: 307, pv: 1398, amt: 2210 },
  { name: "", uv: 1000, pv: 9800, amt: 2290 },
  { name: "", uv: 150, pv: 3908, amt: 2000 },
  { name: "", uv: 900, pv: 4800, amt: 2181 },
  { name: "", uv: 239, pv: 3800, amt: 2500 },
  { name: "", uv: 534, pv: 4300, amt: 2100 },
  { name: "", uv: 454, pv: 4300, amt: 2100 },
  { name: "", uv: 153, pv: 4300, amt: 2100 },
  { name: "", uv: 349, pv: 4300, amt: 2100 },
  { name: "", uv: 899, pv: 4300, amt: 2100 },
  { name: "", uv: 409, pv: 4300, amt: 2100 },
  { name: "", uv: 709, pv: 4300, amt: 2100 },
];

const dataSource = [
  { 排名: "1", 搜索关键词: "搜索关键词-0", 用户数: 593, 周涨幅: "74%" },
  { 排名: "2", 搜索关键词: "搜索关键词-1", 用户数: 341, 周涨幅: "15%" },
  { 排名: "3", 搜索关键词: "搜索关键词-2", 用户数: 379, 周涨幅: "26%" },
  { 排名: "4", 搜索关键词: "搜索关键词-3", 用户数: 538, 周涨幅: "21%" },
  { 排名: "5", 搜索关键词: "搜索关键词-4", 用户数: 349, 周涨幅: "25%" },
  { 排名: "6", 搜索关键词: "搜索关键词-5", 用户数: 529, 周涨幅: "30%" },
  { 排名: "7", 搜索关键词: "搜索关键词-6", 用户数: 433, 周涨幅: "64%" },
  { 排名: "8", 搜索关键词: "搜索关键词-7", 用户数: 533, 周涨幅: "40%" },
  { 排名: "9", 搜索关键词: "搜索关键词-8", 用户数: 259, 周涨幅: "55%" },
];

const columns = [
  { title: "排名", dataIndex: "排名", key: "排名" },
  {
    title: "搜索关键词",
    dataIndex: "搜索关键词",
    key: "name",
    render: (text) => <span style={{ color: "#3b82f6" }}>{text}</span>,
  },
  {
    title: "用户数",
    dataIndex: "用户数",
    key: "用户数",
    sorter: (a, b) => a.age - b.age,
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "周涨幅",
    dataIndex: "周涨幅",
    key: "周涨幅",
    sorter: (a, b) => a.age - b.age,
    sortDirections: ["ascend", "descend"],
  },
];

const pageSize = 5;

const paginationConfig = {
  pageSize: pageSize,
  hideOnSinglePage: true,
  showSizeChanger: false,
  total: dataSource.length,
};

const DonutData = [
  { name: "C", value: 4544 },
  { name: "D", value: 3321 },
  { name: "E", value: 3113 },
  { name: "F", value: 2341 },
  { name: "A", value: 1231 },
  { name: "B", value: 1231 },
];

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ef4444",
  "#facc15",
  "#10b981",
];

const Part_3 = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  return (
    <div className="h-[30rem] w-[97%] h-[550px] ml-5 mt-4 flex flex-wrap justify-between ">
      <div className="w-full md:w-[49%] bg-white rounded-sm ">
        <div className="flex justify-between p-5 border-b">
          <p>线上热门搜索</p>
          <AiOutlineEllipsis />
        </div>
        <div className="p-5 flex">
          <div className="w-[50%]">
            <span className="flex text-gray-400 items-center">
              <p>搜索用户数</p>
              <AiOutlineInfoCircle className="ml-2" />
            </span>
            <span className="flex mt-2 items-center">
              <p className="text-2xl">12,321</p>
              <p className="ml-8 text-gray-400">17.1</p>
              <AiFillCaretDown className="text-red-600" />
            </span>
            <span className="">
              <ResponsiveContainer width="70%" height={70}>
              <LineChart  data={data}>
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#3b82f6" />
                <Tooltip />
              </LineChart>
              </ResponsiveContainer>
            </span>
          </div>

          <div className="w-[50%]">
            <span className="flex text-gray-400 items-center">
              <p>人均搜索次数</p>
              <AiOutlineInfoCircle className="ml-2" />
            </span>
            <span className="flex mt-2 items-center">
              <p className="text-2xl">2.7</p>
              <p className="ml-8 text-gray-400">26.2</p>
              <AiFillCaretUp className="text-green-600" />
            </span>
            <span className="">
              <ResponsiveContainer width="70%" height={70} >
              <LineChart data={data}>
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="uv" stroke="#3b82f6" />
                <Tooltip />
              </LineChart>
              </ResponsiveContainer>
            </span>
          </div>
        </div>

        <div className="w-[90%] mx-auto">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={paginationConfig}
          />
        </div>
      </div>

      <div className="w-full md:w-[49%] bg-white">
        <div className="flex justify-between p-4 border-b">
          <p>销售额类别占比</p>
          <span className="flex items-center">
            <p
              className={`px-3 py-1 border cursor-pointer ${
                first && "text-blue-500 border-blue-500"
              }`}
              onClick={() => {
                setFirst(true);
                setSecond(false);
                setThird(false);
              }}
            >
              全部渠道
            </p>
            <p
              className={`px-3 py-1 border cursor-pointer ${
                second && "text-blue-500 border-blue-500"
              }`}
              onClick={() => {
                setFirst(false);
                setSecond(true);
                setThird(false);
              }}
            >
              线上
            </p>
            <p
              className={`px-3 py-1 border mr-4 cursor-pointer ${
                third && "text-blue-500 border-blue-500"
              }`}
              onClick={() => {
                setFirst(false);
                setSecond(false);
                setThird(true);
              }}
            >
              门店
            </p>
            <AiOutlineEllipsis className="" />
          </span>
        </div>
        <div>
          <p className="pl-5 pt-5">销售额</p>
          <ResponsiveContainer width="95%" height={400}>
            <PieChart >
              <Pie
                data={DonutData}
                cx="50%"
                cy="50%"
                innerRadius={105} // Set the inner radius of the donut chart
                outerRadius={160} // Set the outer radius of the donut chart
                fill="#8884d8"
                dataKey="value"
              >
                <Label
                  value="销售额 15781"
                  position="center"
                  fill="#020617"
                  fontSize={20}
                />
                {DonutData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Part_3;
