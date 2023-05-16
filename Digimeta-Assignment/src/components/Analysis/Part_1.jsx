import React from 'react'
import {
    AiOutlineInfoCircle,
    AiFillCaretUp,
    AiFillCaretDown,
  } from "react-icons/ai";
  import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
  } from "recharts";
   
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
  
  const Part_1 = () => {
  return (
    <div className="flex flex-wrap ml-2">
        <div className="mt-6 mx-3 mb-4 w-full sm:w-[23%] bg-white rounded-sm">
          <span className="flex justify-between px-6 pt-6 pb-1 text-gray-400">
            <p className="text-sm">总销售额</p>
            <AiOutlineInfoCircle />
          </span>
          <p className="text-3xl pl-6">¥ 126,560</p>
          <span className="flex items-center justify-between pb-3 border-b mx-6 pt-6 text-sm">
            <>
              <p>周同比 12%</p>
              <AiFillCaretDown className="text-red-600 " />
            </>
            <>
              <p>日同比 11%</p>
              <AiFillCaretUp className="text-green-600" />
            </>
          </span>
          <p className="text-sm py-2 pl-6">日销售额 ￥12,423</p>
        </div>

        <div className="mt-6 mx-3 mb-4 w-full sm:w-[23%] bg-white rounded-sm">
          <span className="flex justify-between px-6 pt-6 pb-1 text-gray-400">
            <p className="text-sm">访问量</p>
            <AiOutlineInfoCircle />
          </span>
          <p className="text-3xl pl-6">8,846</p>
          <span className="flex items-center justify-between pb-3 border-b mx-6 pt-6 text-sm">
            <LineChart width={220} height={20} data={data}>
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="uv" stroke="#a855f7" />
              <Tooltip />
            </LineChart>
          </span>
          <p className="text-sm py-2 pl-6">日访问量 1,234</p>
        </div>

        <div className="mt-6 mx-3 mb-4 w-full sm:w-[23%] bg-white rounded-sm">
          <span className="flex justify-between px-6 pt-6 pb-1 text-gray-400">
            <p className="text-sm">支付笔数</p>
            <AiOutlineInfoCircle />
          </span>
          <p className="text-3xl pl-6">6,560</p>
          <span className="flex items-center justify-between pb-3 border-b mx-6 pt-6 text-sm">
            <BarChart width={220} height={20} data={data}>
              <CartesianGrid stroke="#f5f5f5" />
              <Tooltip />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </span>
          <p className="text-sm py-2 pl-6">转化率 60%</p>
        </div>

        <div className="mt-6 mx-1 mb-4 w-full sm:w-[23%] bg-white rounded-sm">
          <span className="flex justify-between px-6 pt-6 pb-1 text-gray-400">
            <p className="text-sm">运营活动效果</p>
            <AiOutlineInfoCircle />
          </span>
          <p className="text-3xl pl-6">78%</p>
          <span className="flex w-[80%] items-center justify-between pb-5 border-b mx-6 pt-6 text-sm">
            <div className="w-full bg-gray-200 h-2">
              <div className={`w-[78%] h-full bg-[#22d3ee]`}>

              </div>
            </div>
          </span>
          
          <span className="flex items-center text-sm justify-between py-2 px-6 ">
            <>
              <p>周同比 12%</p>
              <AiFillCaretDown className="text-red-600 " />
            </>
            <>
              <p>日同比 11%</p>
              <AiFillCaretUp className="text-green-600" />
            </>
          </span>
        </div>
      </div>
  )
}

export default Part_1