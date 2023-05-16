import React from 'react'
import { Progress } from "antd";

const ProgressComponent = ({ progress, stores}) => {
  const strokeWidth = 6; // Adjust the stroke width of the progress bar
  const radius = 50; // Adjust the radius of the donut

  const size = radius * 2;
  const progressSize = size - strokeWidth * 2;
  const progressRadius = radius - strokeWidth;
  return (
    <div className="ml-5 pt-10 w-64 ml-8 h-48" >
        <p className="text-lg font-medium">Stores {stores}</p>
        <div className="flex mt-4">
          <div>
            <p className="text-gray-700 w-16">转化率</p>
            <p className="text-2xl">{progress}%</p>
          </div>
          
          <Progress
            type="circle"
            percent={progress}
            width={progressSize}
            strokeWidth={strokeWidth}
            strokeColor="#f59e0b" // Adjust the color of the progress bar
            trailColor="transparent" // Set the trail color to transparent to achieve the donut effect
          />
        </div>
      </div>
  )
}

export default ProgressComponent